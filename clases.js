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
