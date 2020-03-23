load("201224b0d1c296b45befd2285e95dd42.js");
// Don't assert
var obj = {};
var proxy = new Proxy(obj, {
    get preventExtensions() {
        Object.preventExtensions(obj);
    }
});
Object.preventExtensions(proxy);
