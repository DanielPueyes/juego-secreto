let numeroSecreto = 0 ;   //declarar numero secreto 
let intentos = 0;// declarar numero intentos
let listaNumerosSorteados = []; //declarar lista 
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
console.log(numeroSecreto);
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número, Lo hiciste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');//activar boton nuevo juego despues de acertar numero
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;//contador de intentos
        limpiarCaja();//llamada de funcion de limpiarCaja
    }
        
    return;
}
function limpiarCaja() {//creacion de funcion limpiarCaja
    document.querySelector('#valorUsuario').value = '';//limpieza de caja
    
}
function generarNumeroSecreto() {//genera un numero al aleatoriamente
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        
    }else{
    // si el número generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return  generarNumeroSecreto();
        }else{
        // retornamos el valor que ya existe en la lista
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Generar el número aleatorio
    
    //Inicializar el número de intentos 
    
    //Indicar mensaje de intervalo de números
    condicionesIniciales();
    //Desabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
