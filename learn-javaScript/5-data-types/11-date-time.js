/* Task 1 */
let date = new Date(2012, 1, 20, 3, 12);
alert(date);

/* Task 2 */
let date = new Date(2012, 0, 3);
getWeekDay(date);

function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

/* Task 3 */
let date = new Date(2012, 0, 3);
getLocalDay(date);

function getLocalDay(date) {
  let day = date.getDay(date);
  return day != 0 ? day : 7;
}

/* Task 4 */
let date = new Date(2015, 0, 2);
getDateAgo(date, 365);

function getDateAgo(date, days) {
  let differenceInSecs = new Date(days * 24 * 60 * 60 * 1000);
  let timestamp = date.getTime() - differenceInSecs;

  return new Date(timestamp).getDate();
}

/* Task 5 */
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1); // better to add number of days as 0
  date.setDate(0); // and remove this
  return date.getDate();
}

getLastDayOfMonth(2012, 1);

/* Task 6 */
function getSecondsToday() {
  let now = Date.now();
  let today = new Date().setHours(0, 0, 0, 0);

  return Math.round((now - today) / 1000);
}

getSecondsToday();

/* Task 7 */
function getSecondsToTomorrow() {
  let tomorrow = new Date();
  let today = new Date();
  
  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  return Math.round((tomorrow - today) / 1000);
}

getSecondsToTomorrow();

/* Task 8 */

// let date = new Date(new Date - 1);
// let date = new Date(new Date - 30 * 1000);
// let date = new Date(new Date - 5 * 60 * 1000);
let date = new Date(new Date - 86400 * 1000);


formateDate(date);

function formatDate(date) {
  let current = new Date();
  let difference = current - date;

  if (difference < 1000) {
    return 'right now';
  } // create new variable for storing diff in secs to avoid multiplication/division operation twice
  else if (difference < 60 * 1000) { 
    let roundedSecs = Math.floor(difference / 1000); // Math.floor! not Math.round
    return `${roundedSecs} sec. ago`;
  } // create new variable for storing diff in mins to avoid multiplication/division operation twice
  else if (difference < 60 * 60 * 1000) {
    let roundedMins = Math.floor(difference / 60 / 1000); // Math.floor! not Math.round
    return `${roundedMins} min. ago`;
  }
  else {
    let day = date.getDate();
    if (day < 10) day = "0" + day; // ternary operator much better
    // day = day < 10 ? "0" + day : day;
    let month = date.getMonth() + 1;
    if (month < 10) month = "0" + month;

    let year = date.getFullYear();
    year = year.toString().slice(2);
    
    let hours = date.getHours();
    if (hours < 10) hours = "0" + day;
    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    return `${day}.${month}.${year} ${hours}:${mins}`;
  }
}