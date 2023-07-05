// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = () => {
 const hello = "Hello World"
    return function(...args){
        return hello;
    }
}