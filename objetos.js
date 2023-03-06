// OBJETOS JSON

var Coche = {
  modelo: "Mercedes Clase A",
  maxima: 5000,
  año: 2020,

  mostrarDatos() {
    console.log(this.modelo, this.maxima, this.año); /*This axede a los Datos*/
    console.log(this.modelo, this.maxima, this.año);
  },
  propiedad1: "valor aleatorio",
};

document.write("<h2>" + Coche.año + "<h2/> ");

Coche.mostrarDatos();
console.log(Coche);

//Ejemplo 2 Json

var Marcas = {
  sansung: "tv",
  sony: "Equipo",
  Huawei: "Celular",

  obtenerMarcas() {
    console.log(this.sansung, this.sony, this.Huawei);
  },

  valor: "preciofijo",
};

document.write("<h3>" + Marcas.sony + Marcas.Huawei + "<h3/>");

Marcas.obtenerMarcas();
console.log(Marcas);

// EJEMPLO 3 JASON

let Usuarios = {
  id: 1,
  nombre: "Frank",
  Apellido: "Quispe",
  numero: 961337513,

  ObtnerUsuarios() {
    document.write("<h2>", this.Apellido, this.nombre, this.numero, "<h2/>");
  },

  usuarios: "Buenos",
};

Usuarios.ObtnerUsuarios();
console.log(Usuarios);
