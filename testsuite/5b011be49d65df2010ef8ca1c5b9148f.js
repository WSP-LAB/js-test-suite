load("201224b0d1c296b45befd2285e95dd42.js");
function testIncDec2(ii) {
    var x = [];
    for (let j=0;j<5;++j) {
        ii=j;
        jj=j;
        var kk=j;
        x.push(ii--);
        x.push(jj--);
        x.push(kk--);
        x.push(++ii);
        x.push(++jj);
        x.push(++kk);
    }
    return x.join(",");
}
function testIncDec() {
    return testIncDec2(0);
}
assertEq(testIncDec(), "0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4");
