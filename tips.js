
var costofFood = 0;
var app = 9;
var entree = 19;
var drink = 11;
var dessert = 6;
var tipAmount = 20;
var tipAmountAsPercentage = 20 / 100;

costofFood = app + entree + drink + dessert;
var tipAmount = costofFood * tipAmountAsPercentage;

console.log("the tip on" + costofFood + "food bill is"+ tipAmount + ".");