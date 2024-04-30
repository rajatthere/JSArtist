const accountId = 12345;
let accountEmail = 'rajat@gmail.com';
var accountPassword = '123456';
accountCity = "Gwalior";

let accountState; // it will be undefined

// accountId = 98;    // assignment to a constant variable is not allowed. 
// console.log(accountId);

accountEmail = 'raj@gmai.com'
accountPassword = "98776"
accountCity = "Pune"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* Prefer not to use "var" for variable declaration bcs of issue in block and function scope */