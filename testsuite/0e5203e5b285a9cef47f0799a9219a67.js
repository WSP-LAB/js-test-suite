/* Lovingly generated by gen-spec-js.py based on the wonderful content of *
 * https://github.com/WebAssembly/spec/blob/master/interpreter/host/js.ml */
'use strict';

let soft_validate = true;

let spectest = {
  print: print || ((...xs) => console.log(...xs)),
  global: 666,
  table: new WebAssembly.Table({initial: 10, maximum: 20, element: 'anyfunc'}),
  memory: new WebAssembly.Memory({initial: 1, maximum: 2}),};

let registry = {spectest};
let $$;

function register(name, instance) {
  registry[name] = instance.exports;
}

function module(bytes) {
  let buffer = new ArrayBuffer(bytes.length);
  let view = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; ++i) {
    view[i] = bytes.charCodeAt(i);
  }
  return new WebAssembly.Module(buffer);
}

function instance(bytes, imports = registry) {
  return new WebAssembly.Instance(module(bytes), imports);
}

function assert_malformed(bytes) {
  try { module(bytes) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
  }
  throw new Error("Wasm decoding failure expected");
}

function assert_invalid(bytes) {
  try { module(bytes) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
  }
  throw new Error("Wasm validation failure expected");
}

function assert_soft_invalid(bytes) {
  try { module(bytes) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
    throw new Error("Wasm validation failure expected");
  }
  if (soft_validate)
    throw new Error("Wasm validation failure expected");
}

function assert_unlinkable(bytes) {
  let mod = module(bytes);
  try { new WebAssembly.Instance(mod, registry) } catch (e) {
    if (e instanceof TypeError) return;
  }
  throw new Error("Wasm linking failure expected");
}

function assert_uninstantiable(bytes) {
  let mod = module(bytes);
  try { new WebAssembly.Instance(mod, registry) } catch (e) {
    if (e instanceof WebAssembly.RuntimeError) return;
  }
  throw new Error("Wasm trap expected");
}

function assert_trap(action) {
  try { action() } catch (e) {
    if (e instanceof WebAssembly.RuntimeError) return;
  }
  throw new Error("Wasm trap expected");
}

function assert_return(action, expected) {
  let actual = action();
  if (!Object.is(actual, expected)) {
    throw new Error("Wasm return value " + expected + " expected, got " + actual);
  };
}

function assert_return_nan(action) {
  let actual = action();
  if (!Number.isNaN(actual)) {
    throw new Error("Wasm return value NaN expected, got " + actual);
  };
}

let f32 = Math.fround;

assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x06\x01\x04\x00\x45\x1a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0b\x01\x09\x00\x41\x00\x02\x40\x45\x1a\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0b\x01\x09\x00\x41\x00\x03\x40\x45\x1a\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0d\x01\x0b\x00\x41\x00\x41\x00\x04\x40\x45\x1a\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x41\x00\x41\x00\x04\x7f\x41\x00\x05\x45\x0b\x1a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x06\x01\x04\x00\x6a\x1a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x08\x01\x06\x00\x41\x00\x6a\x1a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0d\x01\x0b\x00\x41\x00\x41\x00\x02\x40\x6a\x1a\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0d\x01\x0b\x00\x41\x00\x02\x40\x41\x00\x6a\x1a\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0d\x01\x0b\x00\x41\x00\x41\x00\x03\x40\x6a\x1a\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0d\x01\x0b\x00\x41\x00\x03\x40\x41\x00\x6a\x1a\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0f\x01\x0d\x00\x41\x00\x41\x00\x41\x00\x6a\x04\x40\x1a\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x41\x00\x41\x00\x41\x00\x04\x40\x6a\x05\x1a\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x15\x01\x13\x00\x41\x00\x41\x00\x41\x00\x04\x7f\x41\x00\x05\x6a\x41\x00\x0b\x1a\x1a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x41\x00\x41\x00\x04\x7f\x41\x00\x05\x6a\x0b\x1a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x04\x40\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x02\x40\x04\x40\x0b\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x03\x40\x04\x40\x0b\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0e\x01\x0c\x00\x41\x00\x41\x00\x04\x40\x04\x40\x0b\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x14\x01\x12\x00\x41\x00\x41\x00\x04\x7f\x41\x00\x05\x04\x40\x0b\x41\x00\x0b\x1a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0b\x01\x09\x00\x02\x7f\x0c\x00\x0b\x45\x1a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0d\x01\x0b\x00\x41\x00\x02\x7f\x0c\x00\x0b\x45\x1a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x12\x01\x10\x00\x02\x40\x41\x00\x41\x00\x04\x7f\x0c\x00\x0b\x0b\x45\x1a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x15\x01\x13\x00\x02\x40\x41\x00\x41\x00\x04\x7f\x41\x00\x05\x0c\x00\x0b\x0b\x45\x1a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x05\x01\x60\x00\x01\x7f\x03\x02\x01\x00\x0a\x05\x01\x03\x00\x0f\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x05\x01\x60\x00\x01\x7f\x03\x02\x01\x00\x0a\x0a\x01\x08\x00\x41\x00\x02\x40\x0f\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x05\x01\x60\x00\x01\x7f\x03\x02\x01\x00\x0a\x0a\x01\x08\x00\x41\x00\x03\x40\x0f\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x05\x01\x60\x00\x01\x7f\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x41\x00\x04\x40\x0f\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x05\x01\x60\x00\x01\x7f\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x41\x00\x41\x00\x04\x7f\x41\x00\x05\x0f\x0b\x1a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0f\x01\x0d\x00\x43\x00\x00\x00\x00\x04\x40\x01\x05\x01\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0e\x01\x0c\x00\x02\x40\x43\x00\x00\x00\x00\x0d\x00\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0f\x01\x0d\x00\x02\x40\x43\x00\x00\x00\x00\x0e\x00\x00\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x08\x02\x60\x01\x7f\x00\x60\x00\x00\x03\x03\x02\x00\x01\x0a\x0e\x02\x02\x00\x0b\x09\x00\x43\x00\x00\x00\x00\x10\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x08\x02\x60\x01\x7f\x00\x60\x00\x00\x03\x03\x02\x00\x01\x04\x04\x01\x70\x00\x00\x0a\x11\x02\x02\x00\x0b\x0c\x00\x41\x00\x43\x00\x00\x00\x00\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x03\x02\x00\x00\x04\x04\x01\x70\x00\x00\x0a\x0f\x02\x02\x00\x0b\x0a\x00\x43\x00\x00\x00\x00\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x05\x01\x60\x00\x01\x7f\x03\x02\x01\x00\x0a\x0a\x01\x08\x00\x43\x00\x00\x00\x00\x0f\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0d\x01\x0b\x01\x01\x7f\x43\x00\x00\x00\x00\x21\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x28\x02\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x2c\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x2d\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x2e\x01\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x2f\x01\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x29\x03\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x30\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x31\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x32\x01\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x33\x01\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x34\x02\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x35\x02\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x2a\x02\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0c\x01\x0a\x00\x43\x00\x00\x00\x00\x2b\x03\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0e\x01\x0c\x00\x43\x00\x00\x00\x00\x41\x00\x36\x02\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0e\x01\x0c\x00\x43\x00\x00\x00\x00\x41\x00\x3a\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0e\x01\x0c\x00\x43\x00\x00\x00\x00\x41\x00\x3b\x01\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0e\x01\x0c\x00\x43\x00\x00\x00\x00\x41\x00\x37\x03\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0e\x01\x0c\x00\x43\x00\x00\x00\x00\x42\x00\x3c\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0e\x01\x0c\x00\x43\x00\x00\x00\x00\x42\x00\x3d\x01\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0e\x01\x0c\x00\x43\x00\x00\x00\x00\x42\x00\x3e\x02\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x00\x43\x00\x00\x00\x00\x43\x00\x00\x00\x00\x38\x02\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x15\x01\x13\x00\x43\x00\x00\x00\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x39\x03\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0e\x01\x0c\x00\x41\x00\x43\x00\x00\x00\x00\x36\x02\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0e\x01\x0c\x00\x41\x00\x43\x00\x00\x00\x00\x3a\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0e\x01\x0c\x00\x41\x00\x43\x00\x00\x00\x00\x3b\x01\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0e\x01\x0c\x00\x41\x00\x43\x00\x00\x00\x00\x37\x03\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x12\x01\x10\x00\x41\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x3c\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x12\x01\x10\x00\x41\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x3d\x01\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x12\x01\x10\x00\x41\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x3e\x02\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0b\x01\x09\x00\x41\x00\x41\x00\x38\x02\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0b\x01\x09\x00\x41\x00\x42\x00\x39\x03\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x6a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x71\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x6d\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x6e\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x6c\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x72\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x6f\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x70\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x77\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x78\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x74\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x75\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x76\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x6b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x73\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x7c\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x83\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x7f\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x80\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x7e\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x84\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x81\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x82\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x89\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x8a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x86\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x87\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x88\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x7d\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x85\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x92\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x98\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x95\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x97\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x96\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x94\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x93\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\xa0\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\xa6\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\xa3\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\xa5\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\xa4\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\xa2\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\xa1\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x45\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x67\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x68\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x69\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\x50\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\x79\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\x7a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\x7b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x8b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x8d\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x8e\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x90\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x8c\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x91\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x8f\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x99\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x9b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x9c\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x9e\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x9a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x9f\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\x9d\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x46\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x4e\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x4f\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x4a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x4b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x4c\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x4d\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x48\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x49\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x47\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x51\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x59\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x5a\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x55\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x56\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x57\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x58\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x53\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x54\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x41\x00\x43\x00\x00\x00\x00\x52\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x5b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x60\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x5e\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x5f\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x5d\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x10\x01\x0e\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x5c\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x61\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x66\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x64\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x65\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x63\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x42\x00\x43\x00\x00\x00\x00\x62\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0a\x01\x08\x00\x43\x00\x00\x00\x00\xa7\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\xa8\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\xa9\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\xaa\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\xab\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\xbc\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0a\x01\x08\x00\x43\x00\x00\x00\x00\xac\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0a\x01\x08\x00\x43\x00\x00\x00\x00\xad\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\xae\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\xaf\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\xb0\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\xb1\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\xbd\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\xb2\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\xb3\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\xb4\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\xb5\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\xb6\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\xbe\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\xb7\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x42\x00\xb8\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\xb9\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\xba\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\xbb\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x41\x00\xbf\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x0b\x01\x09\x00\x43\x00\x00\x00\x00\x40\x00\x0b");