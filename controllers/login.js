const loginRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// logica cuando el usuario se logea
loginRouter.post("/", async (request, response) => {
	const {email, password} = request.body;
	const userExist = await User.findOne({email});
	
	if (!userExist) {
		return response.status(400).json({error: "email o contraseña invalido"});
	}

	const isCorrect = await bcrypt.compare(password, userExist.passwordHash);

	if (!isCorrect) {
		return response.status(400).json({error: "email o contraseña invalido"});
	}

	const userForToken = {
		id: userExist._id.toString(),
	};

	const accesToken = jwt.sign(userForToken, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: "1d",
	});

	response.cookie("accesToken", accesToken, {
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1),
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
	});

	return response.sendStatus(200);
});

module.exports = loginRouter;
