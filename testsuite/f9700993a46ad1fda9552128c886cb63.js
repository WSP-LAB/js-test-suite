load("201224b0d1c296b45befd2285e95dd42.js");

var handler = {
    has: function (name) {
        assertEq(1, 2);
    }
};

for (var i=0; i<10; i++) {
    var regex = /undefined/;
    regex.__proto__ = new Proxy(function() {}, handler)
}

