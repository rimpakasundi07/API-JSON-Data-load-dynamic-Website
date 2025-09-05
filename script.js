console.log("Explore API");

const person = {
  name: "Nikita",
  fruit: "Strawberry",
  dish: "mutton thali",
  friends: ["Soniya", "Riya", "Keya"],
  isRich: true,
  money: 34000,
};

console.log(person, typeof person);

// JSON -> JS object with Notation
// JSON.stringify -> JSON
// JSON.parse -> object

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);
