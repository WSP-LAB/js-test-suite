load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Any separators are admitted between declaration chunks
 *
 * @path ch13/13.0/S13_A16.js
 * @description Inserting separators between declaration chunks
 */

function
x
(
)
{
}
;

x();

function                                                    y                                   (                                          )                                              {};

y();

function

z

(

)

{
    
}

;

z();

eval("function\u0009\u2029w(\u000C)\u00A0{\u000D};");

w();

