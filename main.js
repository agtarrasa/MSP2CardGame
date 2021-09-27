const board = document.querySelectorAll('.card');
//obtain all card elements



function RotateCard() {
var paisElegido='',numeroCarta=0,opcionesCarta='';    
var opcionesTmp=[],indicesRandom=[];
    
   
}

function isRotated(){
var RotatedCards=
 $('div[class="card rotate"]').length;
 return RotatedCards;   

}
function ceroA2Azar(){
  var i=0;
  var positions=[];
  var RandomNumber=0;
  while(positions.length!=3){
  RandomNumber=Math.floor(Math.random()*3);
  while(positions.includes(RandomNumber) ){
  RandomNumber=Math.floor(Math.random()*3);
  }
  positions.push(RandomNumber);
  }
  return positions;
  }




board.forEach(card => card.addEventListener('click', RotateCard));
