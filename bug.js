function foo(a, b) {
  return a + b;
}

function bar() {
  var x = 10;
  var y = 20;
  return foo(x, y);
}

var z = bar();
console.log(z); //Output: 30