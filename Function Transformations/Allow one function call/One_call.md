## Solution Breakdown:

1. **Function Declaration:**
   - `var once = function(fn) { ... }`: This line declares a function named `once`. It accepts a function `fn` as its parameter.

2. **Local Variable:**
   - `let called = false;`: Inside the `once` function, a local variable `called` is declared and initialized with the value `false`. This variable will keep track of whether the function `fn` has already been called or not.

3. **Returned Function (Closure):**
   - `return function(...args) { ... }`: The `once` function returns another function, which we call a closure. This returned function captures the `called` variable and the `fn` parameter from the enclosing `once` function.

4. **Checking if `fn` has been called:**
   - `if (!called) { ... }`: The closure starts by checking if the `called` variable is `false`. If it is `false`, it means `fn` has not been called yet.

5. **Calling `fn` for the first time:**
   - `called = true;`: If `fn` has not been called yet, the closure sets the `called` variable to `true`, indicating that `fn` is now called, and it should not be called again.

6. **Returning the result of `fn`:**
   - `return fn(...args);`: After setting `called` to `true`, the closure proceeds to call the original function `fn` with the arguments passed to the closure (using the spread operator `...args`). It then returns the result of the `fn` function.

7. **No Action for Subsequent Calls:**
   - If the closure is called again (i.e., `fn` has already been called), it simply does nothing and returns undefined without calling `fn` again.

## Example Usage:

```javascript
function myFunction(name) {
    console.log("Hello, " + name);
}

var fn = once(myFunction);

fn("Alice"); // Output: Hello, Alice
fn("Bob");   // No output (since fn already called once)
```

In this example, we have a function `myFunction` that logs a greeting message with the provided name. We then create a new function `fn` using the `once` function and pass `myFunction` as an argument. When we call `fn("Alice")`, it calls `myFunction` with the argument `"Alice"` and logs the greeting message. However, when we call `fn("Bob")`, the `once` mechanism prevents `myFunction` from being called again, so no message is logged for `"Bob"`.