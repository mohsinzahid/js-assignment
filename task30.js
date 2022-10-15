const username = ["Mohsin", "Sohail", "Hamza", "Admin", "Ahmad"];
username.forEach(name => {
  if (name === "Admin")
    console.log("Hello Admin, would you like to see a status report?");
  else
    console.log("Hello " + name + " Thank you for logging in again!");
})
