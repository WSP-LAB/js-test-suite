function assert(b) {
    if (!b)
        throw new Error("Bad assertion.");
}

setGlobalConstRedeclarationShouldNotThrow(); // Allow duplicate const declarations at the global level.

load("c4365df5d26d38e85948dfb3d05e4de0.js");
assert(foo === 20);
let threw = false;
try {
    load("256d5d50f3a2a72c166e691f6ff9e12e.js"); // We ignore the setting and always throw an error when in strict mode!
} catch(e) {
    threw = true;
}

assert(threw);
assert(foo === 20);
