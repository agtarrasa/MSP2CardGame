const board = document.querySelectorAll('.card');
//obtain all card elements



function RotateCard() {
var paisElegido='',numeroCarta=0,opcionesCarta='';    
var opcionesTmp=[],indicesRandom=[];
    
   
}

function isRotated(){
var cartasRotadas=
 $('div[class="card rotate"]').length;
 return cartasRotadas;   

}




board.forEach(card => card.addEventListener('click', RotateCard));
