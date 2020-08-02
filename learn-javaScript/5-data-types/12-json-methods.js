/* Task 1 */
let user = {
  name: "John Smith",
  age: 35
};

let userJSON = JSON.stringify(user);
let another  = JSON.parse(userJSON);
another;

/* Task 2 */
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
  if (key && value === meetup) return; // better to check for "" because there can be a zero
  return value;
}));