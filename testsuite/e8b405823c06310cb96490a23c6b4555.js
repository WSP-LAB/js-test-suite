load("201224b0d1c296b45befd2285e95dd42.js");

(function() {
    for (var i = 0; i < 64; ++i) {
        var name;
        switch (this) {
            case 0: name = 'firstAttr'; break;
            case 1: name = 'secondAttr'; 
            case 2: name = 'thirdAttr'; break;
        }
        switch (name) {
          case 'firstAttr': assertEq(result, 'value'); break;
        }
    }
})();
