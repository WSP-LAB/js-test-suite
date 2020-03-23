load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests what happens when you use a function as a variable."
);

function run_tests() {
    function x() {
      return 3;
    }  

    var x = 13;
    return x + x;
}

for(var i=0; i<100; ++i)
    shouldBe("run_tests()", "26");


load("cf1a0efae1078faee510f7bda78d4902.js");
