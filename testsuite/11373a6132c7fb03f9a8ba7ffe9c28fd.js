load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("42adbbe52993f32c4bd1a7e3e35e8a4b.js");
function func1()
{
    var x, y;
    var i =0;
    var j = 0;

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            y = SIMD.Int32x4(2, 2, 2, 2);
            
        }
    }
    return y;
}
var z;
func1();
func1();
func1();

func1();
func1();
func1();

func1();
func1();
func1();

func1();
func1();
func1();

func1();
func1();
func1();

func1();
func1();
func1();

func1();
func1();
func1();

func1();
func1();
x = func1();
equalSimd([2,2,2,2], x, SIMD.Int32x4, "func1");

print("PASS");