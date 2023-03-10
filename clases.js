// console.log('Hola');

//CLASES

class Coche {
  constructor(modelo, velocidad, antiguedad) {
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.antiguedad = antiguedad;
  }

  aumentaVelocidad() {
    this.velocidad += 1;
  }

  disminuyeVelocidad() {
    this.velocidad -= 1;
  }

  aumentaAntiguedad() {
    this.antiguedad += 2;
  }
}

var coche1 = new Coche("Toyota", 50, 2002);
var coche2 = new Coche("Toyota", 51, 2002);
var coche3 = new Coche("Toyota", 52, 2002);

//Disminuye año
coche1.disminuyeVelocidad();
coche1.disminuyeVelocidad();
coche1.disminuyeVelocidad();
coche1.disminuyeVelocidad();
coche1.disminuyeVelocidad();
coche1.disminuyeVelocidad();
// Aumenta año
coche1.aumentaAntiguedad();
coche1.aumentaAntiguedad();
coche1.aumentaAntiguedad();
console.log(coche1);

// Ejemplo 2 Clases

class Personas {
  constructor(id, genero, años) {
    (this.id = id), (this.genero = genero), (this.años = años);
  }

  newAños() {
    this.años += 1;
  }
}

class OldPersonas extends Personas { //Herencia de la Clase
  constructor(id, genero, años) {
    super(id, genero, años);
  }
}

var OldPersonas1 = new OldPersonas(2, "Femenino", 2000);
console.log(OldPersonas1);

var personas1 = new Personas(1, "Masculino", 1992);

personas1.newAños();
personas1.newAños();
personas1.newAños();
console.log(personas1);


//Ejemplo 3 Clases

class Tecnico {

  
constructor(id, nombre, genero, años){
  this.id = id;
  this.nombre = nombre;
  this.genero = genero;
  this.años = años;
}

aumentaAños (){
  this.años += 2;
}

disminuyeAños (){
this.años -= 2;

}


}

class newTecnico extends Tecnico {  // Clase Hijo extends
constructor (id,nombre,genero, años){
  super(id,nombre,genero,años )
}

aumentaAños (){
this.años += 1;

}

}

// Clase Padre

var tecnico1 = new Tecnico(1, 'Julio', 'Masculino', 2000);
console.log(tecnico1);
tecnico1.disminuyeAños();
tecnico1.disminuyeAños();
tecnico1.disminuyeAños();
tecnico1.disminuyeAños();


document.write('<h2> '+ tecnico1.genero + '<h2/>' );

document.write('<h2> '+ tecnico1.nombre + '<h2/>' );

document.write('<h2> '+ tecnico1.id + '<h2/>' );
document.write('<h2> '+ tecnico1.años + '<h2/>' );


// Clase Hijo
var newTecnico1 = new newTecnico ( 3, 'Cesar', 'Macho', 3000);
console.log(newTecnico1);

newTecnico1.aumentaAños();
newTecnico1.aumentaAños();
newTecnico1.aumentaAños();
newTecnico1.aumentaAños();

document.write('<h3>'+newTecnico1.años +  '<h3/>')
document.write('<h3>'+newTecnico1.id +  '<h3/>')
document.write('<h3>'+newTecnico1.genero +  '<h3/>')
document.write('<h3>'+newTecnico1.nombre +  '<h3/>')


// Ejemplo 4 Clases 


class Amor{
constructor(salida,compromiso,crush, años ){
this.salida = salida;
this.compromiso = compromiso;
this.crush = crush;
this.años = 27;

}

aumentaAños (){
this.años += 2;

}

disminuyeAños (){
  this.años -= 2;
  
  }

}

{/* Extendiendo Clase*/}

class love extends Amor {
constructor(salida,compromiso,crush, años ){
  super(salida,compromiso,crush,años)
}


}



let love1 = new love('teresa', 'bebe','jenny',30);
console.log(love1);

let amor1 = new Amor('Rose', 'Yoona', 'Liza', 27);


amor1.disminuyeAños();
amor1.disminuyeAños();
amor1.disminuyeAños();

document.write('<h2>'+ love1.crush +  '</h2>')