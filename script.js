const resultado = document.getElementById('resultado');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('equal');
const del = document.getElementById('delete');
const reset = document.getElementById('reset')

var num1 = "0";
var num2 = "0";
var op;
var result;
var flag = false;
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
      if(resultado.textContent.length < 17){
        if(flag == true || resultado.textContent == 0 || resultado.textContent == "/" || resultado.textContent == "x" || resultado.textContent == "-" || resultado.textContent == "+" || resultado.textContent == "%"){
          resultado.textContent = number.innerHTML;
          flag = false;
        }else{
          resultado.textContent = resultado.textContent + number.innerHTML;
        }
      }        
    });    
  };        
}
catchNumber();

const resetFunction = () =>{  
    num1 = "0";
    num2 = "0";
    localStorage.clear();
    console.log(localStorage);
}

const resetButton = () =>{
  reset.addEventListener("click", () =>{
    resetFunction();
    resultado.textContent = "0";
  })
}
resetButton();

const saveLocalStorage = () =>{
  localStorage.setItem('valor1',num1);
  localStorage.setItem('valor2',num2);
  localStorage.setItem('operator',op);
}
  
const asignNumber = (num) =>{
  if(num1 == 0){
    num1 = num;
  }else{
    num2 = num;
  }
}

const resolveOperation = () =>{
  if(op == '+'){
    result = parseFloat(localStorage.getItem('valor1')) + parseFloat(localStorage.getItem('valor2'));
    localStorage.setItem('result',result);
    console.log(localStorage);    
  }else if(op == '-'){
    result = parseFloat(localStorage.getItem('valor1')) - parseFloat(localStorage.getItem('valor2'));
    localStorage.setItem('result',result);
    console.log(localStorage);
    }else if(op == 'x'){
    result = parseFloat(localStorage.getItem('valor1')) * parseFloat(localStorage.getItem('valor2'));
    localStorage.setItem('result',result);
    console.log(localStorage);
    }else if(op == '/'){
      result = parseFloat(localStorage.getItem('valor1')) / parseFloat(localStorage.getItem('valor2'));
      localStorage.setItem('result',result);
      console.log(localStorage);
     }else if(op == '%'){
      console.log(localStorage);
      if (localStorage.getItem('valor2')!="0"){
        result = parseFloat(localStorage.getItem('valor2'))/100;
        localStorage.setItem('result',result);
        console.log(localStorage + "valor 2");
      }else{
        result = parseFloat(localStorage.getItem('valor1'))/100;
        localStorage.setItem('result',result);
        console.log(localStorage + "valor1");
      }
      
     }    
}

const catchOperator = () =>{ 
  for(const operator of operators){
    operator.addEventListener( "click", ()=> {
      asignNumber(resultado.textContent);
      resultado.textContent = operator.innerHTML;
      op=resultado.textContent; 
      saveLocalStorage();      
    })
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

const buttonEqual = () =>{
  equal.addEventListener("click", ()=>{
    asignNumber(resultado.textContent);
    saveLocalStorage();
    resolveOperation();
    let resultOp = localStorage.getItem('result');
    if(resultOp.length < 15){
      resultado.textContent = resultOp;
      flag = true;
      resetFunction();
    }else{
      resultado.textContent = resultOp.substring(0,15);
      flag = true;
      resetFunction();
    }
  })
}
buttonEqual();



