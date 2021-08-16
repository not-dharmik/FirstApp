var fake = require("faker");
var l=5;
while(l){
    var randomProduct = fake.commerce.productName();
    var randomPrice = fake.commerce.price();
    console.log(randomProduct, "->  $", randomPrice);
    l -=1;
}