load("201224b0d1c296b45befd2285e95dd42.js");
obj = new Proxy(Number.bind(), {});
Object.defineProperty(obj, "caller", {set: function () {}});
