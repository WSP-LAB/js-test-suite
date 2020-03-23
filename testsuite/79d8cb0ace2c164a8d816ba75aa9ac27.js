load("e2371540d876710daf38e749390aa2a3.js");
description("Tests to make sure we correctly handle iterating a map when the first entry is a hole");
var map0= new Map;
map0.set(125, {});
map0.delete(125);
map0.forEach(function(node) {
    print(node);
});

load("cf1a0efae1078faee510f7bda78d4902.js");
