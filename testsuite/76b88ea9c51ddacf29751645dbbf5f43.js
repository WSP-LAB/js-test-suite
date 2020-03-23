load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class base {
    constructor() {}

    getValue() {
        return this._prop;
    }

    setValue(v) {
        this._prop = v;
    }
}

class derived extends base {
    constructor() { super(); }

    get a() { return super.getValue(); }
    set a(v) { super.setValue(v); }

    get b() { return eval('super.getValue()'); }
    set b(v) { eval('super.setValue(v);'); }

    test() {
        this.a = 15;
        assertEq(this.a, 15);

        assertEq(this.b, 15);
        this.b = 30;
        assertEq(this.b, 30);
    }
}

var derivedInstance = new derived();
derivedInstance.test();

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
