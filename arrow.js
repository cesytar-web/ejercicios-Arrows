//convertir la funcion en funcion flecha:
function greetings() {
    return "Hola";
  }

const greeting = () => {
    return "Hola"
  }

// convertir en una funcion flecha en linea

// function division(a,b) {
//     return a / b;
//   }

const division = (a,b) => {a / b

}

//Convertir la funcion en una funcion flecha
    // function myName(name) {
    //     return `Mi nombre es ${name}`;
    // }
const  myName = (name) => {name
}

//Convertir las siguientes funciones wn funciones flecha:
function test2() {
    console.log("Función test 2 ejecutada.")
  }
  function test1(callback) {
    callback()
  }	

  test1(test2)

  //ForEach
  let people = [
    { name: 'Jamiro', age: 45 },
    { name: 'Juan', age: 35 },
    { name: 'Paco', age: 34 },
    { name: 'Pepe', age: 14 },
    { name: 'Pilar', age: 24 },
    { name: 'Laura', age: 24 },
    { name: 'Jenny', edad: 10 },
   ]
//gente mayor de 25 años
let mayoresDe25 = []
people.forEach(function(people) {
  if (people.age > 25){
    mayoresDe25.push(people)
  }
})

console.log(mayoresDe25)    

// nombres que empiecen con la letra J
let nombresConJ = []

people.forEach(function (persona){
if (persona.name.startsWith('J')) {
  nombresConJ.push(persona)
  
}
})
console.log(nombresConJ)

//Reduce
//Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numbers = [39, 2, 4, 25, 62]
const productoTotal = numbers.reduce((total, number) => {
  return total * number;
}, 1);
console.log("Producto total: ", productoTotal);

//extras
//elementos que valgan mas de 300
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

//Map creando un segundo array

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
]

const frases = staff.map(function(persona) {
  return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(" y ")}.`;
});

console.log(frases);

//usamos filter para seleccionar solo los que cuestan 300
const productosCaros = inventory.filter(function(producto) {
  return producto.price > 300;
});

// usamos map para obtener el nombre del producto
const nombresDeProductosCaros = productosCaros.map(function(producto) {
  return producto.name;
});

console.log(nombresDeProductosCaros);