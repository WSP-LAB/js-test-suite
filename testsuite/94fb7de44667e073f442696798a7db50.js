load("201224b0d1c296b45befd2285e95dd42.js");
function f(){
    var tarr = [];
    var elemArray = [
        {name: "C0", checked: true},
        {name: "C1", checked: false},
    ];
    for (var i = 0; i < elemArray.length; i++) {
        var element = elemArray[i];
        tarr[i] = (element.checked == true) ? 1 : 2;
    }
    assertEq(tarr.join(""), "12");
}
f();
