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

$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x59\x12\x60\x00\x00\x60\x00\x01\x7f\x60\x00\x01\x7e\x60\x00\x01\x7d\x60\x00\x01\x7c\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x60\x02\x7d\x7f\x01\x7f\x60\x02\x7f\x7e\x01\x7e\x60\x02\x7c\x7d\x01\x7d\x60\x02\x7e\x7c\x01\x7c\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x60\x01\x7f\x01\x7e\x03\x42\x41\x01\x02\x03\x04\x05\x06\x07\x08\x0a\x0c\x09\x0b\x0d\x0e\x0f\x10\x01\x02\x03\x04\x02\x01\x02\x03\x04\x01\x02\x03\x04\x0a\x11\x06\x06\x05\x05\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x05\x01\x70\x01\x17\x17\x07\xd5\x04\x30\x08\x74\x79\x70\x65\x2d\x69\x33\x32\x00\x10\x08\x74\x79\x70\x65\x2d\x69\x36\x34\x00\x11\x08\x74\x79\x70\x65\x2d\x66\x33\x32\x00\x12\x08\x74\x79\x70\x65\x2d\x66\x36\x34\x00\x13\x0a\x74\x79\x70\x65\x2d\x69\x6e\x64\x65\x78\x00\x14\x0e\x74\x79\x70\x65\x2d\x66\x69\x72\x73\x74\x2d\x69\x33\x32\x00\x15\x0e\x74\x79\x70\x65\x2d\x66\x69\x72\x73\x74\x2d\x69\x36\x34\x00\x16\x0e\x74\x79\x70\x65\x2d\x66\x69\x72\x73\x74\x2d\x66\x33\x32\x00\x17\x0e\x74\x79\x70\x65\x2d\x66\x69\x72\x73\x74\x2d\x66\x36\x34\x00\x18\x0f\x74\x79\x70\x65\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x69\x33\x32\x00\x19\x0f\x74\x79\x70\x65\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x69\x36\x34\x00\x1a\x0f\x74\x79\x70\x65\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x66\x33\x32\x00\x1b\x0f\x74\x79\x70\x65\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x66\x36\x34\x00\x1c\x08\x64\x69\x73\x70\x61\x74\x63\x68\x00\x1d\x13\x64\x69\x73\x70\x61\x74\x63\x68\x2d\x73\x74\x72\x75\x63\x74\x75\x72\x61\x6c\x00\x1e\x03\x66\x61\x63\x00\x1f\x03\x66\x69\x62\x00\x20\x04\x65\x76\x65\x6e\x00\x21\x03\x6f\x64\x64\x00\x22\x07\x72\x75\x6e\x61\x77\x61\x79\x00\x23\x0e\x6d\x75\x74\x75\x61\x6c\x2d\x72\x75\x6e\x61\x77\x61\x79\x00\x24\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x26\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x27\x08\x61\x73\x73\x65\x72\x74\x5f\x32\x00\x28\x08\x61\x73\x73\x65\x72\x74\x5f\x33\x00\x29\x08\x61\x73\x73\x65\x72\x74\x5f\x34\x00\x2a\x08\x61\x73\x73\x65\x72\x74\x5f\x35\x00\x2b\x08\x61\x73\x73\x65\x72\x74\x5f\x36\x00\x2c\x08\x61\x73\x73\x65\x72\x74\x5f\x37\x00\x2d\x08\x61\x73\x73\x65\x72\x74\x5f\x38\x00\x2e\x08\x61\x73\x73\x65\x72\x74\x5f\x39\x00\x2f\x09\x61\x73\x73\x65\x72\x74\x5f\x31\x30\x00\x30\x09\x61\x73\x73\x65\x72\x74\x5f\x31\x31\x00\x31\x09\x61\x73\x73\x65\x72\x74\x5f\x31\x32\x00\x32\x09\x61\x73\x73\x65\x72\x74\x5f\x31\x33\x00\x33\x09\x61\x73\x73\x65\x72\x74\x5f\x31\x34\x00\x34\x09\x61\x73\x73\x65\x72\x74\x5f\x31\x35\x00\x35\x09\x61\x73\x73\x65\x72\x74\x5f\x31\x36\x00\x36\x09\x61\x73\x73\x65\x72\x74\x5f\x31\x37\x00\x37\x09\x61\x73\x73\x65\x72\x74\x5f\x31\x38\x00\x38\x09\x61\x73\x73\x65\x72\x74\x5f\x31\x39\x00\x39\x09\x61\x73\x73\x65\x72\x74\x5f\x32\x30\x00\x3a\x09\x61\x73\x73\x65\x72\x74\x5f\x32\x31\x00\x3b\x09\x61\x73\x73\x65\x72\x74\x5f\x32\x32\x00\x3c\x09\x61\x73\x73\x65\x72\x74\x5f\x32\x33\x00\x3d\x09\x61\x73\x73\x65\x72\x74\x5f\x32\x34\x00\x3e\x09\x61\x73\x73\x65\x72\x74\x5f\x32\x35\x00\x3f\x09\x61\x73\x73\x65\x72\x74\x5f\x32\x36\x00\x40\x09\x1d\x01\x00\x41\x00\x0b\x17\x00\x01\x02\x03\x04\x05\x06\x07\x0a\x08\x0b\x09\x1f\x20\x21\x22\x23\x24\x25\x0c\x0d\x0e\x0f\x0a\xf2\x06\x41\x05\x00\x41\xb2\x02\x0b\x05\x00\x42\xe4\x02\x0b\x07\x00\x43\x00\x20\x73\x45\x0b\x0b\x00\x44\x00\x00\x00\x00\x00\xc8\xae\x40\x0b\x04\x00\x20\x00\x0b\x04\x00\x20\x00\x0b\x04\x00\x20\x00\x0b\x04\x00\x20\x00\x0b\x04\x00\x20\x01\x0b\x04\x00\x20\x01\x0b\x04\x00\x20\x01\x0b\x04\x00\x20\x01\x0b\x04\x00\x20\x00\x0b\x04\x00\x20\x00\x0b\x04\x00\x20\x00\x0b\x04\x00\x20\x00\x0b\x07\x00\x41\x00\x11\x01\x00\x0b\x07\x00\x41\x01\x11\x02\x00\x0b\x07\x00\x41\x02\x11\x03\x00\x0b\x07\x00\x41\x03\x11\x04\x00\x0b\x0a\x00\x42\xe4\x00\x41\x05\x11\x06\x00\x0b\x09\x00\x41\x20\x41\x04\x11\x05\x00\x0b\x0a\x00\x42\xc0\x00\x41\x05\x11\x06\x00\x0b\x0c\x00\x43\xc3\xf5\xa8\x3f\x41\x06\x11\x07\x00\x0b\x10\x00\x44\x3d\x0a\xd7\xa3\x70\x3d\xfa\x3f\x41\x07\x11\x08\x00\x0b\x0e\x00\x43\x66\x66\x00\x42\x41\x20\x41\x08\x11\x09\x00\x0b\x0c\x00\x41\x20\x42\xc0\x00\x41\x09\x11\x0a\x00\x0b\x15\x00\x44\x00\x00\x00\x00\x00\x00\x50\x40\x43\x00\x00\x00\x42\x41\x0a\x11\x0b\x00\x0b\x13\x00\x42\xc0\x00\x44\x66\x66\x66\x66\x66\x06\x50\x40\x41\x0b\x11\x0c\x00\x0b\x09\x00\x20\x01\x20\x00\x11\x06\x00\x0b\x09\x00\x42\x09\x20\x00\x11\x0e\x00\x0b\x18\x00\x20\x00\x50\x04\x7e\x42\x01\x05\x20\x00\x20\x00\x42\x01\x7d\x41\x0c\x11\x06\x00\x7e\x0b\x0b\x22\x00\x20\x00\x42\x01\x58\x04\x7e\x42\x01\x05\x20\x00\x42\x02\x7d\x41\x0d\x11\x06\x00\x20\x00\x42\x01\x7d\x41\x0d\x11\x06\x00\x7c\x0b\x0b\x15\x00\x20\x00\x45\x04\x7f\x41\x2c\x05\x20\x00\x41\x01\x6b\x41\x0f\x11\x05\x00\x0b\x0b\x16\x00\x20\x00\x45\x04\x7f\x41\xe3\x00\x05\x20\x00\x41\x01\x6b\x41\x0e\x11\x05\x00\x0b\x0b\x07\x00\x41\x10\x11\x00\x00\x0b\x07\x00\x41\x12\x11\x00\x00\x0b\x07\x00\x41\x11\x11\x00\x00\x0b\x10\x00\x02\x40\x10\x11\x42\xe4\x02\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x10\x00\x02\x40\x10\x14\x42\xe4\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x10\x00\x02\x40\x10\x16\x42\xc0\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x10\x00\x02\x40\x10\x1a\x42\xc0\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x13\x00\x02\x40\x41\x05\x42\x02\x10\x1d\x42\x02\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x13\x00\x02\x40\x41\x05\x42\x05\x10\x1d\x42\x05\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x14\x00\x02\x40\x41\x0c\x42\x05\x10\x1d\x42\xf8\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x13\x00\x02\x40\x41\x0d\x42\x05\x10\x1d\x42\x08\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x13\x00\x02\x40\x41\x14\x42\x02\x10\x1d\x42\x02\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x0a\x00\x41\x00\x42\x02\x10\x1d\x0c\x00\x0b\x0a\x00\x41\x0f\x42\x02\x10\x1d\x0c\x00\x0b\x0a\x00\x41\x17\x42\x02\x10\x1d\x0c\x00\x0b\x0a\x00\x41\x7f\x42\x02\x10\x1d\x0c\x00\x0b\x0e\x00\x41\xe7\x84\xce\xc2\x04\x42\x02\x10\x1d\x0c\x00\x0b\x11\x00\x02\x40\x41\x05\x10\x1e\x42\x09\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x41\x05\x10\x1e\x42\x09\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x13\x00\x02\x40\x41\x0c\x10\x1e\x42\x80\x93\x16\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x41\x14\x10\x1e\x42\x09\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x00\x10\x1f\x42\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x01\x10\x1f\x42\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x12\x00\x02\x40\x42\x05\x10\x1f\x42\xf8\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x1a\x00\x02\x40\x42\x19\x10\x1f\x42\x80\x80\x80\xde\x87\x92\xec\xcf\xe1\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x00\x10\x20\x42\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x01\x10\x20\x42\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x02\x10\x20\x42\x02\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x05\x10\x20\x42\x08\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x13\x00\x02\x40\x42\x14\x10\x20\x42\xc2\xd5\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["type-i32"](), 306);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["type-f32"](), f32(3890.0));
assert_return(() => $$.exports["type-f64"](), 3940.0);
assert_return(() => $$.exports["assert_1"]());
assert_return(() => $$.exports["type-first-i32"](), 32);
assert_return(() => $$.exports["assert_2"]());
assert_return(() => $$.exports["type-first-f32"](), f32(1.32000005245));
assert_return(() => $$.exports["type-first-f64"](), 1.64);
assert_return(() => $$.exports["type-second-i32"](), 32);
assert_return(() => $$.exports["assert_3"]());
assert_return(() => $$.exports["type-second-f32"](), f32(32.0));
assert_return(() => $$.exports["type-second-f64"](), 64.1);
assert_return(() => $$.exports["assert_4"]());
assert_return(() => $$.exports["assert_5"]());
assert_return(() => $$.exports["assert_6"]());
assert_return(() => $$.exports["assert_7"]());
assert_return(() => $$.exports["assert_8"]());
assert_trap(() => $$.exports["assert_9"]());
assert_trap(() => $$.exports["assert_10"]());
assert_trap(() => $$.exports["assert_11"]());
assert_trap(() => $$.exports["assert_12"]());
assert_trap(() => $$.exports["assert_13"]());
assert_return(() => $$.exports["assert_14"]());
assert_return(() => $$.exports["assert_15"]());
assert_return(() => $$.exports["assert_16"]());
assert_return(() => $$.exports["assert_17"]());
assert_trap(() => $$.exports["dispatch-structural"](11));
assert_trap(() => $$.exports["dispatch-structural"](22));
assert_return(() => $$.exports["assert_18"]());
assert_return(() => $$.exports["assert_19"]());
assert_return(() => $$.exports["assert_20"]());
assert_return(() => $$.exports["assert_21"]());
assert_return(() => $$.exports["assert_22"]());
assert_return(() => $$.exports["assert_23"]());
assert_return(() => $$.exports["assert_24"]());
assert_return(() => $$.exports["assert_25"]());
assert_return(() => $$.exports["assert_26"]());
assert_return(() => $$.exports["even"](0), 44);
assert_return(() => $$.exports["even"](1), 99);
assert_return(() => $$.exports["even"](100), 44);
assert_return(() => $$.exports["even"](77), 99);
assert_return(() => $$.exports["odd"](0), 99);
assert_return(() => $$.exports["odd"](1), 44);
assert_return(() => $$.exports["odd"](200), 99);
assert_return(() => $$.exports["odd"](77), 44);
assert_trap(() => $$.exports["runaway"]());
assert_trap(() => $$.exports["mutual-runaway"]());
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x09\x01\x07\x00\x41\x00\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x0a\x01\x08\x00\x41\x00\x11\x00\x00\x45\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x08\x02\x60\x00\x01\x7e\x60\x00\x00\x03\x02\x01\x01\x04\x04\x01\x70\x00\x00\x0a\x0a\x01\x08\x00\x41\x00\x11\x00\x00\x45\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x08\x02\x60\x01\x7f\x00\x60\x00\x00\x03\x02\x01\x01\x04\x04\x01\x70\x00\x00\x0a\x09\x01\x07\x00\x41\x00\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x09\x02\x60\x02\x7c\x7f\x00\x60\x00\x00\x03\x02\x01\x01\x04\x04\x01\x70\x00\x00\x0a\x09\x01\x07\x00\x41\x00\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x0b\x01\x09\x00\x41\x01\x41\x00\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x14\x01\x12\x00\x44\x00\x00\x00\x00\x00\x00\x00\x40\x41\x01\x41\x00\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x08\x02\x60\x01\x7f\x00\x60\x00\x00\x03\x02\x01\x01\x04\x04\x01\x70\x00\x00\x0a\x0a\x01\x08\x00\x41\x01\x01\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x08\x02\x60\x01\x7f\x00\x60\x00\x00\x03\x02\x01\x01\x04\x04\x01\x70\x00\x00\x0a\x0b\x01\x09\x00\x41\x00\x42\x01\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x09\x02\x60\x02\x7f\x7f\x00\x60\x00\x00\x03\x02\x01\x01\x04\x04\x01\x70\x00\x00\x0a\x0c\x01\x0a\x00\x01\x41\x01\x41\x00\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x09\x02\x60\x02\x7f\x7f\x00\x60\x00\x00\x03\x02\x01\x01\x04\x04\x01\x70\x00\x00\x0a\x0c\x01\x0a\x00\x41\x01\x01\x41\x00\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x09\x02\x60\x02\x7f\x7c\x00\x60\x00\x00\x03\x02\x01\x01\x04\x04\x01\x70\x00\x00\x0a\x14\x01\x12\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x41\x01\x41\x00\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x09\x02\x60\x02\x7c\x7f\x00\x60\x00\x00\x03\x02\x01\x01\x04\x04\x01\x70\x00\x00\x0a\x14\x01\x12\x00\x41\x01\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x41\x00\x11\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x09\x01\x07\x00\x41\x00\x11\x01\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x0d\x01\x0b\x00\x41\x00\x11\x94\x98\xdb\xe2\x03\x00\x0b");