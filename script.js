const resultado = document.getElementById('resultado');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('equal');
const del = document.getElementById('delete');
const reset = document.getElementById('reset')

var num1;
var num2;
var op;
//!isNaN(event.key) &&
/*  window.addEventListener("keydown",(event)=> {
    console.log("key press",event.key);
    if(resultado.textContent.length < 13){
      if(isNaN(event.key) || resultado.textContent == 0){
        resultado.textContent = event.key;
        console.log("resultado.textContent",resultado.textContent);
      }else {
        resultado.textContent = resultado.textContent + event.key;
      }
    }
  });  */

const catchNumber = () =>{
  for(const number of numbers){
    number.addEventListener("click", (event) => {
      //console.log("numbers",number.innerHTML);
      if(resultado.textContent.length < 13){
        if(resultado.textContent == 0 || resultado.textContent == "/" || resultado.textContent == "x" || resultado.textContent == "-" || resultado.textContent == "+" || resultado.textContent == "%"){
          resultado.textContent = number.innerHTML;
        }else{
          resultado.textContent = resultado.textContent + number.innerHTML;
        }
      }    
    });
  };
  //clear();
}
catchNumber();


const resetFunction = () =>{
  reset.addEventListener("click", () =>{
    resultado.textContent = "0";
  })
}
resetFunction();

const catchOperator = () =>{
for(const operator of operators){
  operator.addEventListener( "click", ()=> {
    num1 = resultado.textContent;
    console.log(num1)
    console.log("operator",operator.innerHTML);
    resultado.textContent = operator.innerHTML;
  })
  op=operator.innerHTML;
  console.log("op",op)
  }
}
catchOperator();

const delFunction = () =>{
  del.addEventListener("click", ()=>{
    if(resultado.textContent.length == 1){
      resultado.textContent = "0";
    } else{
      resultado.textContent = resultado.textContent.slice(0,-1);
    }
  })
}
delFunction();

equal.addEventListener("click",()=>{
  num2 = resultado.textContent;
  console.log(num1 + " " + op + " " + num2)
  resultado.textContent = num1 , op , num2;
  
})

