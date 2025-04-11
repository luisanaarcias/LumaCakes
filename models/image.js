const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
	imagen: {
	    data: Buffer, // Almacena los datos binarios
	    contentType: String // Almacena el tipo de archivo (por ejemplo: "image/jpeg")
	}
});

imageSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;