const car = (manufacturer, model_name, ...arr) => {
  let information = {
    man: manufacturer,
    name: model_name,
  };
  for (let i = 0; i < arr.length; i += 2) {
    information[arr[i]] = arr[i + 1];
  }
  return information;
}

console.log(car("Toyota", "Yaris"));
console.log(car("Honda", "civic", "color", "red", "seating_capacity", "4"));
