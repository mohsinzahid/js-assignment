const sandwitch = (...items) => {
  console.log("The Sandwich is made of these inngredients\n");
  items.forEach((n) => console.log(n));
}

console.log("----------Sandwich1");
sandwitch("turkey", "tuna", "vegetables", "a hard-boiled egg");
console.log("----------Sandwich2");
sandwitch("fish", "eggs", "cheese");
console.log("----------Sandwich3");
sandwitch("Salami", "roast chicken");
