load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

const a = 1;

with({a:2}) {
    a++;
    print_(a);  // 3
}

try {
    with({b:2}) {
        a++;
        print_(a);
    }
}
catch(e) {
    print_(e);  // TypeError: Assignment to const
}

let foo1 = new Function(
    "with({a:2}) {" + 
    "    a++;" +
    "    print_(a);" +
    "}");

foo1();   // 3

let foo2 = new Function(
    "with({b:2}) {" + 
    "    a++;" +
    "    print_(a);" +
    "}");

try {
    foo2();
}
catch(e) {
    print_(e);  // TypeError: Assignment to const
}

try {
    eval('let b = 3');
    a++;
    print_(a);
}
catch(e) {
    print_(e);  // TypeError: Assignment to const
}

(function() {
    const a = 1;
    with({a:2}) {
        a++;
        print_(a);  // 3
    }

    try {
        with({b:2}) {
            a++;
            print_(a);
        }
    }
    catch(e) {
        print_(e);  // TypeError: Assignment to const
    }

    try {
        eval('let b = 3');
        a++;
        print_(a);
    }
    catch(e) {
        print_(e);  // TypeError: Assignment to const
    }
})();

function print_(x) { WScript.Echo(x) }

