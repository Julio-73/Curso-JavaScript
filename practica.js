/* Alerta */
console.log("Te amo liza");

/* Ejercicios */

let Nombre = "Julio Cesar";
let Apellido = "Quispe Garrido";
let Numero = 961337513;

var Concatenación = Nombre + "" + Apellido + "" + Numero;

document.write(Concatenación);

/* Bucles */

 /* for (let i = 0; i <= 500; i++) {
  usuario.innerHTML +=
    `
    <h2> Love numero: 
    ` + i;
} */

 /* for (let i = 100; i <= 200; i++) {
  conteo.innerHTML +=
    `
  <h3> Te amo:
  
  ` + i;
}*/


const Usuario = 'Robert';
const Curso = 'Matematica';
const Año = 'Primero';

const Total = Usuario + '' + Curso + '' + Año ;

var conteo =  document.getElementById('sumer');
sumer.innerHTML = `
<h3>  Datos de Usuario <h3/>
<h2> Nombre: ${Usuario} <h2/>
<h3> año : ${Año} <h3/>
`

/* Condicionales */

var altura = 130


if (altura <= 170 ){
    conteo.innerHTML += `
 <h2> El es el verdadero <h2/>
`

}else {
    conteo.innerHTML += `
   <h2> El es el falso <h2/>
    ` 
}
   
// Funciones

function mustraMisDatos (nombre, masculino){
const Datos = `
<h1> Desarrollador Full STACK <h1/>
<h2> nombre: ${nombre} <h2/>
<h3> genero: ${masculino} <h3/>
`
return Datos

}

function imprimir (){
const usuarios = document.getElementById('usuarios')
usuarios.innerHTML = mustraMisDatos('Cesar', 'Masculino')
}

imprimir()

// Array