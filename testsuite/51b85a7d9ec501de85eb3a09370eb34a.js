load("201224b0d1c296b45befd2285e95dd42.js");
var cnBadSyntax = '1=2';
var obj = new testObject;
f.call(obj);
g();
function testObject() {
        this.badSyntax = cnBadSyntax;
}
function f() {
    try {
        eval(this.badSyntax)
    } catch (e) {}
}
function g() {
        f.call();
}
