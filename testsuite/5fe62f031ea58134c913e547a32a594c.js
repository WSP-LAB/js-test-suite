load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function escape()
{
}
function test0(){
  function bar0 (){
  }
  if (doit)
  {
     escape(bar0);
  }
  (function(){
      //Snippets:newobjinlining3.ecs
      function v375952()
      {
      }
      function v375957()
      {
        v375952.prototype = {};
      }
    if (doit) {
      v375957();
      v375957();
    }
    //Snippet From Var
  })();
};

var doit = false;
// generate profile
test0();

doit = true;
// run JITted code
test0();

