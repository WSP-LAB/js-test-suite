load("201224b0d1c296b45befd2285e95dd42.js");
g = newGlobal();
g.parent = this;

function installHook() {
    let calledTimes = 0;
    function hook() {
        calledTimes++;

        // Allow the new.target.prototype get to throw.
        if (calledTimes === 1)
            return undefined;

        return {
            return: undefined
        };
    }

    Debugger(parent).onExceptionUnwind = hook;
}


g.eval("(" + installHook + ")()");

var handler = {
    get(t, p) {
        throw new TypeError;
    }
};


var f = new Proxy(function(){}, handler);
new f();
