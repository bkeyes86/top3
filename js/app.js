'use strict';
console.log('This file is connected!');


function helloMsg(){

    var greeting;

    var guess = prompt('guess where ed sheeran is on the list 1-3');
    //variable declaration
    while(guess <=0 || guess >=4) {
        guess = prompt('guess where ed sheeran is on the list 1-3');
    }

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


document.getElementById('finale').innerHTML= helloMsg();




//     var tickets = function getTix() {
//     var order
//     var tix
//     document.getElementById('finale').innerHTML= tickets();
// }

//     while(order !== 'ed' && order !== 'U2' ) {
//         order = prompt ('pick "ed" or "U2"...');
//     }
//     if(order === 'ed') {
//         tix = '<img src="images/574342e4d76b607bbd475efbdad8b50c.jpg">';
//     }else if (order === 'U2') {
//         tix = '<img src="images/ok.jpg">';
//     }
//      tickets();


var createGreeting = function() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18) {
      greeting = 'Good evening!';
    } else if (hourNow > 12) {
      greeting = 'Good afternoon!';
    } else if (hourNow >= 0) {
      greeting = 'Good morning!';
    } else {
      greeting = 'Welcome!';
    }
    return '<h3>'+ greeting + '</h3>';
  }

  document.getElementById('greeting').innerHTML= createGreeting();


  var getItem = function() {
    var order = prompt('What concert do you wanna see?');
    var item;
    while (order !='ed' && order != 'u2' && order !='gnr' ) {
      order = prompt('Please enter "ed" or "u2" or "gnr"...');
    }
    if (order === 'ed') {
      item = '<img src="images/edtix.jpg">';
    } else if (order === 'u2') {
      item = '<img src="images/ok.jpg">';
    } else if (order === 'gnr') {
     item = '<img src="images/gnr.jpg">';
    }
    return item;
  }


  var howMany = function() {
    var count = prompt('How many tickets would you like?');
    while( count <=0 || isNaN(count) ) {
      count = prompt('Please enter the number or tickets you want?');
    }
    return Number(count);
  }


  var showOrder = function() {
    var item = getItem();
    var total = howMany();
    var result = '';
    //use this to make the number of house images display on the screen. 
    for(var i = 1; i <=total; i++) {
      result = result + '<p> tickets #' + i + '<br>' + item + '</p>';
    }
    return result;
  }

  document.getElementById('images').innerHTML=showOrder();

  

