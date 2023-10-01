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


//Object.assign()

//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const subject = { name: "Maths" }

const marks = { score: 60 }

const result = Object.assign(subject, marks);
console.log(result);