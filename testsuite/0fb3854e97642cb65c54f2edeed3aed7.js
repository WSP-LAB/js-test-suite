load("201224b0d1c296b45befd2285e95dd42.js");
// setSavedStacksRNGState shouldn't crash regardless of the seed value passed.

setSavedStacksRNGState(0);
setSavedStacksRNGState({});
setSavedStacksRNGState(false);
setSavedStacksRNGState(NaN);
