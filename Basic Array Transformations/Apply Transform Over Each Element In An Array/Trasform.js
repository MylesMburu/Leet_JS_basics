/*
* Given an integer array 'arr' and a mapping function 'fn', return a new array with a transformation applied to each element.
* The returned array should be created such that returnedArray[i] = fn(arr[i], i).
* Please solve it without the built-in Array.map method.
*/
 
var map = function(arr, fn) {
    const transformedArray = []; //initialized an empty array to tore transformed values

    for(i=0; i<arr.length; i++){
        // iterate through the array with a loop
        const transformedValue = fn(arr[i], i);
        transformedArray.push(transformedValue);
    }

    return transformedArray;
};