## Solution Approach
- The chunkArray function takes two parameters: arr, which represents the array to be chunked, and size, which specifies the size of each subarray.

- Inside the function, we initialize an empty array called chunkedArray that will store the chunked subarrays.

- We also initialize a variable index to keep track of the current index while iterating over the arr.

- We start a while loop that continues as long as the index is less than the length of arr.

- In each iteration of the loop, we use the slice method on arr to extract a portion of the array from the index to index + size. This creates a new subarray with size elements.

- We push the subarray into the chunkedArray.

- We increment the index by size to move to the next portion of the arr for the next iteration.

- Once the while loop finishes, we have chunked the entire arr, and the chunkedArray is ready. We return it as the final result.