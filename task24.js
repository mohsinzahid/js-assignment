console.log("Is string 'Mohsin' Equal to 'Sohail'? I predict False.");
console.log("Mohsin"==="Sohail");
console.log("Is 'apple' not equal to 'phone'? I predict True.");
console.log("apple" !== "phone");

console.log("Is string 'MOHSIN' Equal to it's lowercase? I predict False.");
console.log("MOHSIN"=== 'mohsin'.toLowerCase());
console.log("Is string 'mohsin' Equal to it's lowercase? I predict True.");
console.log("mohsin"=== 'mohsin'.toLowerCase());

console.log("Is sum of 2 and 3 equal to 5? I predict True.");
console.log(2+3 === 5);
console.log("Is sum of 2 and 3 not equal to 4? I predict True.");
console.log(2+3 !== 4);
console.log("Is 2 greater than 3? I predict False.");
console.log(2 > 3);

console.log("Is 2 equal to 5 or 8 equal to 5? I predict False.");
console.log(2===5 || 8===5);
console.log("Is 2 less than 3 and 3 greater than 2? I predict True.");
console.log(2<3 && 3>2);

const cities=["Lahore","Karachi","Islamabad","Mumbai","Multan"];
console.log("Is string 'Lahore' present in Cities array? I predict True.");
console.log(cities.includes('Lahore'))

console.log("Is string 'Kasur' present in countries array? I predict False.");
console.log(cities.includes('Kasur'))
