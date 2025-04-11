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




// const formData = new FormData();
//     formData.append("nombre", Nombre.value);
//     formData.append("cantidad", Cantidad.value);
//     formData.append("costo", Costo.value);
//     formData.append("precio", Precio.value);
//     formData.append("fecha", crearFechaActual());

//     // Solo adjunta la imagen si se seleccionó una
//     if (Imagen.files[0]) {
//         formData.append("imagen", Imagen.files[0]);
//     }

//     try {
//         const { data } = await axios.post('/api/productos', formData, {
//             headers: { "Content-Type": "multipart/form-data" }
//         });






// models  const productoSchema = new mongoose.Schema({
//     nombre: String,
//     cantidad: String,
    
//     costo: String,
//     precio: String,
//     fecha: String,
//     imagen: {
//         data: Buffer, // Almacena los datos binarios
//         contentType: String // Almacena el tipo de archivo (por ejemplo: "image/jpeg")
//     },
//     checked: Boolean,
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User' // Relación con el usuario
//     }
// }); 