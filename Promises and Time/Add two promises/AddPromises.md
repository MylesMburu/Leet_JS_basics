## Intro To Promises
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
Promises provide a way to register callbacks to be called when the async operation completes or fails.

Async & Await are JavaScript keywords that are used to handle promises. The async keyword defines an asynchronous function, which returns a promise. The await keyword is used to wait for a promise to be resolved before moving on to the next line of code.

- Note: The await keyword can only be used within an async function.

## Solution Approach
In the addTwoPromises function, await is used to pause the execution of the function until each promise is resolved. The variable i is assigned the resolved value of promise1, and j is assigned the resolved value of promise2.

After both promises have resolved and the corresponding values are obtained, the function returns the sum of i and j.

In the example usage at the end, Promise.resolve(2) is used to create a promise that resolves with the value 2. The addTwoPromises function is called with these promises, and the resulting promise is chained with then to log the sum (4) to the console.