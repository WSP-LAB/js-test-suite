load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print_(x) { WScript.Echo(x+'') }

print_(this.Math);

try {
    print_(Math.PI);
} catch (e) {
    print_(e);
}

try {
    print_(Math);
} catch (e) {
    print_(e);
}

let Math = { PIE: "delicious" };

print_(this.Math);
print_(this.Math.PI);
print_(this.Math.PIE);
print_(Math);
print_(Math.PI);
print_(Math.PIE);

print_(this.JSON);

try {
    print_(JSON.stringify);
} catch (e) {
    print_(e);
}

try {
    print_(JSON);
} catch (e) {
    print_(e);
}

const JSON = { stringifize: "no dice" };

print_(this.JSON);
print_(this.JSON.stringify);
print_(this.JSON.stringifize);
print_(JSON);
print_(JSON.stringify);
print_(JSON.stringifize);
