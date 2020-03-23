load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// Constructors can't be called so we can't pattern match
// them in replace and sort.
function a() {
    var b = {a: "A"};

    class X {
        constructor(a) {
            return b[a]
        }
    };

    assertThrowsInstanceOf(() => "a".replace(/a/, X), TypeError);
}

function b() {
    class X {
        constructor(x, y) {
            return x - y;
        }
    }

    assertThrowsInstanceOf(() => [1, 2, 3].sort(X), TypeError);
}

a();
b();

if (typeof reportCompare === "function")
    reportCompare(0, 0, "OK");
