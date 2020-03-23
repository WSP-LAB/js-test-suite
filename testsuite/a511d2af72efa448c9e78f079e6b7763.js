load("201224b0d1c296b45befd2285e95dd42.js");
function test() {
    var f;
    function gen() {
	f = function(){}
    }
    for (var i in gen()) {}
    arguments[arguments.length - 1];
}
test();
