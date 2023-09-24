// Object is a represent a all javascript datatype

//object literals

const user = {
    name: "Ajay",
    age: 20,
    location: "Pune",
    email: "ajaygoogle.com",
    isLogginedIn: false,
    lasLoginDays:["Monday","Saturday"]
}

console.log(user.email) // ajaygoogle.com
console.log(user["email"]) //ajaygoogle.com




//object freeze method

user.email = "ajaychatgpt.com"
Object.freeze(user); //ajaychatgpt.com

