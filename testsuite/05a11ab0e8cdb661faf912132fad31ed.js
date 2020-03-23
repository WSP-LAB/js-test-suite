load("2f2d22920eb745ac5efdfb16dc445b14.js");

for (constructor of typedArrays) {
    let a = new constructor(10);
    passed = true;
    result = a.includes({ valueOf() { passed = false; return 1; } });
    shouldBeTrue("passed");
    shouldBeFalse("result");
}
finishJSTest();
