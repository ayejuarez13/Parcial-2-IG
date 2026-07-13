// declaro variables prncipales
let cantidadInstalaciones = 0;   // guarda la cantidad de instalaciones a producir
let instalacionesIngresadas = 0; // lleva la cuenta de cuántas ya se cargaron
let instalaciones = [];          // array donde se guardan los datos de cada instalación
let horasPorDia = 0;
let valorPorHora = 0;

// bloqueo de inicial de input y botones
document.querySelector('#nombreInstalacion').disabled = true;
document.querySelector('#personas').disabled = true;
document.querySelector('#dias').disabled = true;
document.querySelector('#btnAgregarInstalacion').disabled = true;
document.querySelector('#btnCalcular').disabled = true;

//paso 1: ingreso de datos
document.querySelector('#btnDatosGenerales').addEventListener('click', function() { //convierte a numero
    cantidadInstalaciones = Number(document.querySelector('#cantidadInstalaciones').value);
    horasPorDia = Number(document.querySelector('#horasDia').value);
    valorPorHora = Number(document.querySelector('#valorHora').value);

    if (cantidadInstalaciones < 1 || horasPorDia < 1 || valorPorHora < 1) { //condicior ser mayor a 0
        alert("Completá todos los datos generales con valores mayores a 0.");
    } else { //deshabilita inputs y boton de datos generales y habilita ingreso de instalacion
        document.querySelector('#btnDatosGenerales').disabled = true;
        document.querySelector('#cantidadInstalaciones').disabled = true;
        document.querySelector('#horasDia').disabled = true;
        document.querySelector('#valorHora').disabled = true;

        document.querySelector('#nombreInstalacion').disabled = false;
        document.querySelector('#personas').disabled = false;
        document.querySelector('#dias').disabled = false;
        document.querySelector('#btnAgregarInstalacion').disabled = false;

        alert("Ahora podés cargar los datos de cada instalación.");
    }
});

// paso 2: agregar cada instalacion 
document.querySelector('#btnAgregarInstalacion').addEventListener('click', function() {
    let nombre = document.querySelector('#nombreInstalacion').value; //busca campo y lo guarda en variable
    let personas = Number(document.querySelector('#personas').value); //convierte a numero y guarda en variable
    let dias = Number(document.querySelector('#dias').value); //convierte a  numero y guarda en variable

    if (nombre === "" || personas < 1 || dias < 1) { //condicion si nombre esta vacio o personas y dias son menores a 1
        alert("Datos inválidos. Completá el nombre y valores mayores a 0 en personas y días.");
        return;
    }

    instalaciones.push({ //array de objetos donde guardo datos de cada instalacion
        nombre: nombre,
        personas: personas,
        dias: dias
    });

    instalacionesIngresadas++;

    document.querySelector('#nombreInstalacion').value = ""; //limpio los campos de ingreso
    document.querySelector('#personas').value = "";
    document.querySelector('#dias').value = "";

    if (instalacionesIngresadas === cantidadInstalaciones) { //condicion si se cumplen la instlaciones ingresadas y la cant de instalciones
        document.querySelector('#nombreInstalacion').disabled = true;
        document.querySelector('#personas').disabled = true;
        document.querySelector('#dias').disabled = true;
        document.querySelector('#btnAgregarInstalacion').disabled = true;
        document.querySelector('#btnCalcular').disabled = false; //habilita boton de calcular resultados
        alert("Ya cargaste todas las instalaciones. Ahora podés calcular los resultados.");
    }
});

// paso 3: calcular resultados
document.querySelector('#btnCalcular').addEventListener('click', function() { //se crea variablesfinales
    let totalPersonas = 0;
    let instalacionMasDias = instalaciones[0];
    let costoTotalEstudio = 0;

    for (let i = 0; i < instalaciones.length; i++) {
        let instalacion = instalaciones[i];

        totalPersonas += instalacion.personas;

        let costoInstalacion = instalacion.personas * instalacion.dias * horasPorDia * valorPorHora;
        costoTotalEstudio += costoInstalacion;

        if (instalacion.dias > instalacionMasDias.dias) {
            instalacionMasDias = instalacion;
        }
    }

    let costoDiaTotal = totalPersonas * horasPorDia * valorPorHora;
    let costoInstalacionMasDias = instalacionMasDias.personas * instalacionMasDias.dias * horasPorDia * valorPorHora;
    let porcentaje = (costoInstalacionMasDias / costoTotalEstudio) * 100;

    let resultadosDiv = document.querySelector("#resultados");
    resultadosDiv.innerHTML = "";

    resultadosDiv.innerHTML += "Costo total de un día de trabajo (todo el estudio): $" + costoDiaTotal + "<br>";
    resultadosDiv.innerHTML += "Instalación con más días de producción: " + instalacionMasDias.nombre + " (" + instalacionMasDias.dias + " días) - Costo total: $" + costoInstalacionMasDias + "<br>";
    resultadosDiv.innerHTML += "Esa instalación representa el " + porcentaje.toFixed(2) + "% del costo total del estudio" + "<br>";
});

// paso 4:reiniciar
document.querySelector('#btnReiniciar').addEventListener('click', function() {
    cantidadInstalaciones = 0;
    instalacionesIngresadas = 0;
    instalaciones = [];
    horasPorDia = 0;
    valorPorHora = 0;

    document.querySelector('#cantidadInstalaciones').value = "";
    document.querySelector('#horasDia').value = "";
    document.querySelector('#valorHora').value = "";
    document.querySelector('#nombreInstalacion').value = "";
    document.querySelector('#personas').value = "";
    document.querySelector('#dias').value = "";

    document.querySelector('#cantidadInstalaciones').disabled = false;
    document.querySelector('#horasDia').disabled = false;
    document.querySelector('#valorHora').disabled = false;
    document.querySelector('#btnDatosGenerales').disabled = false;

    document.querySelector('#nombreInstalacion').disabled = true;
    document.querySelector('#personas').disabled = true;
    document.querySelector('#dias').disabled = true;
    document.querySelector('#btnAgregarInstalacion').disabled = true;
    document.querySelector('#btnCalcular').disabled = true;

    document.querySelector("#resultados").innerHTML = "";

    alert("Sistema reiniciado. Podés ingresar nuevos datos.");
});