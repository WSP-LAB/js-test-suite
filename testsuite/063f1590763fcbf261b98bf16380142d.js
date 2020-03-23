load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| slow
gczeal(9, 1)
for (var a = 0; a < 1; a++) {
    newGlobal({
        sameZoneAs: {}
    })
}
