**var**: 
- overwrite variable declaration without an error
	
	
	var hello = "Hello";
	var hello = " World"; 
	
- re-declaration won't throw any error
- declares variable in global scope or locally if declared inside a function


**let**: A variable with same name can be declared only once

	let hello = "hello";
	let hello = " World"; //error



**const**:  
- read-only variables
- should be all CAPS
- arrays can still be mutated

ex:

	 const arr= [1, 3, 5];
	 arr[2] = 3;
		
	 console.log(arr); //output: 1,3,3

but 

	 arr = [2, 4, 6]; // error

**Object-freeze**: to prevent data mutation

**Anonymous functions**:    

- 


	const myFunc = () => {
		//body
		return "Anonymous function";
	}

-     


	const myFunc = () => "Anonymous function";

I) with arguments

	const doubleItem = (item) => item * 2;

**Higher Order Arrow Functions**:
map()
filter()
reduce()	

	FBPosts.filter(function(post) {
  		return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
	})

**Arrow function**:

	FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)


**Default parameters for Functions**:

	function greeting(name = "Anonymous") {
	  return "Hello " + name;
	}
	console.log(greeting("John")); // Hello John
	console.log(greeting()); // Hello Anonymous

**Rest Operator**

- create functions that take a variable number of arguments
- arguments: stored in an array accessible inside function

ex:

	function howMany(...args) {
	  return "You have passed " + args.length + " arguments.";
	}
	console.log(howMany(0, 1, 2)); // You have passed 3 arguments
	console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

**Spread operator**
- to evaluate array in-place
- to expand arras and other expressions in place
- ex:


	var arr = [6, 89, 3, 45];
	var maximus = Math.max.apply(null, arr); // returns 89

Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array.

Using spread operator:

	const arr = [6, 89, 3, 45];
	const maximus = Math.max(...arr); // returns 89

- only works in-place, like in an argument to a function or 
- in an array literal, like arr2 = [...arr1];

**Destructuring assignment to extract values from objects**
    
    const user = { name: 'John Doe', age: 34 };
    const name = user.name; // name = 'John Doe'
    const age = user.age; // age = 34

   Here's an equivalent assignment statement using the ES6 destructuring syntax:

    const { name, age } = user;
    // name = 'John Doe', age = 34

**Destructuring assignment to assign variables from objects**

1.


    var voxel = {x: 3.6, y: 7.4, z: 6.54 };
	var x = voxel.x; // x = 3.6
	var y = voxel.y; // y = 7.4
	var z = voxel.z; // z = 6.54

converts to

	const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54

2. Nested objects


	const a = {
	  start: { x: 5, y: 6},
	  end: { x: 6, y: -9 }
	};
	
	const { start : { x: startX, y: startY }} = a;

3. Arrays


	const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
	console.log(a, b, c); // 1, 2, 5

	
**Template Literals**

- create multi-line strings
- string interpolation features to create strings


	const greeting = `Hello, my name is ${person.name}!
	
    I am ${person.age} years old.`;


**Object Literal Declaration**:

	const getMousePosition = (x, y) => ({ x, y });


**Declarative Functions with ES6**

- ```function``` keyword is not required to define functions in objects


	const person = {
  		name: "Taylor",
  		sayHello() {
    		return `Hello! My name is ${this.name}.`;
  		}
	};

**Define constructor function**

- ```new``` keyword to instantiate an object
- ex:


	class SpaceShuttle {
	  constructor(targetPlanet){
	    this.targetPlanet = targetPlanet;
	  }
	}
	const zeus = new SpaceShuttle('Jupiter');


**Use getters and setters to Control Access to an Object**

- Getters return (get) the value of an object's provate variable to the user without user directly accessing the private variable.

- Setters modify (set) the value of an object's private variable based on the value passed into the setter function


	const lol = new Book('anonymous');
	console.log(lol.writer);  // anonymous
	lol.writer = 'wut';
	console.log(lol.writer);  // wut


**Import vs Require**

-- Require: 
		- to import functions and code in external files

-- Import:
1. import specific code/part of module 
1. saves time and memory
1. syntax: ```import { countItems } from "math_array_functions"```

Syntax to import a default export	```import add from "math_functions";```

**Export**		

Syntax:

	export { capitalizeString } 
	export const foo = "bar";
or 

	export { capitalizeString, foo }
	
Default export: 

	export default function add(x, y) {//body}

- ```export default``` cannot be used with ```var```, ```let```, or ```const```


**Create Module Script**

    <script type="module" src="index.js"></script>
