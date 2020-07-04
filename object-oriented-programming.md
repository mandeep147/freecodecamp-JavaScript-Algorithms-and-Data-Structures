**Constructor Function**

- functions that create new objects
- blueprint for the creation of new objects.
- defined with a capitalized name to distinguish them from other functions that are not constructors.
- use the keyword this to set properties of the object they will create. 
    Inside the constructor, this refers to the new object it will create.
- define properties and behaviors instead of returning a value as other functions might.
  
**create objects**

    let blueBird = new Bird();
    
**instanceof**    

- Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. 
- returns ```true``` or ```false```

        crow instanceof Bird; // => true
    
**Use Prototype Properties to Reduce Duplicate Code**

- object that is shared among ALL instances

        Bird.prototype.numLegs = 2; 
       
- all instances automatically have the properties on the prototype

**Understand the Constructor Property**

	let duck = new Bird();

	console.log(duck.constructor === Bird); //prints true

- to check for this property to find out what kind of object it is.

- whenever a prototype is manually set to a new object, remember to define the constructor property

	Bird.prototype = {
  		constructor: Bird, // define the constructor property
	};

- 
	Bird.prototype.isPrototypeOf(duck); // returns true	

- `prototype` of prototype is `Object.prototype`

- 
    Object.prototype.isPrototypeOf(Bird.prototype);
    // returns true
    
    let duck = new Bird("Donald");
    
    Bird is the supertype for duck, while duck is the subtype. 
    Object is a supertype for both Bird and duck.

- `Object` is a supertype for all objects in JavaScript. 

**Inheritance**

- making an instance: 
    Object.create(obj) creates a new object, and sets obj as the new object's prototype.

- inheriting behavior from the supertype:

    Bird.prototype = Object.create(Animal.prototype);
    let duck = new Bird("Donald"); //  duck inherits properties of Bird
     
- When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

-     duck.constructor // Animal

-   Bird.prototype.constructor = Bird;
    duck.constructor // function Bird(){...}
    
- Functions are added to Object's prototype 

    ChildObj.prototype.methodName = function() {..}

**Use a Mixin to Add Common Behavior Between Unrelated Objects**

- Inheritance does not work well for unrelated objects

- use mixins for unrelated objects like Airplane and Bird

    let flyMixin = function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      }
    };
    
    let bird = {
      name: "Donald",
      numLegs: 2
    };
    
    let plane = {
      model: "777",
      numPassengers: 524
    };
    
    flyMixin(bird);
    flyMixin(plane);
    
    Both plane and bird have fly property
    
**Use Closure to Protect Properties Within an Object from Being Modified Externally**

- a way to make properties private is by creating a variable within the constructor function. 

- scope of that variable to be within the constructor function versus available globally.

- the property can only be accessed and changed by methods also within the constructor function.

- a function always has access to the context in which it was created. This is called closure.


**Immediately Invoked Function Expression (IIFE)**

- The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. - IIFE

    (function () {
      console.log("Chirp, chirp!");
    })();
    
- **to create a module** 

    let motionModule = (function () {
      return {
        glideMixin: function (obj) {
          obj.glide = function() {
            console.log("Gliding on the water");
          };
        },
        flyMixin: function(obj) {
          obj.fly = function() {
            console.log("Flying, wooosh!");
          };
        }
      }
    }) (); 
    
    motionModule.glideMixin(duck);
    duck.glide();
    
-  all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code.
    