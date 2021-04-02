var helloWorld = "hello World";
console.log(helloWorld);
var user = {
    name: "Hayes",
    id: 2
};
var otherUser = {
    name: "Lionel",
    id: 1
};
// variable: type = value/literal;
var completed = false;
var decimal = 6;
// let big: bigint =100n;
var color = "blue";
var numArray = [1, 2, 3];
var list = [1, 2, 3];
var myTuple;
myTuple = ["hello", 10];
// below will not work as it doesnt follow the ..
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var myColor = Color.Blue;
console.log(c);
console.log("This is my color:" + myColor);
var notSure = 4;
notSure = "maybe a string instead";
console.log(notSure);
var str = getValue("myString");
var looselyTyped = 4;
looselyTyped.ifItExists();
looselyTyped.toFixed();
var strictlyTyped = 4;
// typescript will check for properties onn strictlyTyped thus the line will not work
// strictlyTyped.toFixed();
function warnUser() {
    console.log("This is mywarning message");
}
warnUser();
var someValue = "this is a string";
// since unknown does not have the prop length the line below is illegal
// let strLength: number = someValue.length;
var strLength = someValue.length;
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "size 10 object" };
