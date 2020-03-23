function assert(b) {
    if (!b)
        throw new Error("Bad assertion.");
}

setGlobalConstRedeclarationShouldNotThrow(); // Allow duplicate const declarations at the global level.

for (let i = 0; i < 100; i++) {
    load("c4365df5d26d38e85948dfb3d05e4de0.js");
    assert(foo === 20);
    load("55fb84096533f7431451c9894d15f3ff.js");
    assert(foo === 40);
}
