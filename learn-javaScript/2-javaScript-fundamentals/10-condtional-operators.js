/* Task 1 - Not coding */
/* Task 2 */

let answer = prompt('What is the “official” name of JavaScript?');

if (answer == 'ECMAScript') {
    alert('Right!');
} else {
    alert('You don\'t know? "ECMAScript"!');
}

/* Task 3 */

let userNumber = prompt('Enter your cipher', '');

if (userNumber > 0) {
    alert(1);
} else if ( userNumber < 0) {
    alert(-1);
} else {
    alert(0);
}

/* Task 4 */

let a = 6;
let b = 2;

let result = (a + b < 4) ? 'Below' : 'Over';

result;

/* Task 5 */

let login = prompt('Who are you?', '');

let message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' : 
'';

message;
