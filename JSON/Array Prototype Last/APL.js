/*
* Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
* If there are no elements in the array, it should return -1.
* You may assume the array is the output of JSON.parse.
*/

Array.prototype.last = function() {
    for(i=0;i<Array.length;i++){
        let last = array.last([i]);
    }
    return last;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */