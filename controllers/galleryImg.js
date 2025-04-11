const galleryImgRouter = require("express").Router();
const Image = require("../models/image");

galleryImgRouter.get('/', async (request, response) => {
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

module.exports = galleryImgRouter;