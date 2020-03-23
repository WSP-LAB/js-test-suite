load("e2371540d876710daf38e749390aa2a3.js");
description(
"Regression test for https://webkit.org/b/124508. This test should not crash."
);

function function_0() {
    switch (var_1) {
    case "foo":
        switch (var_1) {
        case "foo":
            switch (var_1) {
            case "foo":
                switch (var_1) {
                case var_1:
                    try {} catch (e_0) {
                        break;
                    } finally {
                        switch (var_1) {
                        case "foo":
                            label_2:
                            for (;;)
                                label_3:
                                for (;;)
                                    continue label_3;
                        }
                    }
                }
            }
        }
    }
}

try {
    function_0();
} catch (e) {
}

load("cf1a0efae1078faee510f7bda78d4902.js");
