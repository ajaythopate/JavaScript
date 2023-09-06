
// if else condition
let age = 17;

if (age >= 18) {
    console.log("drive the car");
} else {
    console.log("not drive the car");
}



// Rating mini app

let rating = 5;

if (rating == 5) {
    console.log("5Stars");
} else if (rating == 4) {
    console.log("4Stars");
} else if (rating == 3) {
    console.log("3Stars");
} 
else {
    console.log("i am else");
}



//Switch condition


let user = "Admin";

switch (user) {
    case "Admin":
        console.log("Redriect him to the admin page");
        break;
    case "Mentor":
        console.log("Redirect him to the Mentor Dshbord");
        break;
    default:
        console.log("I am Simple User");
}




//Ternary Operator

// Tearnary oprator using two oprator ? True and  : False

let userlogin = false;

userlogin ? console.log("logout") : console.log("login");
