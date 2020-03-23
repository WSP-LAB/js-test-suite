load("e2371540d876710daf38e749390aa2a3.js");
function t(n) {
    switch (n) {
        case 1:
            function f() {
                return 10;
            }
            break;
        case 2:
            function f() {
                return 20;
            }
            break;
    }

    try {
      return f();
    } catch (e) {
      return -1;
    }
}

shouldBe(t(1), '20');
shouldBe(t(2), '20');
shouldBe(t(3), '-1');

load("cf1a0efae1078faee510f7bda78d4902.js");
