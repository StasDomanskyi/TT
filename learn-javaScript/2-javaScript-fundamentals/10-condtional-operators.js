/* Task 1 - Not coding */
/* Task 2 */

var answer = prompt('What is the “official” name of JavaScript?');

if (answer == 'ECMAScript') {
    alert('Right!');
} else {
    alert('You don\'t know? "ECMAScript"!');
}

/* Task 3 */

var userNumber = prompt('Enter your cipher', '');

if (userNumber > 0) {
    alert(1);
} else if ( userNumber < 0) {
    alert(-1);
} else {
    alert(0);
}

/* Task 4 */

var a = 6;
var b = 2;

var result = (a + b < 4) ? 'Below' : 'Over';

result;

/* Task 5 */

var login = prompt('Who are you?', '');

var message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';

message;