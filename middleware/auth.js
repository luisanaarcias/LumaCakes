const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userExtractor = async (request, response, next) => {
	try {
		console.log('llego a userExtractor');
		const token = request.cookies?.accesToken;

		//  si no existe el token enviamos un error de estatus 401 que significa que no esta autorizado
		if (!token) {
			console.log('no hay token');
			return response.sendStatus(401);
		}
		// validamos si el  token esta firmado por nuestro servidor

		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		const user = await User.findById(decoded.id);
		request.user = user;
	} catch (error) {
		console.log('hubo un error');
		return response.sendStatus(403);
	}
    console.log('paso el user extractor');
	// independientmente si ocurre  un  error la  aplicacon no e detiene gacias al next
	next();
};

module.exports = {userExtractor};
