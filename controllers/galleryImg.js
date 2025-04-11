const galleryImgRouter = require("express").Router();
const Image = require("../models/image");

galleryImgRouter.get('/', async (request, response) => {
    console.log('entro al delete del enpoint incorrecto');

    const images = await Image.find({});

    const result = images
    .filter(img => img.imagen && img.imagen.data && img.imagen.contentType)
    .map(img => ({
        _id: img._id,
        contentType: img.imagen.contentType,
        data: img.imagen.data.toString('base64')
    }));
    
    return response.status(200).json(result);
});
console.log('no se encontro el enpoint correcto');

module.exports = galleryImgRouter;