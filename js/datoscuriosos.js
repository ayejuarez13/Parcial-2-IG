// Se captura el botón
const boton = document.querySelector('#boton-dato');

// Variables
let num = 0; // almacena el número aleatorio que determina el dato curioso que se muestra
let mostrarResultado = document.querySelector('#dato-curioso');

// Evento click y se ejecuta la funcion
boton.addEventListener('click', function() {
    num = Math.floor(Math.random() * 10) + 1;

    // Estructura switch recibe la variable num
    switch(num) {
    case 1:
        mostrarResultado.innerText = 'Casey Reas es co-creador de Processing, un lenguaje de programación visual diseñado para artistas y estudiantes de diseño.';
        break;
    case 2:
        mostrarResultado.innerText = 'Junto a Ben Fry desarrolló Processing como una herramienta educativa en el MIT Media Lab en 2001.';
        break;
    case 3:
        mostrarResultado.innerText = 'Su obra artística se basa en la escritura de algoritmos que generan imágenes en constante cambio.';
        break;
    case 4:
        mostrarResultado.innerText = 'Está influenciado por el arte conceptual y sistemático, especialmente por las instrucciones visuales de Sol LeWitt.';
        break;
    case 5:
        mostrarResultado.innerText = 'Ha realizado exposiciones en museos como el MoMA, el Centre Pompidou y el ICA de Londres.';
        break;
    case 6:
        mostrarResultado.innerText = 'Muchas de sus obras son generadas en tiempo real, por lo que nunca se ven exactamente igual dos veces.';
        break;
    case 7:
        mostrarResultado.innerText = 'Publicó libros fundamentales sobre programación creativa como Processing: A Programming Handbook for Visual Designers and Artists.';
        break;
    case 8:
        mostrarResultado.innerText = 'Ha trabajado como profesor en el Departamento de Diseño de Medios en la UCLA.';
        break;
    case 9:
        mostrarResultado.innerText = 'Explora el arte generativo como un proceso basado en reglas simples que producen resultados complejos y emergentes.';
        break;
    case 10:
        mostrarResultado.innerText = 'Además de visuales digitales, ha realizado impresiones generativas de gran formato como obras únicas o en series.';
        break;
    }
});