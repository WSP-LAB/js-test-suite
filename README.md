# js-test-suite

This repository provides a collection of JS test suites from
[ChakraCore](https://github.com/Microsoft/ChakraCore),
[SpiderMonkey](https://github.com/mozilla/gecko-dev),
[V8](https://chromium.googlesource.com/v8/v8),
[JavaScriptCore](https://trac.webkit.org/browser/webkit), and
[Test262](https://github.com/tc39/test262) repositories. This set was used for
evaluation in our [paper](https://leeswimming.com/papers/lee-sec20.pdf),
"Montage: A Neural Network Language Model-Guided JavaScript Engine Fuzzer",
which appeared in USENIX Security 2020.

## Date of the collection
We collected JS files from each repository as of the following dates.

Repository | Date | Link
-----------|------|---
ChakraCore | January 30, 2017 | [link](https://github.com/Microsoft/ChakraCore/tree/8d87ac1eaeeb5b6eda312e55b8f90a2685ea3bc1)
SpiderMonkey | January 31, 2017 | [link](https://github.com/mozilla/gecko-dev/tree/5de2e3d5f6795f315a7e98319e4845e173b96ad8/js/src)
V8 | January 31, 2017 | [link](https://chromium.googlesource.com/v8/v8/+/d4c22c3084f55a0c0baf88362f7ef652a7dc450b)
JavaScriptCore | January 31, 2017 | [link](https://trac.webkit.org/browser/webkit/trunk?rev=211429)
Test262 | January 23, 2017 | [link](https://github.com/tc39/test262/tree/a8c0939bc3a3c431d34506451db11ea45e9376fd)

## Test harness files
The following paragraph is taken from Sec. 4.3 of the paper "Fuzzing with Code
Fragments", which is published in USENIX Security 2012.

To run JS tests, each JS test may need its proper test harness which contains
definitions required for the test. A good example is the SpiderMonkey's test
suite. The top level directory contains a file `shell.js` with definitions
required for all tests. Every subdirectory may contain an additional `shell.js`
with further definitions that might only be required for the tests in that
directory. To run a test, the JavaScript engine must execute all shell files in
the correct order, followed by the test itself.

We addressed this issue by inserting JS statements that load the required JS
harness for each file.

## How to deduplicate JS files
Please refer to [php-packer](https://github.com/tholu/php-packer) for removing
duplicate JS files.

## Acknowledgement
This work was done by Jihoon Kim while he was at
[SoftSec Lab](https://softsec.kaist.ac.kr), KAIST.
