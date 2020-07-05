**Promises**
- to do something, usually asynchronously. 
- When the task completes, either fulfill promise or fail to do so. 
- Promise is a constructor function
- use the `new` keyword to create one. 
- It takes a function, as its argument, with two parameters - **resolve** and **reject**. 
- These are methods used to determine the outcome of the promise. 
- Syntax:


    const myPromise = new Promise((resolve, reject) => {
    
   
    });
    
- 3 states: 
1. pending
1. fulfilled
1. rejected

- resolve - for promise to succeed
- reject - when you want promise to fail

ex: 

    const makeServerRequest = new Promise((resolve, reject) => {
      // responseFromServer represents a response from a server
      let responseFromServer;
        
      if(responseFromServer) {
        resolve("We got the data");
      } else {  
        reject("Data not received")
      }
    });   

**Handle a Fulfilled Promise with then**
- then method is executed immediately after your promise is fulfilled with resolve

ex: 

    makeServerRequest.then(result => {
      console.log(result);
    });

**Handle a Rejected Promise with catch**
- catch is the method used when your promise has been rejected. 
- It is executed immediately after a promise's reject method is called.

ex:

    makeServerRequest.catch(error => {
      console.log(error);
    });