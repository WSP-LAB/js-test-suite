load("201224b0d1c296b45befd2285e95dd42.js");
function checkMethods(proto) {
    var names = Object.getOwnPropertyNames(proto);
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var prop = proto[name];
    }
}
checkMethods(Function.prototype);
