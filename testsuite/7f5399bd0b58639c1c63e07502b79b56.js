load("201224b0d1c296b45befd2285e95dd42.js");
load("789647b4b1873ad4adf74568147f8449.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

if (typeof newGlobal !== 'function' ||
    !isSimdAvailable() ||
    typeof SIMD === 'undefined')
{
    quit();
}

var stdlib = new (newGlobal().Proxy)(this, new Proxy({
    simdGet: 0,
    getOwnPropertyDescriptor(t, pk) {
        if (pk === "SIMD" && this.simdGet++ === 1) {
            return {};
        }
        return Reflect.getOwnPropertyDescriptor(t, pk);
    }
}, {
    get(t, pk, r) {
        print("trap", pk);
        return Reflect.get(t, pk, r);
    }
}));

var m = asmCompile('stdlib', '"use asm"; var i4=stdlib.SIMD.Int32x4; var i4add=i4.add; return {}');

assertAsmLinkFail(m, stdlib);
