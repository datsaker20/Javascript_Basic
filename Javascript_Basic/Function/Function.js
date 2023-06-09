// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such property";
  // Only change code above this line
}

console.log(lookUpProfile("Kristian", "lastName"));


function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random()* (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
console.log(90,10)


function rangeOfNumbers(startNum, endNum) {
  return endNum < startNum
    ? []
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
};
console.log(rangeOfNumbers(1,9))


const magic = () =>  new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2.filter((i) => !arr1.includes(i)));


console.log(myConcat([1, 2], [2, 4, 5]));