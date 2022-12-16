const resultado = document.getElementById('resultado');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

window.addEventListener("keydown",(event)=> {
  console.log("event",event.key);
  if(!isNaN(event.key) && resultado.textContent.length < 13){
    resultado.textContent = resultado.textContent + event.key;
  }
});

for(const number of numbers){
  number.addEventListener("click", (event) => {
    console.log("numbers",number.innerHTML);

    if(resultado.textContent.length < 13){
      resultado.textContent = resultado.textContent + number.innerHTML;
    }
  })
}

for(const operator of operators){
  operator.addEventListener( "click", ()=> {
    console.log("operator",operator.innerHTML);
    resultado.textContent = operator.innerHTML;
  })
}
