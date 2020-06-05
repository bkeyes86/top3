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


for (var i = 0; i < 3; i++) {
    document.write(i);
}

    var Tickets = function() {
    var order = prompt('which show do you wanna see?');
    var tix;

    while(order !== 'ed' && order !== 'U2' ) {
        order = prompt ('pick "ed" or "U2"...');
    }
    if(order === 'ed') {
        tix = '<img src="images/574342e4d76b607bbd475efbdad8b50c.jpg">';
    }else if (order === 'U2') {
        tix = '<img src="images/ok.jpg">';
    }
    return tix;
}