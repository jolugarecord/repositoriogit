
document.getElementByid('suma').addEventListener('click',function(){
let numeroA= document.getElementByid('numero1').value;

console.log('el valor denumero A es: '+numeroA);
let numeroB= document.getElementByid('numero2').value;
console.log('el valor denumero B es: '+numeroB);
let resutado = sumar (parseInt(numeroA), parseInt(numeroB));

console.log('el resutado de la suma: '+resultado);
document.getElementById('resultado').innerHTML = resultado;
document.getElementByid('contenedorresultado').style.display = 'block';



});
function sumar(a,b){
    return a + b;
}
