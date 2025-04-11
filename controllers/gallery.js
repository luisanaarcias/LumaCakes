const galleryRouter = require("express").Router();
const Image = require("../models/image");
const upload = require("../middleware/upload.js");

galleryRouter.get('/', async (request, response) => {
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

galleryRouter.post('/', upload.single("imagen"), async (request, response) => {
    try {
        if (!request.file) return response.status(400).json({ error: 'La imagen es requerida' });

        const newImage = new Image({
            imagen: {
                data: request.file.buffer,
                contentType: request.file.mimetype
            },
            user: request.user._id
        });

        await newImage.save();
        return response.sendStatus(201);

    } catch (error) {
        return response.status(500).json({ error: "Ocurrió un error en el servidor.", detalle: error.message });
    }
});

galleryRouter.delete('/:id', async (request, response) => {
    const id = request.params.id;

    await Image.findByIdAndDelete(id);

    return response.sendStatus(204);
});

module.exports = galleryRouter;