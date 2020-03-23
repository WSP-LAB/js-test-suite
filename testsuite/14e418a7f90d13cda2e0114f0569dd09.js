load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var typedArray = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
var lengths = [0, 5, 20];
var typedObjectInstances = new Array();

function print_(obj)
{
WScript? WScript.Echo(obj) : document.write(obj);
}


function printObj(obj)
{
  print_(obj.toString());
  for (var i in obj)
  {
  print_(i + " == " + obj[i]);
  };

}

function InitTypedArray(obj)
{
  for (var i = 0; i < obj.length; i++)
  {
    obj[i] = i;
  }
}

function verifyNoThrow(func, obj)
{
var hasThrown = false;
try {
 func(obj);
}
catch(e)
{
  print_("FAILED: get exception " + e.description);
  hasThrown = true;
}
}

function verifyThrow(func, obj)
{
var hasThrown = false;
try {
 func(obj);
}
catch(e)
{
  print_("SUCCEEDED: get expected exception " + e.description);
  hasThrown = true;
}
if (!hasThrown)
{
  print_("FAILED: didn't get exception");
}
}


function verifyOneFunction(func, typedObjectInstances, srcIndex, destIndex, offset, shouldThrow)
{
    var hasException = false;
    var result;
    try {
      result = func(typedObjectInstances, srcIndex, destIndex);
      printObj(result);
      for (var index = 0; index < result.length; index++)
      {
          if (result[index] != typedObjectInstances[srcIndex][index+offset])
          {
              print_("failed to offset: offset is " + offset + "index is " + index + "source is" + typedObjectInstances[srcIndex][index+offset] + "dest is" + result[index]);
          }
      }
    }
    catch (e)
    {
      hasException = true;
      if (!shouldThrow)
      {
        print_("ERROR! throw unexpected exception " + e.description);
      }
    }
    if (!hasException && shouldThrow)
    {
      print_("ERROR! expected exception was not thrown");
    }
}

function verifysubarray(typedObjectInstances, srcIndex, destIndex, offset, shouldThrow)
{
    var hasException = false;
    var result;
    try {
      result = Object.getPrototypeOf(typedObjectInstances[destIndex]).subarray.call(typedObjectInstances[srcIndex], offset);
      printObj(result);
      for (var index = 0; index < result.length; index++)
      {
          if (result[index] != typedObjectInstances[srcIndex][index+offset])
          {
              print_("failed to offset: offset is " + offset + "index is " + index + "source is" + typedObjectInstances[srcIndex][index+offset] + "dest is" + result[index]);
          }
      }
    }
    catch (e)
    {
      hasException = true;
      if (!shouldThrow)
      {
        print_("ERROR! throw unexpected exception " + e.description);
      }
      else
      {
         print_("SUCCEEDED in getting exception " + e.description);
      }
    }
    if (!hasException && shouldThrow)
    {
      print_("ERROR! expected exception was not thrown");
    }
}


function verifySet(typedObjectInstances, srcIndex, destIndex, shouldThrow)
{
    var hasException = false;
    var result;
    var source = [1,3,5,7,9,11,13,15];
    print_("verify set.call using prototypeOf " + typedObjectInstances[destIndex] + " instance " + typedObjectInstances[srcIndex]);
    try {
      Object.getPrototypeOf(typedObjectInstances[srcIndex]).set.call(typedObjectInstances[destIndex], source);
      for (var index = 0; index < source.length; index++)
      {
          if (typedObjectInstances[destIndex][index] != source[index])
          {
              print_("failed to set: offset =0 " + "index is " + index + "source is" + source[index] + "dest is" + typedObjectInstances[destIndex][index]);
          }
      }
    }
    catch (e)
    {
      hasException = true;
      if (!shouldThrow)
      {
        print_("ERROR! throw unexpected exception " + e.description);
      }
      else
      {
         print_("SUCCEEDED in getting exception " + e.description);
      }
    }
    if (!hasException && shouldThrow)
    {
      print_("ERROR! expected exception was not thrown");
    }

    print_("verify set using "+  typedObjectInstances[destIndex] + " using array");
    try {
      typedObjectInstances[destIndex].set(source, 1);
      for (var index = 0; index < source.length; index++)
      {
          if (source[index] != typedObjectInstances[destIndex][index+1])
          {
              print_("ERROR! failed to set: offset is " + 1 + "index is " + index + "source is" + source[index] + "dest is" + typedObjectInstances[destIndex][index+1]);
          }
      }
    }
    catch (e)
    {
        print_("ERROR! throw unexpected exception " + e.description);
    }

    print_("verify set using "+  typedObjectInstances[destIndex] + " instance " + typedObjectInstances[srcIndex]);
    try {
      typedObjectInstances[destIndex].set(typedObjectInstances[srcIndex]);
      for (var index = 0; index < typedObjectInstances[srcIndex].length; index++)
      {
          if (typedObjectInstances[srcIndex][index] != typedObjectInstances[destIndex][index])
          {
              print_("failed to set: index is " + index + "source is" + typedObjectInstances[srcIndex][index] + "dest is" + typedObjectInstances[destIndex][index]);
          }
      }
    }
    catch (e)
    {
        print_("ERROR! throw unexpected exception " + e.description);
    }

    print_("verify set to different type");
      Object.getPrototypeOf(typedObjectInstances[destIndex]).set.call(typedObjectInstances[destIndex], typedObjectInstances[srcIndex]);
      for (var index = 0; index < typedObjectInstances[destIndex].length; index++)
      {
          if (typedObjectInstances[destIndex][index] != typedObjectInstances[srcIndex][index])
          {
              print_("failed to offset: offset is " + offset + "index is " + index + "source is" + typedObjectInstances[srcIndex][index] + "dest is" + srcIndex);
          }
      }
    printObj(typedObjectInstances[destIndex]);
}

function verifyOneObject(typedObjectInstances, srcIndex, destIndex, shouldThrow)
{
    print_("verify subarray.call using prototypeOf " + typedObjectInstances[destIndex] + " instance " + typedObjectInstances[srcIndex]);
    verifysubarray(typedObjectInstances, srcIndex, destIndex, 1, shouldThrow);

    verifySet(typedObjectInstances, srcIndex, destIndex, shouldThrow);

}

for (var i = 0; i < typedArray.length; i++)
{
print_(typedArray[i]);
}

for (var i = 0; i < typedArray.length; i++)
{
typedObjectInstances[i] = new typedArray[i](10);
InitTypedArray(typedObjectInstances[i]);
}

for (var i = 0; i < typedArray.length; i++)
{
  for (var j = 0; j < typedArray.length; j++)
  {
    if (i != j)
    {
      verifyOneObject(typedObjectInstances, i, j, true);
    }
    else
    {
      verifyOneObject(typedObjectInstances, i, j, false);
    }

  }
}

print_("verify Object.defineProperty");
for (var i = 0; i < typedArray.length; i++)
{
verifyNoThrow(function(obj){Object.defineProperty(obj, "1", {value: 1})}, typedObjectInstances[i]);
verifyThrow(function(obj){Object.defineProperty(obj, "1", {value: 1, writable: false})}, typedObjectInstances[i]);
verifyThrow(function(obj){Object.defineProperty(obj, "1", {value: 1, configurable: true})}, typedObjectInstances[i]);
verifyThrow(function(obj){Object.defineProperty(obj, "1", {get: function(){throw "error"}})}, typedObjectInstances[i]);
verifyNoThrow(function(obj){Object.defineProperty(obj, "hello", {value: 1})}, typedObjectInstances[i]);
verifyNoThrow(function(obj) { obj.foo = 'hello';}, typedObjectInstances[i]);

}

print_("Verify call to built-in property");
Object.prototype.byteOffset = function(){ print_('what??'); }
function callByteOffset(o) { o.byteOffset(); }
for (i = 0; i < typedArray.length; i++)
{
    // Call should access built-in byteOffset and throw trying to call it, not call Object.prototype property
    verifyThrow(callByteOffset, typedObjectInstances[i]);
}
