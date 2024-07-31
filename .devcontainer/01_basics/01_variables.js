const accountId = 144553    
let accountEmail = "rachit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2   // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Delhi"

console.log(accountId);

/*
    Prefer not to use var
    because of issue in block space and functional scope

*/
console.table([accountEmail,accountPassword,accountCity]);