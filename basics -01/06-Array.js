// ++++++++++ Array ++++++++++

let names = ["Ajay", "Viajy", "Surya", "Anirudh"];
console.log(names); //["Ajay ","Viajy ","Surya ","Anirudh"]
console.log(names.length); // 4
console.log(names[2]); //Surya
console.log(names[names.length - 1]); //3


// +++++++++ Arry Method +++++++++

let name = ["Ajay", "Viajy", "Surya", "Anirudh"];


//push => Insert New Values inside the Array
name.push("jay");
console.log(name); //["Ajay","Vijay","Surya","Anirudh","jay"]; => Insert the end 

//pop => Remove the last value
console.log(name.pop()); //['Ajay','Vijay','Surya']


//Slice
console.log(name.slice(1, 3));  //["Vijay" ,"Surya"] =>include the starting value and last values are not included


//splice

name.splice(2, 1, 'Chota', 'motha');
console.log(name) // ['Ajay','Vijay','Chota','motha','Anirudh'];


//Concatenation

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8,];

console.log(arr1.concat(arr2, arr3));  //[1,2,3,4,5,6,7,8]



//includes
let num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num.includes(7, 6)); //true because 7 is starting index no 6

//IndexOf

console.log(num.indexOf(5));  //4


//join

console.log(num.join()); // 12345678
console.log(num.join('and')); //1an2and3and4and5and6and7and8  =>join two array


//Shift 

let maths = [1, 4, 9, 25];
console.log(maths.shift()); //removing the first element


//Unshift
maths.unshift('30');
console.log(maths); // adds new elements to the beginning of an array






// +++++ converting to Array +++++


//split

let name1 = "Ajay";
let array1 = name1.split('');
console.log(array1); //['A','j','a','y']

