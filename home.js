$(function() {

const throwType = ['Backhand','Forehand','Thumber','Roller','Tomahawk','Chicken Wing','Pizza Toss','Off Hand','Upside-Down Backhand',"Player's Choice"];
const puttType = ['Straddle','Staggered','Hyzer','Anhyzer','Scoober','Offhand','Upside Down','Forehand','Turbo','Flipper-Do','Dad at the Beach',"Player's Choice"];
const kindType = ['Backhand Mulligan','Forehand Mulligan','Mulligan','Free High Five and Try Again!'];

let throwButton = $('#random-throw-button');
let puttButton = $('#random-putt-button');
let kindButton = $('#random-kind-button');
let throwResult = $('#random-throw-result');
let puttResult = $('#random-putt-result');
let kindResult = $('#random-kind-result');

function randomThrow () {
    const random = Math.random();
    if (random >= 0.99) {
        throwResult.text('Auto Lose!');
    } else {
        const num = Math.floor(Math.random() * throwType.length);
        throwResult.text(throwType[num]);
    }
}

function randomPutt () {
    let random = Math.random();
    if (random >= 0.99) {
        puttResult.text('Auto Lose!');
    } else {
        let num = Math.floor(Math.random() * puttType.length);
        puttResult.text(puttType[num]);
    }
}

function randomPositiveAction () {
    let random = Math.random();
    if (random >= 0.95){
        kindResult.text('Auto Win!');
    } else {
        let num = Math.floor(Math.random() * kindType.length);
        kindResult.text(kindType[num]);
    }
}

throwButton.on('click', randomThrow);
puttButton.on('click', randomPutt);
kindButton.on('click', randomPositiveAction);

});