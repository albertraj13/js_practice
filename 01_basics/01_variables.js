const accountID = 12456
let accountEmail = "albert@google.com"
var accountPassword = "1234"
accountCity = "Kalyan" 

//accountID = 1234 cannot reassign value for const

/* 
  avoid using var 
  because of function scope & global scope problem
*/
console.table([accountID, accountEmail, accountPassword, accountCity])