load("201224b0d1c296b45befd2285e95dd42.js");
function testDeepPropertyShadowing()
{
    function h(node) {
        var x = 0;
        while (node) {
            x++;
            node = node.parent;
        }
        return x;
    }
    var tree = {__proto__: {__proto__: {parent: null}}};
    h(tree);
    h(tree);
    tree.parent = {};
    assertEq(h(tree), 2);
}
testDeepPropertyShadowing();
