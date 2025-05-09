/*#1*/
let myString = "hello,this,is,a,difficult,to,read,sentence";
myString = myString.replaceAll(",", " ");
/* --- Code that will test your solution, do NOT change. Write above this line --- */
console.assert(
  myString === "hello this is a difficult to read sentence",
  "There is something wrong with your solution"
);

/*#2*/
for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(`The number ${i} is odd!`);
  } else {
    console.log(`The number ${i} is even!`);
  }
}

for (let i = 0; i <= 20; i++) {
  i % 2 !== 0
    ? console.log(`The number ${i} is odd!`)
    : console.log(`The number ${i} is even!`);
}

/*#3*/
let myMealRecipe = {};
myMealRecipe = ingredients = ["4 eggs, 2 strips of bacon, 1 tsp salt/pepper"];
myMealRecipe.name = "Omelette";
myMealRecipe.serves = 2;

for (let i = 0; i < myMealRecipe.length; i++) {
  console.log(`Meal name: ${myMealRecipe.name}`);
  console.log(`Serves: ${myMealRecipe.serves}`);
  console.log(`Ingredients: ${myMealRecipe[i]}`);
}

let counter = 0;
do {
  console.log(`Meal name: ${myMealRecipe.name}`);
  console.log(`Serves: ${myMealRecipe.serves}`);
  console.log(`Ingredients: ${myMealRecipe[counter]}`);
  counter++;
} while (counter < myMealRecipe.length);

/*#4*/
const myBooks = [
  { title: "Wuthering Heights", author: "Emily Brontë", alreadyRead: true },
  { title: "Don Quixote", author: "Miguel de Cervantes", alreadyRead: false },
  { title: "1984", author: "George Orwell", alreadyRead: true },
];

for (let i = 0; i < myBooks.length; i++) {
  if (myBooks[i].alreadyRead === true) {
    console.log(
      `You have already read "${myBooks[i].title} by ${myBooks[i].author}".`
    );
  } else {
    console.log(
      `You have not read "${myBooks[i].title} by ${myBooks[i].author}" yet.`
    );
  }
}

/*#5*/
const drinkTypes = ["cola", "lemonade", "water"];
const drinkTray = [];
const drinkCount = {
  cola: 0,
  lemonade: 0,
  water: 0,
};

while (drinkTray.length < 5) {
  for (let i = 0; i < drinkTypes.length; i++) {
    const drink = drinkTypes[i];
    if (drinkCount[drink] < 2) {
      drinkTray.push(drink);
      drinkCount[drink]++;
      if (drinkTray.length === 5) {
        break;
      }
    }
  }
}

console.log("Hey guys, I brought a " + drinkTray.join(", ") + "!");

/*
Another implementation

console.log("Hey guys, I brought a " + drinkTray.join(", ") + "!");

const drinkTypes = ["cola", "lemonade", "water"];
const drinkTray = [];

for (let i = 0; i < drinkTypes.length; i++) {
  for (let j = 0; j < 2; j++) {
    if (drinkTray.length < 5) {
      drinkTray.push(drinkTypes[i]);
    }
  }
}

console.log(`Hey guys, I brought a ${drinkTray.join(", ")}!`);
*/
