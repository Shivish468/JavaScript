const accountId = 144553
let accountEmail = "shivam@google.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sks@bhr.com"
accountPassword = "12345678"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])