//use const where variable values do not change
const a = 5;
const b : number = 33;
const c ="best";
let z: any;

//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
	z = 4;
	//use z
}
else {
	z = "string";
	//use z
}
console.log("let: " + z);// Error: z is not defined in this scope




