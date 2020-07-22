/* Task 1 */
function ucFirst(str) {
  return str.length ? str[0].toUpperCase() + str.slice(1) : str;
}

ucFirst("john");

/* Task 2 */
function checkSpam(str) {
  let lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.includes("viagra") || lowerCaseStr.includes("xxx");
}

checkSpam('buy ViAgRA now');

/* Task 3 */
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "\u2026" : str;
}

truncate("What I'd like to tell on this topic is:", 20);

/* Task 4 */
function extractCurrencyValue(str) {
  return +str.slice(1);
}

extractCurrencyValue($120);