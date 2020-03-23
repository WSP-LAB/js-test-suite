load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
try {
    decodeURIComponent('%ED%A0%80');
    assertEq(true, false, "expected an URIError");
} catch (e) {
  assertEq(e instanceof URIError, true);
  reportCompare(true,true);
}
