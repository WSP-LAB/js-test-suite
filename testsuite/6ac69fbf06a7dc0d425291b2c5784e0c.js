load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print_(x) { WScript.Echo(x+""); }

let arguments = 'global let arguments';
print_(arguments);

function testLetBlockScope() {
    {
        let arguments = 'let arguments block scoped';
        print_(arguments);
    }
    print_(arguments);
}
testLetBlockScope();

function testConstBlockScope() {
    {
        const arguments = 'const arguments block scoped';
        print_(arguments);
    }
    print_(arguments);
}
testConstBlockScope();

eval("let arguments = 'eval global let arguments'; print_(arguments);");
eval("const arguments = 'eval global const arguments'; print_(arguments);");


function testLetFunctionScope() {
    let arguments = 'let arguments function scope';
    print_(arguments);
}
testLetFunctionScope();

function testConstFunctionScope() {
    const arguments = 'const arguments function scope';
    print_(arguments);
}
testConstFunctionScope();

// OS 206284
function test() {
  (function() { /*sStart*/ ;
  {
     let veymqa = arguments;
     for (let gvvmwv = 0, arguments; gvvmwv < 12; ++gvvmwv) {}
  };; /*sEnd*/
  })();
}
test();



