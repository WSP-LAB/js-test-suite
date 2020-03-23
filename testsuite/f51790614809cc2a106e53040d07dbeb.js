load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print_(x) { WScript.Echo(x + ''); }
function filter(p) { return /^[a-z]$/.test(p); }
function printfilteredprops(o) { printprops(o, filter); }
function printprops(o, filter) {
    var s = "{",
        prependComma = false;

    for (var p in o)
    {
        if (!filter || filter(p))
        {
            if (prependComma) {
                s += "\n";
            } else {
                s += "\n";
                prependComma = true;
            }
            s += "    " + p + ": " + o[p];
        }
    }
    if (prependComma) {
        s += "\n}";
    } else {
        s += " }";
    }
    print_(s);
}


// ====================================================================================================================
//
print_('\n==== Let/const globals should not show up in for-in enumeration ====\n');


// Let/const globals should not show up in list of global
// properties in for-in enumeration.  They should also not
// cause global properties to no longer show up in
// enumeration (Blue bug 217657)
print_('\nBefore x, y, z, w declarations and globals\n');
try { print_(x); } catch (e) { print_(e); }
try { print_(y); } catch (e) { print_(e); }
try { print_(z); } catch (e) { print_(e); }
try { print_(w); } catch (e) { print_(e); }
print_(this.x);
print_(this.y);
print_(this.z);
print_(this.w);
printfilteredprops(this);

let x = "let x";
this.y = "this.y";
const z = "const z";
this.w = "this.w";

print_('\nAfter let x, this.y, const z, this.w\n');
try { print_(x); } catch (e) { print_(e); }
try { print_(y); } catch (e) { print_(e); }
try { print_(z); } catch (e) { print_(e); }
try { print_(w); } catch (e) { print_(e); }
print_(this.x);
print_(this.y);
print_(this.z);
print_(this.w);
printfilteredprops(this);

this.x = "this.x";
let y = "let y";
this.z = "this.z";
const w = "const w";

print_('\nAfter this.x, let y, this.z, const w\n');
try { print_(x); } catch (e) { print_(e); }
try { print_(y); } catch (e) { print_(e); }
try { print_(z); } catch (e) { print_(e); }
try { print_(w); } catch (e) { print_(e); }
print_(this.x);
print_(this.y);
print_(this.z);
print_(this.w);
printfilteredprops(this);


// ====================================================================================================================
//
print_('\n==== Attributes on global properties should not be lost with let/const shadowing ====\n');


Object.defineProperty(this, "p", { configurable: false, enumerable: false, writable: false, value: 'this.p' });

try { print_(p); } catch (e) { print_(e); }
print_(this.p);
printprops(Object.getOwnPropertyDescriptor(this, "p"));

let p = 'let p';

try { print_(p); } catch (e) { print_(e); }
print_(this.p);
printprops(Object.getOwnPropertyDescriptor(this, "p"));


// ====================================================================================================================
//
print_('\n==== Global properties added after const should not destroy const-ness ====\n');


const q = 'const q';
this.q = 'this.q';

try { eval("q = 'assigned to const??';"); } catch (e) { print_(e); }
print_(q);
print_(this.q);


// ====================================================================================================================
//
print_('\n==== Attributes on shadowing let properties should not be lost with Object.defineProperty() ====\n');

let r=0;
print_(r);
print_(this.r);
r=1;
print_(r);
print_(this.r);
Object.defineProperty(this, "r", {} );
print_(r);
print_(this.r);
r=2; // bug289741 assertion failure at this point
print_(r);
print_(this.r);

// test against bug 929017
Object.defineProperty(this, "s", {} );
let s=0;
s=3; // bug 929017:assertion:cacheoperators.cpp:info->IsWritable()
print_(s);
print_(this.s);

