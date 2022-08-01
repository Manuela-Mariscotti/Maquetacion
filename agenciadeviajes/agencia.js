
let consultas = [];

function solicitarInfo(){

    let nombre = document.getElementById("nombre");
    let origen = document.getElementById("origen");
    let destino = document.getElementById("destino");
    let personas = document.getElementById("personas");
    let fecha = document.getElementById("fecha");

    let consulta = {
        nombre_consulta: nombre.value,
        origen_consulta: origen.value,
        destino_consulta: destino.value,
        personas_consulta: personas.value,
        fecha_consulta: fecha.value
    };

    consultas.push(consulta);
    console.log(consulta);
    console.log(consultas);
}
function filtrar(){
    let contenedor = document.getElementById("section__contacto")

    for (let i = 0; i < consultas.length; i++) {

        let destinoActual = consultas[i].destino_consulta;
        let destinoLowercase = destinoActual.toLowerCase();
        
        if(destinoLowercase == "canarias" || destinoLowercase == "mallorca" || destinoLowercase== "galicia" ){
            
            contenedor.innerHTML += 
            `<div class="lista"><ul><li>Nombre : ${consultas[i].nombre_consulta}</li><li>Origen : ${consultas[i].origen_consulta}</li><li>Destino : ${consultas[i].destino_consulta}</li><li>Cantidad de personas${consultas[i].personas_consulta}</li><li>Fecha${consultas[i].fecha_consulta}</li></ul></div><br>`;
        }
    }
}