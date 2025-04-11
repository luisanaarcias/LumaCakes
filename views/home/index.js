const section = document.querySelector("#personalized-cakes");
const decorationMobile = document.querySelector("#decorative-figure-mobile");
const decorationDestock = document.querySelector("#decorative-figure-destock");

const calculateHeigh = () => {
    //Calcula la distancia desde el top de la ventana hasta el final de section
    const distanceFromTop = section.getBoundingClientRect().bottom + window.scrollY;
    //Aplicar el valor al height del div decorativo
    decorationMobile.style.height = `${distanceFromTop}px`;
    decorationDestock.style.height = `${distanceFromTop}px`;
};

//Llamar a la funcion encargada de recalcular la altura de la decoracion cada vez que cambie el tamaño de la pantalla
window.addEventListener('resize', e => {
    calculateHeigh();
});
//Llamar a la funcion encargada de recalcular la altura de la decoracion cada vez que recargue la pagina
window.onload = () => {
    calculateHeigh();
};