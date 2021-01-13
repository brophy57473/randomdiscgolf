$(function() {

let throwType = ['Backhand','Forehand','Thumber','Roller','Tomahawk','Straddle Putt','Chicken Wing','Pizza Toss','Dad at the Beach','Off Hand','Upside-Down Backhand'];

let button = $('#random-throw-button');
let result = $('#random-throw-result');

function randomThrow () {
    let num = Math.floor(Math.random() * throwType.length);
    result.text(throwType[num]);
}

button.on('click', randomThrow);

});