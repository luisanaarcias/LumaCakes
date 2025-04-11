// Obtén el input de archivo y la imagen de previsualización
const inputFile = document.querySelector("#input-file");
const imagePreview = document.querySelector("#image-preview");
const contenedor = document.querySelector('#ul');

// Añadir un listener para detectar el cambio en el input (cuando se selecciona un archivo)
inputFile.addEventListener("change", function() {
    const file = inputFile.files[0]; // Obtén el primer archivo seleccionado
    if (file) {
        // Crea un nuevo FileReader para leer la imagen
        const reader = new FileReader();
        
        // Define lo que sucede cuando se carga el archivo
        reader.onload = function(event) {
            // Establece la URL de la imagen en el src de la imagen de previsualización
            imagePreview.src = event.target.result;
            imagePreview.classList.replace('hidden', 'block'); // Muestra la imagen
        };

        // Lee el archivo como una URL de datos (esto permite la previsualización)
        reader.readAsDataURL(file);
    }
});

async function cargarImagenesBase64() {
    try {
        const response = await axios.get('/api/gallery');
        const imagenes = response.data;

        contenedor.innerHTML = '';
        
        imagenes.forEach(({ data, contentType, _id }) => {
            const li = document.createElement('li');
            li.id = _id;
            li.classList.add('flex', 'flex-col', 'group', 'relative', 'w-30', 'h-40' ,'md:size-40', 'bg-white', 'rounded-lg', 'overflow-hidden', 'cursor-pointer');

            li.innerHTML = `
                <img src="${`data:${contentType};base64,${data}`}" alt="${`Imagen ${_id}`}" class="size-full">
                <div class="flex justify-center items-center md:group-hover:flex md:hidden absolute bottom-0 md:inset-0 bg-indigo-950/80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[50%]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            `;

            contenedor.prepend(li);

            li.children[1].addEventListener('click', async e => {
                try {
                    await axios.delete(`/api/gallery/${e.target.parentElement.parentElement.id}`);

                    cargarImagenesBase64();
                } catch (error) {
                    console.log(error);
                }
            });
        });
    } catch (error) {
        console.error('Error al cargar imágenes base64:', error);
    }
}

document.querySelector("#form").addEventListener("submit", async function (event) {
    event.preventDefault();  // Evita que se recargue la página al enviar el formulario

    const formData = new FormData();

    // Verificamos si un archivo ha sido seleccionado
    if (inputFile.files.length === 0) {
        alert("Por favor selecciona una imagen");
        return;
    }

    // Agregamos el archivo al FormData
    formData.append("imagen", inputFile.files[0]);

    try {
        // Realizamos la solicitud POST a la API
        await axios.post("/api/gallery", formData);

        inputFile.value = '';
        imagePreview.src = '';
        cargarImagenesBase64();

    } catch (error) {
        console.error("Error:", error);
        alert("Hubo un problema con la subida");
    }
});

window.onload = () => {
    cargarImagenesBase64();
};