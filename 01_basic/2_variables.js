const accountId = 144553
let accountEmail = "megha@google.com"
var accountPassword = "12345"
accountCity = "Kadi"
let accountState;

//accountId = 212121 Not Allow because we use const keyword
accountEmail = "mt@mt.com"
accountPassword = "121212"
accountCity = "Ahmedabad"

/*
Prefer not to use var
because of issue in block scpoe and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);