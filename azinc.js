// PROMESAS AZINC AWAIT

/* var Saludar = new Promise((resolve, reject) => {
    setTimeout(()=>{
let saludo = 'Hola muy buenas a todos chavales!!!'
saludo = false;
if(saludo){
    resolve(saludo)
}else{
    reject('No hay saludo disponible')
}


    }, 5000);
});

Saludar.then(resultado =>{
alert(resultado);

})
.catch(error =>{
    alert(error)
})  */

// ejemplo 2

/* var Testear = new Promise((resolve, reject) => {
  setTimeout(() => {
    const Hacker = "No eres un hacker";

    if (Hacker) {
      resolve(Hacker);
    } else {
      reject("No eres un hacker");
    }
  }, 1000);
});

Testear.then((resultado) => {
  alert(resultado);
})
.catch((error) => {
  alert(error);
}); */

// EJEMPLO 3

/* const Sumar = new Promise((resolve, reject) => {
    setTimeout(() => {
        var Time = 'Es hora de Programar'
        
if(Time){
resolve(Time)

}else{
reject('No es hora de programar')

}

    }, 5000);
})

Sumar.then(resultado =>{
alert(resultado);

})

.catch(error =>{
  alert(error);
}) */

// EJEMPLO 3 PROMESAS

  var Datos = new Promise((resolve, reject) => {
    setTimeout(() => {
        var teQuiero = 'Yo realmente te quiero'
  
        if(teQuiero){
resolve(teQuiero)

        } else{
            reject('No te quiero')
        }
    }, 2000);

})

Datos.then(resultado =>{
   console.log(resultado);
})

.catch(error =>{
   console.log(error);
}) 

// EJEMPLO 4

var Supervisores = new Promise((resolve, reject) => {
  setTimeout(() => {
    var Teamo = "Hacker: Estas en la mira";
    Teamo = false;
    if (Teamo) {
      resolve(Teamo);
    } else {
      reject("Te quedan 5 segundos  ");
    }
  }, 5000);
});

Supervisores.then((resolve) => {
  console.log(resolve);
})
.catch((error) => {
  console.log(error);
});



// EJEMPLO 5

  let Personas = new Promise((resolve, reject) => {
  setTimeout(() => {
    var Hora = 'Alerta'
    Hora = false;
    if(Hora){
resolve(Hora)
    }else {
      reject('Te acaban de Hackear')
    }


  }, 2000);
})

Personas.then(resultado =>{
  alert(resultado);
})

.catch(error =>{
  alert(error);
}) 


// Ejempplo 6 

var Amor = new Promise((resolve, reject) => {
  setTimeout(() => {
    var Saludo = 'Hola eres Bienvenido'
    Saludo = false;
   
if(Saludo){
resolve(Saludo)

}else{
  reject('No eres Bienvenido')
}
  }, 5000);
})

Amor.then(resultado =>{
 console.log(resultado);
})

.catch(error =>{
  console.log(error)
})