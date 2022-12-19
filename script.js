const resultado = document.getElementById('resultado');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

var op1;
var op2;
//!isNaN(event.key) &&
window.addEventListener("keydown",(event)=> {
  console.log("event",event.key);
  if(resultado.textContent.length < 13){
    if(isNaN(event.key) || resultado.textContent == 0){
      resultado.textContent = event.key;
      console.log("resultado.textContent",resultado.textContent);
    }else {
      resultado.textContent = resultado.textContent + event.key;
    }
  }
});

for(const number of numbers){
  number.addEventListener("click", (event) => {
    console.log("numbers",number.innerHTML);
    if(resultado.textContent.length < 13){
      if(resultado.textContent == 0 || resultado.textContent == "/" || resultado.textContent == "x" || resultado.textContent == "-" || resultado.textContent == "+" || resultado.textContent == "%"){
        resultado.textContent = number.innerHTML;
      }else{
        resultado.textContent = resultado.textContent + number.innerHTML;
      }
    }
  });
};

for(const operator of operators){
  operator.addEventListener( "click", ()=> {
    console.log("operator",operator.innerHTML);
    resultado.textContent = operator.innerHTML;
  })
}
