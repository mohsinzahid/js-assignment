const color = (col) => {
    if(col === "green")
        console.log("You just earned 5 points for shooting the alien.");
    else
        console.log("You just earned 10 points");
}

let alien_color="green";
color(alien_color);
alien_color="red";
color(alien_color);
