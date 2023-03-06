/* Curso Java Script*/

/*alert('Hola Julio')*/

/* Variables */

var nombre = "Julio Cesar";

var altura = 120;

/*var concatenacion = nombre +  '' + altura;*/

/*document.write(concatenacion); /* Poner texto en el html */

var Apellido = "Quispe Garrido";
var Email = "Juliocesarquispegarrido@gmail.com";
var Numero = 961337513;
var Dirección = "AV. San Juan de Mirafores";

var concatenación =
  Apellido +
  "" +
  Email +
  "" +
  Numero +
  "" +
  Dirección; /* Concatenar diferentes variables */

document.write(concatenación); /* Poner texto en Html*/

let Nom = "Liza";
let Ape = "Timonaliza";
let Love = "Amorcito";

var Alinear = Nom + "" + Ape + "" + Love;

var datos = document.getElementById("datos"); /* PONER TEXTO EN HTML */
datos.innerHTML = Alinear;

const lov = "Jisoo";
const Amor = "Rosee";
const Jenn = "Jenny";

const Amores = lov + "" + Amor + "" + Jenn;

/*const love = document.getElementById("love");
love.innerHTML = `
<h1> Tecnologia <h1/>
<h2> Desarrollador Full Stack <h2/>
<h3> Nombre: ${nombre} <h3>
<h4> Altura: ${altura} <h4/>

`;

/* Condicionales */


if (altura <= 151 ) {
   love.innerHTML += `
   <h1> Eres muy alto y guapo <h1/>
   ` 
}else{

    love.innerHTML += `
   <h1> Eres demasiado bajito enano <h1/>
    `
}

/* Bucles */

 /*for (let i = 100 ;  i <= 200; i++  ) {
    usuario.innerHTML += `
    <h3> Este es el numero de la suerte:
    `+ i;
}*/

   
    

// Funciones

function muestraMiNombre(nombre, altura){
   const misDatos = `
    <h1> Tecnologia <h1/>
    <h2> Desarrollador Full Stack <h2/>
    <h3> Nombre: ${nombre} <h3>
    <h4> Altura: ${altura} <h4/>
    
    `;
    return misDatos;
}

function inprimir (){
    const love = document.getElementById("love");
    love.innerHTML = muestraMiNombre('Julio Cesar', 172);


}

inprimir()

// Array

var nombres = ['Victor', 'Joaquin','Julio' ]


document.write('<h2> Listado de nombres <h2/>')
for(i = 0; i< nombres.length; i++ ) { 

document.write(nombres[i] + '<br/>');
}  /* Primera forma*/


nombres.forEach((nombre) => {
    document.write(nombre + '<br/>')
    
    }); /* Segunda Forma */