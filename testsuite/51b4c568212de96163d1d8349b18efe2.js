load("201224b0d1c296b45befd2285e95dd42.js");
// for-in with revoked Proxy
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

let {proxy, revoke} = Proxy.revocable({a: 1}, {});

for (let x in proxy)
    assertEq(x, "a")

revoke();

assertThrowsInstanceOf(function() {
    for (let x in proxy)
        assertEq(true, false);
}, TypeError)
