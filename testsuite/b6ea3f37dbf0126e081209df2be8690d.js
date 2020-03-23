load("201224b0d1c296b45befd2285e95dd42.js");
function runTest() {
  if (Math) {
    function createTester(options) {
      return function() {
        return options.blah;
      };
    }

    return createTester({blah:"bar"});
  }
}

assertEq(runTest()(), "bar");
