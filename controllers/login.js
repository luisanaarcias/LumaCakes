const loginRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// logica cuando el usuario se logea
loginRouter.post("/", async (request, response) => {
	const {email, password} = request.body;
	const userExist = await User.findOne({email});
	console.log(email);
	console.log(password);
	console.log(userExist.password);
	
	console.log('paso1');
	if (!userExist) {
		return response.status(400).json({error: "email o contraseña invalido"});
	}
	console.log('paso2');

	const isCorrect = await bcrypt.compare(password, userExist.passwordHash);

	if (!isCorrect) {
		return response.status(400).json({error: "email o contraseña invalido"});
	}
	console.log('paso3');

	const userForToken = {
		id: userExist._id.toString(),
	};
	console.log('paso4');

	const accesToken = jwt.sign(userForToken, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: "1d",
	});
	console.log('paso5');

	response.cookie("accesToken", accesToken, {
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1),
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
	});

	return response.sendStatus(200);
});

module.exports = loginRouter;
