load("201224b0d1c296b45befd2285e95dd42.js");

function f() {
    for (var i=0; i<100; i++) {
	var obj = {data: {id:1}};
    }
    Object.defineProperty(obj, "id", {
	configurable: true,
	enumerable: false,
	get: function() {
	    return this.data.id;
	}
    });
    return obj.id;
}
assertEq(f(), 1);

function f2() {
    for (var i=0; i<100; i++) {
        var obj = {data: {id:1}};
    }
    Object.defineProperty(obj, "id", {
        configurable: true,
        enumerable: false,
        get: function() { return this.data.id; },
        set: function(v) { this.data.id = v; }
    });
    obj.id = 3;
    return obj.id;
}
assertEq(f2(), 3);
