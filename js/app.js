'use strict';
console.log('This file is connected!');


function helloMsg(){

    var greeting;
    var bestBand = prompt('enter your favorite band!');

    var guess = prompt('guess where ed sheeran is on the list 1-3');
    //variable declaration


    if (guess == 1) {
        greeting = 'good job!';
    } else if (guess == 2) {
        greeting = 'almost!';
    } else if (guess == 3) {
        greeting = ' nope!';
    } else {
        greeting = 'rockstar ';
    }

    return greeting;
}
var result = helloMsg();


//console.log(`${greeting} ${guess} ${bestBand}`);

console.log(result);

document.write(result);



