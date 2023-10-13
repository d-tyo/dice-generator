

//   function diceGenerator(roll) {
//     return Math.floor(Math.random() * roll);
//   }
  
//   console.log(Math.max(1, 10));
//   console.log(diceGenerator(10));
//   // Expected output: 0, 1 or 2
  
//   console.log(diceGenerator(6));
//   // Expected output: 0
  


let D6;
let D10;


// function diceroll(number) {

//     if (number === 6)  {D6 = Math.floor(Math.random() * 6) + 1;  document.getElementById("D6").innerText = D6;}
//       else {D10 = Math.floor(Math.random() * 10) + 1; document.getElementById("D10").innerText = D10; }
//        console.log(D6)

    //    document.getElementById("D6").innerText = D6;
    //    document.getElementById("D10").innerText = D10; {}

// } 

function diceroll(number) {

  D6 = Math.floor(Math.random() * number)
  document.getElementById("D6").innerText = D6;
  
  document.getElementById('D'+number).innerText = D6
  
  }
  
  
  
  // seperate function to  generate the random numbers line 33