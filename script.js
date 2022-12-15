var resultado = document.getElementById('resultado');
var cero = document.getElementById('cero');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');

uno.onclick = function(x){
  resultado.textContent = resultado.textContent + "1";
}
// uno.addEventListener("onclick", (event)=>{
//     resultado.textContent = resultado.textContent + "1";
//     console.log("event", event)
// })