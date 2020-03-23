load("e2371540d876710daf38e749390aa2a3.js");
var af1 = () => {};
var af2 = (a) => {a + 1};

shouldBe("typeof af1 === 'function'", "true");

shouldBe("typeof af2 === 'function'", "true");

shouldBe("typeof (()=>{}) === 'function'", "true");

shouldBe("typeof ((b) => {b + 1})==='function'", "true");

var successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
