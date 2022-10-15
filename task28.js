let age=2;
const personAge = (age) => {
    if(age<2)
        console.log("You are a baby");
    else if(age>=2 && age < 4)
        console.log("You are a toddler");
    else if(age>=4 && age < 13)
        console.log("You are a kid");
    else if(age>=13 && age < 20)
        console.log("You are a teenager");
        else if(age>=20 && age < 65)
        console.log("You are a adult");
        else if(age>=65)
        console.log("You are a elder");
}
personAge(age);
age=10;
personAge(age);
age=16;
personAge(age);
age=23;
personAge(age);
age=70;
personAge(age);
