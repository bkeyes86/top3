('use strict');

console.log('This file is not connected!');
console.log('This file is not connected')
var bestBand = prompt('enter your favorite band!');

var guess = prompt('guess where ed sheeran is on the list 1-3');
//variable declaration

if (guess >= 1 && guess > 3){
    greeting = 'good job, ' + bestBand+ ' !';
} else if (guess < 1 &&  > 3){
    greeting = `almost ${bestBand}`' !';
} else if (guess >= 3 && guess <= 3) {
    greeting = ' nope ' + bestBand;
} else {
    greeting = 'rockstar ';
}

return greeting '+' guess
}

console.log(`${greeting} ${guess} ${bestBand}`);

console.log(bestBand);

document.write(bestBand);
document.write(guess);


