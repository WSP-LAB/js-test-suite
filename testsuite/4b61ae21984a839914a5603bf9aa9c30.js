load("201224b0d1c296b45befd2285e95dd42.js");
var result = "";
o = { valueOf:function(){ throw "cow" } };
try {
    String.fromCharCode(o);
} catch (e) {
    result = e.toString();
}
assertEq(result, "cow");
