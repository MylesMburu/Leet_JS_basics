## Solution Breakdown

1. Array.prototype:
   - In JavaScript, `Array.prototype` is the prototype object for all arrays.
   - By modifying `Array.prototype`, you can add custom methods that will be available to all array instances.
   - In this case, you're adding a new method called `last()` to the `Array.prototype`, which means it will be accessible on any array object in your code.

2. Array.prototype.last:
   - `Array.prototype.last` is the custom method being added to the `Array.prototype`.
   - This method is defined as a function that can be called on any array object.
   - When you call `array.last()` on an array, it will execute the code within this method.

3. The `this` keyword:
   - Inside the `Array.prototype.last` method, `this` refers to the array object that called the method.
   - It allows you to access and manipulate the properties and elements of the array.

4. `this.length`:
   - `this.length` is a property of an array object that represents the number of elements in the array.
   - In the code, `this.length` is used to check if the array is empty or not by comparing it to 0.

5. Conditional statement:
   - The code uses an `if-else` conditional statement to handle two cases:
     - If the array is empty (`this.length === 0`), it returns -1.
     - If the array has elements, it returns the last element.

6. Returning the last element:
   - To return the last element of the array, `this[this.length - 1]` is used.
   - Since array indices are zero-based, the last element is located at the index `this.length - 1`.

By adding the `last()` method to `Array.prototype`, you are extending the functionality of all array objects in your code. Now you can call `array.last()` on any array, and it will return the last element or -1 if the array is empty.