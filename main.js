const board = document.querySelectorAll('.card');

let isCardTurned = false;
let firstTime,secondTime;

function RotateCard() {
    this.classList.add('rotate');

    if(!isCardTurned){
        isCardTurned = true;
        firstTime = this;

        console.log({isCardTurned,firstTime});
    } else {
        isCardTurned = false;
        secondTime = this;
        console.log({isCardTurned,secondTime});
    }
}




board.forEach(card => card.addEventListener('click', RotateCard));
