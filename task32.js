const current_users = ["Mohsin", "Sohail", "Hamza", "Admin", "Ahmad"];
const new_users = ["HASSAN", "ABDULLAH", "AHMAD", "HAMZA", "ALI"];

new_users.forEach(user => {
  if (current_users.some(item => item.toLowerCase() === user.toLowerCase())) {
    console.log(
        user + " already exits! You need to enter a new username"
    );
  } else console.log(user + " is available");
})
