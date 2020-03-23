load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Equivalent to the expression RegExp.prototype.exec(string) != null
es5id: 15.10.6.3_A1_T5
description: >
    RegExp is /(aa|aabaac|ba|b|c)* / and tested string is
    {toString:function(){return {};}, valueOf:function(){return
    "aabaac";}}
---*/

var __string = {toString:function(){return {};}, valueOf:function(){return "aabaac";}};
var __re = /(aa|aabaac|ba|b|c)*/;

//CHECK#0
if (__re.test(__string) !== (__re.exec(__string) !== null)) {
	$ERROR('#0: var __string = {toString:function(){return {};}, valueOf:function(){return "aabaac";}}; __re = /(aa|aabaac|ba|b|c)*/; __re.test(__string) === (__re.exec(__string) !== null)');
}
