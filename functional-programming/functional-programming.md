**Functional Programming**

- functions are independent from state of program or global variables

- functions limit any changes to state of program and avoid changes to the global objects holding data


The functional programming software development approach breaks a program into small, testable parts.

- isolated functions - independent of state of program
- pure functions - same input gives same output
- Functions with limited side effects - any changes, or mutations, 
    to the state of the program outside the function are carefully controlled

**callback**: functions that are slipped or passed into another function

**first class**: functions that can be assigned to variable,
        passed into another function, or returned from another function
        
**higher order**: functions that take a function as an arg, or return a function as a return value

**lambda**: functions that are passed in to another function or returned from another function

**mutation** - is changing or altering things. Outcome is side effect.

**slice** returns a copy of certain elements of an array.

- first arg: index of where to begin slice
- second arg: index where to end the slice (non-inclusive)

**Default is start at beginning through the end of the array
    - copy of entire array
    
- returns new array

**every** - check if every element passes a particular test
 - returns `true` or `false`
     
     
     return arr.every(val => val > 0); //check every element is positive
     
**some** - check if any element passes a particular test

**Currying and Partial Application**
Currying - converting function of N arity into N functions of **arity**(no of args functions requires) 1  

- restructures func to takes one arg, then returns another function that takes next arg, and so on

    ```javascript
        //Un-curried function
        function unCurried(x, y) {
          return x + y;
        }
        
        //Curried function
        function curried(x) {
          return function(y) {
            return x + y;
          }
        }
        curried(1)(2) // Returns 3
    ```   

- partial application - applying a few args to a function at a time and returning another function 
that is applied to more arguments.

    ```javascript

      function impartial(x, y, z) {
        return x + y + z;
      }
      var partialFn = impartial.bind(this, 1, 2);
      partialFn(10); // Returns 13

    ```
    
    