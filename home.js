$(function() {

const throwType = ['Backhand','Forehand','Thumber','Roller','Tomahawk','Chicken Wing','Pizza Toss','Off Hand','Upside-Down Backhand',"Player's Choice",'Eyes Closed Backhand','Eyes Closed Forehand','Eyes Closed Overhand'];
const puttType = ['Straddle','Staggered','Hyzer','Anhyzer','Scoober','Offhand','Upside Down','Forehand','Turbo','Flipper-Do','Dad at the Beach',"Player's Choice"];
const kindType = ['Backhand Mulligan','Forehand Mulligan','Mulligan','Free High Five and Try Again!'];

let throwButton = $('#random-throw-button');
let puttButton = $('#random-putt-button');
let kindButton = $('#random-kind-button');
let throwResult = $('#random-throw-result');
let puttResult = $('#random-putt-result');
let kindResult = $('#random-kind-result');
let onePlus = $('#one-plus');
let oneMinus = $('#one-minus');
let twoPlus = $('#two-plus');
let twoMinus = $('#two-minus');


let teamOneCount = 6;
let teamTwoCount = 6;

function incrementOne () {
    teamOneCount = teamOneCount + 1;
    $(this).siblings('div').text(teamOneCount);
}
function decrementOne () {
    teamOneCount = teamOneCount - 1;
    $(this).siblings('div').text(teamOneCount);
}
function incrementTwo () {
    teamTwoCount = teamTwoCount + 1;
    $(this).siblings('div').text(teamTwoCount);
}
function decrementTwo () {
    teamTwoCount = teamTwoCount - 1;
    $(this).siblings('div').text(teamTwoCount);
}

function randomThrow () {
        const num = Math.floor(Math.random() * throwType.length);
        throwResult.text(throwType[num]);
}

function randomPutt () {
        const num = Math.floor(Math.random() * puttType.length);
        puttResult.text(puttType[num]);
}

function randomPositiveAction () {
    const random = Math.random();
    if (random >= 0.95){
        kindResult.text('Auto Win!');
    } else {
        const num = Math.floor(Math.random() * kindType.length);
        kindResult.text(kindType[num]);
    }
}

throwButton.on('click', randomThrow);
puttButton.on('click', randomPutt);
kindButton.on('click', randomPositiveAction);
onePlus.on('click', incrementOne);
oneMinus.on('click', decrementOne);
twoPlus.on('click', incrementTwo);
twoMinus.on('click', decrementTwo);


});