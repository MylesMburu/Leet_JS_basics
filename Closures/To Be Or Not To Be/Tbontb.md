# Solution Approach
This code defines a function called expect that takes in a value (val). It returns an object with two functions: toBe and notToBe. Here's an explanation of each part:

toBe: This function compares the original value (val) passed to the expect function with another value (val2) passed to the toBe function. If the two values are equal (val === val2), it returns true. Otherwise, it throws an Error with the message "Not Equal".

notToBe: This function also compares the original value (val) passed to the expect function with another value (val2) passed to the notToBe function. If the two values are not equal (val !== val2), it returns true. Otherwise, it throws an Error with the message "Equal".