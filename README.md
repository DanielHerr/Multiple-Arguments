# Multiple-Arguments
Automates handling of multiple arguments.

Usage:
```
var test = multiplearguments(function(...inputs) {
 return(inputs)
})

test(1) == 1
test(1, 2) == [ 1, 2 ]
test([ 1 ]) == [ 1 ]
test([ 1, 2 ]) == [ 1, 2 ]
```

<a href="https://danielherr.github.io/Multiple-Arguments/tests.html">Run Tests</a>
