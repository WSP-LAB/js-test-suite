load("e2371540d876710daf38e749390aa2a3.js");
description(
"Regression test for https://webkit.org/b/155917. This test should run without throwing an exception."
);

Object.create = function() {
    throw "User defined Object.create should not be used by Date.prototype methods.";
};

(new Date).toLocaleString();
(new Date).toLocaleDateString();
(new Date).toLocaleTimeString();

load("cf1a0efae1078faee510f7bda78d4902.js");
