load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var received = 0;

function receive(message) {
  var message_obj = JSON.parse(message);
  assertEquals(3, message_obj.result.result.value);
  received++;
}

var message = JSON.stringify({
  id : 1,
  method : "Runtime.evaluate",
  params : {
    expression: "function f() { return 2 }; 3"
  }
});

send(message);

assertEquals(1, received);
assertEquals(2, f());
