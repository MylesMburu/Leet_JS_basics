/*
Given two promises promise1 and promise2, return a new promise. 
promise1 and promise2 will both resolve with a number.
The returned promise should resolve with the sum of the two numbers.
*/

var addTwoPromises = async function(promise1, promise2){
    const i = await promise1;
    const j = await promise2;

    return i+j;
};

//The function can be used as in the example below

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */