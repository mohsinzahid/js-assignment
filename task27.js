
const color = (col) => {
    if(col === "green")
        console.log("You just earned 5 points");
    else if(col === "yellow")
        console.log("You just earned 10 points");
    else if(col === "red")
        console.log("You just earned 15 points");
}

let alien_color="green";
color(alien_color);
alien_color="red";
color(alien_color);
alien_color="yellow";
color(alien_color);

