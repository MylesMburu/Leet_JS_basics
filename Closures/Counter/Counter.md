## Solution Explained
In the code, the createCounter function takes an initial value n as a parameter and returns an inner function. The inner function captures the value of n in the closure and increments n after returning the captured value.

When you call counter(), it invokes the inner function. The first call returns the initial value of n. After each call, n is incremented by 1 due to the n++ statement. Subsequent calls to counter() will return the incremented value of n.