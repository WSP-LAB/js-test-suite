load("201224b0d1c296b45befd2285e95dd42.js");
this.name = "outer";

var sb = evalcx('');
sb.name = "inner";
sb.parent = this;

function f() {
    assertEq(this.name, "outer");
}

evalcx('with(this) { ff = parent.f; }; (function() { eval(""); for(var i=0; i<10; i++) { ff() } })()', sb);
