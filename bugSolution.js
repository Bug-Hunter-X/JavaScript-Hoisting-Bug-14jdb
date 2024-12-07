function foo(a, b) {
  return a + b;
}

function bar() {
  let x = 10; //Changed to let
  let y = 20; //Changed to let
  return foo(x, y);
}

var z = bar();
console.log(z); //Output: 30