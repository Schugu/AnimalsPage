'use strict'

function crearCardAnimal(imagenSrc, nombreAnimal, link, parrafo) {
    // Crear el contenedor de la tarjeta del animal
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainer');

    // Crear la tarjeta del animal como un artículo
    const cardAnimal = document.createElement('article');
    cardAnimal.classList.add('cardAnimales');

    // Crear la parte frontal de la tarjeta como un div
    const cardFront = document.createElement('div');
    cardFront.classList.add('cardAnimalesFront');

    // Crear la imagen del animal
    const imagen = document.createElement('img');
    imagen.classList.add('cardAnimalesFront__img');
    imagen.src = imagenSrc;
    imagen.alt = nombreAnimal;

    // Crear el título del animal como un encabezado
    const titulo = document.createElement('h2');
    titulo.classList.add('cardAnimalesFront__h2');
    titulo.textContent = nombreAnimal;

    // Añadir la imagen y el título a la parte frontal de la tarjeta
    cardFront.appendChild(imagen);
    cardFront.appendChild(titulo);

    // Crear la parte posterior de la tarjeta como un div
    const cardBack = document.createElement('div');
    cardBack.classList.add('cardAnimalesBack');

    // Crear el enlace al artículo de Wikipedia
    const enlace = document.createElement('a');
    enlace.classList.add('linkCardAnimales');
    enlace.href = link;
    enlace.target = '_blank';

    const negrita = document.createElement('b');
    negrita.textContent = nombreAnimal;

    // Crear el párrafo con la descripción del animal
    const parrafoElement = document.createElement('p');
    parrafoElement.classList.add('cardAnimalesBack__P');
    parrafoElement.textContent = parrafo;

    // Construir la estructura de la parte posterior de la tarjeta
    enlace.appendChild(negrita);
    cardBack.appendChild(enlace);
    cardBack.appendChild(document.createElement('hr'));
    cardBack.appendChild(parrafoElement);

    // Añadir la parte frontal y posterior a la tarjeta del animal
    cardAnimal.appendChild(cardFront);
    cardAnimal.appendChild(cardBack);

    // Añadir la tarjeta del animal al contenedor
    cardContainer.appendChild(cardAnimal);

    // Devolver el contenedor de la tarjeta del animal
    return cardContainer;
}

function crearTarjetas(informacion) {
    // Crear el contenedor de las cartas de animales
    const contenedorAnimales = document.createElement('div');
    contenedorAnimales.classList.add('cartasAnimales');

    // Agregar las tarjetas de animales al contenedor
    informacion.forEach(animal => {
        const tarjeta = crearCardAnimal(animal.imagen, animal.nombre, animal.link, animal.parrafo);
        contenedorAnimales.appendChild(tarjeta);
    });

    // Devolver el contenedor de las cartas de animales
    return contenedorAnimales;
}

// Obtener el contenedor de las cartas de animales
const contenedorAnimales = document.querySelector('.cartasAnimales');

// Crear las tarjetas de animales y agregarlas al contenedor
const fragmentoTarjetas = crearTarjetas(informacion);
contenedorAnimales.appendChild(fragmentoTarjetas);

// Agregar evento de clic a las tarjetas para el efecto de volteo
var cards = document.querySelectorAll(".cardAnimales");

// Agregar evento de clic a cada tarjeta
cards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.classList.toggle("clicked");
    });
});