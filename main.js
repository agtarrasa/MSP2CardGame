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
  function addOptions(CardNumber){

    var htmlClon='';
    
    var card=$('.card').eq(CardNumber);
    if($('.card').eq(CardNumber).find('div').length==0){
    
    var child=card.find('img').eq(0);
    var flag=hijo.attr('src');
    child.css('visibility','hidden');
    el=$('#banderaOpciones');
    
    el=el.clone();
    
    el.attr('class','front-face');
    el.attr('id','opcionesCarta-'+CardNumber);
    el.css('background-image','url('+flag+')');
    el.css('background-repeat','no repeat');
    el.css('height','205px');
    el.css('background-size','100% 100%');
    el.css('display','flex');
    el.css('flex-direction','column');
    el.css('justify-content','space-between');
    console.log(htmlClon);
    console.log('hola '+el.get(0).outerHTML);
    carta.append(el.get(0).outerHTML);
    }
    }




board.forEach(card => card.addEventListener('click', RotateCard));
