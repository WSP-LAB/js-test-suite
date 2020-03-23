load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

wasmEvalText(`(module
  (type $type0 (func (param i32)))
  (func $f (param $p i32)
    (local $x i32) (local $y i32)
    loop $top
      get_local $x
      get_local $p
      get_local $x
      br_if $top
      i32.const 1
      tee_local $p
      get_local $y
      set_local $x
      i32.add
      call $f
      br_if $top
      return
    end
  )
)`);
