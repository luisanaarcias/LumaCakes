require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const galleryRouter = require("./controllers/gallery");
const galleryImgRouter = require("./controllers/galleryImg");
const {userExtractor} = require("./middleware/auth");
const logoutRouter = require("./controllers/logout");
const { MONGO_URI} = require('./config');

(async () => {
	try {
		await mongoose.connect(MONGO_URI);
		console.log("Conectado correctamente");
	} catch (error) {
		console.log(error);
	}
})();

//middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Rutas Fronted
app.use("/", express.static(path.resolve("views", "home")));
app.use("/home", express.static(path.resolve("views", "homee")));
app.use("/galeria", express.static(path.resolve("views", "gallery")));
app.use("/contacto", express.static(path.resolve("views", "contact")));
app.use("/cursos", express.static(path.resolve("views", "courses")));
app.use("/administrador", express.static(path.resolve("views", "administrator")));
app.use("/login", express.static(path.resolve("views", "login")));
app.use("/components", express.static(path.resolve("views", "components")));
app.use("/verify/:id/:token", express.static(path.resolve("views", "verify")));
//Rutas de imagenes
app.use("/images", express.static(path.resolve("img")));
app.use("/images/user", express.static(path.resolve("img", "user")));
app.use("/images/landing", express.static(path.resolve("img", "landing")));
app.use("/images/courses", express.static(path.resolve("img", "courses")));
app.use("/images/contact", express.static(path.resolve("img", "contact")));
app.use("/images/gallery", express.static(path.resolve("img", "gallery")));

//Rutas de backend
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/logout", logoutRouter);
app.use("/api/gallery", userExtractor, galleryRouter);
app.use("/api/gallery/img", userExtractor, galleryImgRouter);

app.use(morgan("tiny"));

module.exports = app;
