load("201224b0d1c296b45befd2285e95dd42.js");
function testNullRelCmp() {
    var out = [];
    for(j=0;j<3;++j) { out.push(3 > null); out.push(3 < null); out.push(0 == null); out.push(3 == null); }
    return out.join(",");
}
assertEq(testNullRelCmp(), "true,false,false,false,true,false,false,false,true,false,false,false");
