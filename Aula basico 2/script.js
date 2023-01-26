console.log("Navegador OK!")

/* 

console.log("Estudo - Função);

function calc1(x1, x2, operator) {

    return eval(`${x1} ${operator} ${x2}`);
}

let resultado1 = calc1(1, 2, "-");

console.log(resultado1);



console.log("Estudo - Arrow  Function");

let calc2 = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);
}

let resultado2 = calc2(1, 2, "+");

console.log(resultado2);

// Eventos (listen = escutar)

window.addEventListener('focus', event => {
    console.log("focus");

});

document.addEventListener('click', event => {

    console.log("click");

});

*/

/* 
// Trabalhando com data
// time stamp
let agora = Date.now();

console.log(agora)

// tempo de agora (bonitinho)
let new_date = new Date();

console.log(new_date.getDate());

// Data conforme localização
console.log(new_date.toLocaleDateString("pt-br"))
*/

/* 
let carros = ["palio 98", "Toro", "Uno 98", 10, true, new Date(), function(){}];

carros.forEach(function(value, index){
    console.log(index, value)
});

*/


// Array
// Array sempre começa em 0

let comp_aerea = ["Azul", "Latam", "Gol", "AirFrance", "Qatar"];

comp_aerea.forEach(function(values, index){
    console.log(values, index);
});