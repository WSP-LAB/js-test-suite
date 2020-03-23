load("201224b0d1c296b45befd2285e95dd42.js");
function selfsetelem(o, i) {
    o[i] = o;
}
var arr = new Array();
selfsetelem(arr, "prop0");
selfsetelem(arr, 0);
selfsetelem(arr, 1);
selfsetelem(arr, 0);
arr.prop0.toString();
