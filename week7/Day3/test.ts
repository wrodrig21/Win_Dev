let helloWorld = "hello World";
console.log(helloWorld);

// Interfaces are how we define the shape of our objects
// they are the templates of our objects
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 2,

}

const otherUser: User = {
    name: "Lionel",
    id:1,
}

// variable: type = value/literal;
let completed: boolean = false;
let decimal: number = 6;
// let big: bigint =100n;

let color: string = "blue";

let numArray: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

let myTuple: [string, number];
myTuple = ["hello", 10];
// below will not work as it doesnt follow the ..

enum Color {
    Red =1,
    Green,
    Blue
}
let c: Color = Color.Green;
let myColor: Color = Color.Blue;
console.log(c);
console.log(`This is my color:${myColor}`);

let notSure: unknown = 4;
notSure = "maybe a string instead";

console.log(notSure);

declare function getValue(key: string): any;
const str: string = getValue("myString");

let looselyTyped: any = 4;
looselyTyped.ifItExists();
looselyTyped.toFixed();

let strictlyTyped: unknown = 4;
// typescript will check for properties onn strictlyTyped thus the line will not work
// strictlyTyped.toFixed();

function warnUser(): void {
    console.log("This is mywarning message");
}
warnUser();

let someValue: unknown = "this is a string";
// since unknown does not have the prop length the line below is illegal
// let strLength: number = someValue.length;

let strLength: number = (someValue as string).length;

interface LabeledValue{
    label: string;
}
function printLabel(labeledObj: LabledValue) {
    console.log(labeledObj.label);
}
let myObj = { size: 10, label: "size 10 object" printLabel(myObj); }

interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
let mySquare = createSquare({ color: "black" });
  

// Classes
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
  }
  
  class Clock implements ClockInterface {
    currentTime: Date = new Date();
    
      setTime: (d: Date) {
          this.currentTime = d;
      }
      constructor(h: number, m: number) {}
  }

interface Shape{
    color: string;
}
interface Square extends Shape{
    // the property color is inherited from shape
    // color: string;
    sideLength: number;
}
let square = {} as Square;
square.color = "blue";
square.sideLength = 10;