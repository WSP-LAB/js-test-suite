load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The [[Class]] property of the newly constructed object
    is set to "Date"
es5id: 15.9.3.1_A3_T3.2
description: >
    Test based on overwriting prototype.toString - 4 arguments, (year,
    month, date, hours)
---*/

Date.prototype.toString = Object.prototype.toString;

var x1 = new Date(1899, 11, 31, 23);
if (x1.toString() !== "[object Date]") {
  $ERROR("#1: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x2 = new Date(1899, 12, 1, 0);
if (x2.toString() !== "[object Date]") {
  $ERROR("#2: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x3 = new Date(1900, 0, 1, 0);
if (x3.toString() !== "[object Date]") {
  $ERROR("#3: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x4 = new Date(1969, 11, 31, 23);
if (x4.toString() !== "[object Date]") {
  $ERROR("#4: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x5 = new Date(1969, 12, 1, 0);
if (x5.toString() !== "[object Date]") {
  $ERROR("#5: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x6 = new Date(1970, 0, 1, 0);
if (x6.toString() !== "[object Date]") {
  $ERROR("#6: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x7 = new Date(1999, 11, 31, 23);
if (x7.toString() !== "[object Date]") {
  $ERROR("#7: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x8 = new Date(1999, 12, 1, 0);
if (x8.toString() !== "[object Date]") {
  $ERROR("#8: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x9 = new Date(2000, 0, 1, 0);
if (x9.toString() !== "[object Date]") {
  $ERROR("#9: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x10 = new Date(2099, 11, 31, 23);
if (x10.toString() !== "[object Date]") {
  $ERROR("#10: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x11 = new Date(2099, 12, 1, 0);
if (x11.toString() !== "[object Date]") {
  $ERROR("#11: The [[Class]] property of the newly constructed object is set to 'Date'");
}

var x12 = new Date(2100, 0, 1, 0);
if (x12.toString() !== "[object Date]") {
  $ERROR("#12: The [[Class]] property of the newly constructed object is set to 'Date'");
}
