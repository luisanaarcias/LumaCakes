const contenedor = document.querySelector('#ul');

async function cargarImagenesBase64() {
    try {
        const response = await axios.get('/api/gallery/img');
        const imagenes = response.data;

        contenedor.innerHTML = '';
        
        imagenes.forEach(({ data, contentType, _id }) => {
            const li = document.createElement('li');
            li.id = _id;
            li.classList.add('group', 'sm:w-[49%]', 'lg:w-[32%]', '2xl:w-[24%]');

            li.innerHTML = `
                <img src="${`data:${contentType};base64,${data}`}" alt="${`Imagen ${_id}`}" class="group-hover:scale-120 rounded-xl transition-all">
            `;

            contenedor.prepend(li);
        });
    } catch (error) {
        console.error('Error al cargar imágenes base64:', error);
    }
}

window.onload = () => {
    cargarImagenesBase64();
};