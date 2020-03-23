load("201224b0d1c296b45befd2285e95dd42.js");
if (!this.hasOwnProperty("TypedObject"))
    quit();

Array.prototype[Symbol.iterator] = function() {
    for (var i = 3; --i >= 0;) {
        yield this[i]
    }
}
new TypedObject.ArrayType(TypedObject.int32, 0).build(1, x => 1)
