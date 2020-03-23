load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

// Binary: cache/js-dbg-32-410468c50ca1-linux
// Flags: -j
//
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
assertThrowsInstanceOf(function() {
  for each(z in [0, 0, 0, 0]) { ({
      __parent__: []
    } = [])
  }
}, TypeError); // [].__parent__ is undefined
