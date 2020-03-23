load("201224b0d1c296b45befd2285e95dd42.js");
setJitCompilerOption("ion.warmup.trigger", 4);

var IsObject = getSelfHostedValue("IsObject")
function test(foo) {
    if (IsObject(foo)) {
        print(foo.test)
    }

}

for (var i=0; i<10; i++) {
  test(1)
  test({})
}
