
const myDate = new Date();

// ++++++++ Date ++++++++++

console.log(myDate); //2023-6-8T10:22:55
console.log(myDate.toString()); //sun sep 6 2023 10:22:55
console.log(myDate.toDateString()); // sun sep 6 2023
console.log(myDate.toLocaleString()); // 6/8/2023, 10:30:15 pm
console.log(myDate.getFullYear()); // 2023
console.log(myDate.getMonth()); // 9
console.log(myDate.getDay()); // 0 because sunday start to 0 


// +++++++++++ Time ++++++++++

console.log(myDate.getTime()); //16778522 milisec
console.log(myDate.getHours()); // 16
console.log(myDate.getMinutes()); //3
console.log(myDate.getSeconds()); // 55


// ++++++++++ Math ++++++++++

const PI = Math.PI;
console.log(PI); // 3.14528666452
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.6)); //5
console.log(Math.floor(4.6)); //4

// +++++++++++ min and max ++++++++++

console.log(Math.min(4, 3, 5, 8)); // 3
console.log(Math.max(4, 3, 5, 8)); // 8

