// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(1);
//   max = Math.floor(10);
//   return Math.floor(Math.random() * (1 - 10 + 1) + 1);

// }
// console.log(x);

// let D6 = Math.floor(Math.random() * 6) + 1;
// let D10= Math.floor(Math.random() * 10) + 1;

let D6;
let D10;


document.getElementById("rollButtonD6").onclick = function() {

       D6 = Math.floor(Math.random() * 6) + 1;
       D10 = Math.floor(Math.random() * 10) + 1;

       document.getElementById("ButtonD6").innerHTML = D6;
       document.getElementById("ButtonD10").innerHTML = D10;

}






