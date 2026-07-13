let contenedorGaleria = document.querySelector("#galeria");

contenedorGaleria.innerHTML = `
    <div class="obra">
        <img src="imagenes/century.png" alt="Century">
        <p>Century - 2021</p>
    </div>
    <div class="obra">
        <img src="imagenes/aai.jpg" alt="Anarchic Artificial Intelligence">
        <p>Anarchic Artificial Intelligence - 2021</p>
    </div>
    <div class="obra">
        <img src="imagenes/untitled.jpg" alt="Untitled Film Stills">
        <p>Untitled Film Stills - 2019/2023</p>
    </div>
    <div class="obra">
        <img src="imagenes/process.jpg" alt="Process 4-18">
        <p>Process 4-18 - 2005</p>
    </div>
    <div class="obra">
        <img src="imagenes/phototaxis.jpeg" alt="Phototaxis">
        <p>Phototaxis - 2021</p>
    </div>
`;

//funcionalidad

let botonTamaño = document.querySelector("#boton-tamaño");
let imagenesGrandes = false; // arranca en falso (tamaño normal)

botonTamaño.addEventListener("click", function() {
    let todasLasImagenes = document.querySelectorAll(".obra img");

    if (imagenesGrandes == false) {
        // Si estan en tamaño normal, las agrando
        for (let i = 0; i < todasLasImagenes.length; i++) {
            todasLasImagenes[i].style.width = "25rem";
        }
        imagenesGrandes = true;
    } else {
        // Si ya estan grandes, las vuelvo a achicar
        for (let i = 0; i < todasLasImagenes.length; i++) {
            todasLasImagenes[i].style.width = "15rem";
        }
        imagenesGrandes = false;
    }
});