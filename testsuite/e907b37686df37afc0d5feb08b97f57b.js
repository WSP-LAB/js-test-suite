load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// OS 7100885: With -maxsimplejitruncount:4 -maxinterpretcount:4, crashes due to incorrect profile data

class class2 { }
for (var i = 0; i < 10; i++) {
  class class8 extends class2 {
    constructor() {
      super();
      class2 = Boolean;
    }
  }
  new class8()
  new class8()
}

print('pass');
