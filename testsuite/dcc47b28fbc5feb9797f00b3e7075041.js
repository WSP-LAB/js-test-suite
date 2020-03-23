function assert(b) {
    if (!b)
        throw new Error("Bad assertion.");
}

setGlobalConstRedeclarationShouldNotThrow(); // Allow duplicate const declarations at the global level.

load("c4365df5d26d38e85948dfb3d05e4de0.js");
assert(foo === 20);
let threw = false;
try {
    load("5ca25d2d7a805782d17d24ca86625295.js"); // Redeclaration a 'let' variable should throw because this doesn't break backwards compat.
} catch(e) {
    threw = true;
}

assert(threw);
assert(foo === 20);
