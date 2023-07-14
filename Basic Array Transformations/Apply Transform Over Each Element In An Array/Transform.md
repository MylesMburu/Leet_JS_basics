## Solution Breakdown
1. Function declaration:
   - The code begins with the declaration of a function named `transformArray`.
   - The function takes two parameters: `arr` (the input array) and `fn` (the mapping function).

2. Variable declaration and initialization:
   - Inside the `transformArray` function, a new variable named `transformedArray` is declared and initialized as an empty array `[]`.
   - This variable will store the transformed values.

3. `for` loop:
   - The `for` loop is used to iterate over each element of the input array `arr`.
   - It uses a loop counter variable `i` initialized to 0.
   - The loop continues as long as `i` is less than the length of `arr`.
   - After each iteration, `i` is incremented by 1.

4. Applying the transformation function:
   - Within the `for` loop, the transformation function `fn` is called with the current element `arr[i]` and the current index `i` as arguments.
   - This is done using the line `const transformedValue = fn(arr[i], i);`.
   - The result of applying the transformation function to the current element is stored in the `transformedValue` variable.

5. Adding transformed values to `transformedArray`:
   - After obtaining the transformed value, it is added to the `transformedArray` using the `push()` method.
   - The line `transformedArray.push(transformedValue);` adds the `transformedValue` to the end of the `transformedArray`.

6. Returning the transformed array:
   - Once the `for` loop finishes iterating over all elements of `arr`, the `transformedArray` is returned as the result of the `transformArray` function.

By manually iterating over the input array and applying the transformation function to each element, the `transformArray` function generates a new array with the desired transformation applied to each element. This solution provides an alternative to using the built-in `Array.map()` method.