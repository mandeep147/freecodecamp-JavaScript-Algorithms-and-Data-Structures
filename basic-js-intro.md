**Basics of JavaScript**    
  
**push**: to append data at the end of the array    
**pop**: removes last element from array    
**shift**: removes first element from array    
**unshift**: to append data at the beginning of the array    

**scope** refers to the visibility of variables.    
 1. Variables which are defined outside of a function block have Global scope.
    This means, they can be seen everywhere in your JavaScript code
 2. Variables which are used without the var keyword are automatically created in the global scope.
    the local variable takes precedence over the global variable.

**splice** 
Remove items

remove any number of consecutive elements from anywhere in an array.
- arg 1:index from which to begin removing elements
- arg 2: number of elements to delete

	```array.splice(2, 2); // remove 2 elements beginning with the 3rd element```

- returns a new array containing the value of the removed elements

Add Items 
- arg 3: replace the removed element with

**slice**
Copy Array Items: rather than modifying an array, copies, or extracts, a given number of elements to a new array, leaving the array it is called upon untouched

- arg 1: index at which to begin extraction
- arg 2: index at which to stop extraction

**spread**

Copy an Array with the Spread Operator
- allows us to easily copy all of an array's elements, in order
- The spread syntax simply looks like this: ```...```

	```let thatArray = [...thisArray];```

Combine Arrays with the Spread Operator
- combine arrays
- insert all elements from one array into another, at any index

	```let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];```
