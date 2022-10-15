const magician_names=["EMINEM","TAYLOR SWIFT","LADY GAGA","SHAKIRA"];
const show_magicians = (arr) => {
  arr.forEach((n) => console.log(n));
}

const make_great = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = "The Great " + arr[i];
  }
}
make_great(magician_names);
show_magicians(magician_names);
