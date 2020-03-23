load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var arr = [1, 2, 3];
assertEquals({arr: [1, 2, 3]}, {arr: [...arr]});
assertEquals([[1, 2, 3]], [[...arr]]);

assertEquals({arr: [6, 5, [1, 2, 3]]}, {arr: [6, 5, [...arr]]});
assertEquals([8, 7, [6, 5, [1, 2, 3]]], [8, 7, [6, 5, [...arr]]]);
