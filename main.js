const cards = document.querySelectorAll('.card');
function flipCard(){
    console.log('I was clicked');
    console.log(this);
}
cards.forEach(card => card.addEventListener('click',flipCard));