# Intro to closures
A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has finished executing. It allows data encapsulation and can be used for creating private variables and functions.

To understand closures, it's important to first understand lexical scoping. In JavaScript, variables declared within a function are only accessible within that function, and any nested functions within it. However, a nested function can "remember" the variables from the outer function even after the outer function has returned. This is because the inner function has access to the variables in the outer function's lexical scope.

When a function is created, it has access to a reference to all the variables declared around it, also known as it's **lexical environment**. The combination of the function and its enviroment is called a closure. This is a powerful and often used feature of the language.

You can use rest syntax to access all the passed arguments as an array (...args). This isn't necessary for this problem, but it will be a critical concept for many problems.

# Solution Explanation
I created the outer function 'createHelloWorld'. Within it, I declared a const hello with the string "Hello World". The outer function returns an anonymous inner function. The inner funtion then returns the const hello which has our solution string.