load("e2371540d876710daf38e749390aa2a3.js");
function foo(text) {
  return !!text
}

function test() {
  var sum = 0;
  var str = ""
  for (var i=0; i < 10; i++) {
    sum += foo(str)

    if (sum < 5)
      str += "a"
  }
  return sum
}

dfgShouldBe(foo, "test()", "9");

load("cf1a0efae1078faee510f7bda78d4902.js");
