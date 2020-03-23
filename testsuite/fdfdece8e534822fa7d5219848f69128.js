load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = 'true,';

var isNotEmpty = function (obj) {
  for (var i = 0; i < arguments.length; i++) {
    var o = arguments[i];
    if (!(o && o.length)) {
      return false;
    }
  }
  return true;
};

appendToActual(isNotEmpty([1], [1], [1], "asdf", [1]));


assertEq(actual, expected)
