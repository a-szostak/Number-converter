"use strict";



let equals = document.querySelector("button");

equals.onclick = function () {
  let numberIn = document.getElementById("in").value;     // gets a number from input
  let numberOut = document.getElementById('out');

  let optionIn = document.getElementById('from').value;
  let optionOut = document.getElementById('to').value;

  if (optionIn == "dec" && optionOut == "bin" ){
    numberOut.setAttribute("placeholder", decToBin(numberIn));
  }


}



function decToBin(n){
  let output = "";

  if (Number(n) >= 0){

    while (n > 0){

      if (n % 2 == 1){
        n = (n - 1) / 2;
        output = output + "1";
      }
      else {
        n = n / 2;
        output = output + "0";
      }
    }
  }
  return output.split("").reverse().join("");
}


function binToDec(){
}
