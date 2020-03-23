load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function testConcatRevokedProxyToArray() {
  "use strict";
  var handler = {
    get(_, name) {
      if (name === Symbol.isConcatSpreadable) {
        p.revoke();
      }
      return target[name];
    }
  }

  var target = [];
  var p = Proxy.revocable(target, handler);
  assertThrows(function() { [].concat(p.proxy); }, TypeError);
})();
