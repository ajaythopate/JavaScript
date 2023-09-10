const accountId = 15555
let accountEmail = "ajayt@google.com"
var accountPassword = "1222"

accountCity = "pune"


// accountId = 2   not allowed /-This variable is const so it does not change


accountEmail = "ajay.com"
accountPassword = "1111"
accountCity = "Baramati"


console.log(accountId);

//  Prefer not to user var
//  because of issue in block scope and functional scope

console.log([accountId ,accountEmail,accountPassword,accountCity])