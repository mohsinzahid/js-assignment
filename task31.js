const username = ["Mohsin", "Sohail", "Hamza", "Admin", "Ahmad"];

const print_users = (users) =>{
    if(users.length) {
        users.forEach(name => {
            if (name === "Admin")
                console.log("Hello Admin, would you like to see a status report?");
            else
                console.log("Hello " + name + " Thank you for logging in again!");
        })
    }
    else
        console.log("usernames list is Empty. We need to find some users!");
}

print_users(username);
const length=username.length;

for(let j=0;j<length;j++)
    username.pop();

print_users(username);
