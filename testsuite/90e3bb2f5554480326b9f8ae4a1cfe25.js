load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var passed = true;
try { eval('const x;'); } catch (e) { if (e.message != "Const must be initialized") { passed = false; } }
try { eval('function a() { const x; }'); } catch (e) { if (e.message != "Const must be initialized") { passed = false; } }
WScript.LoadScriptFile("6f7505e04999665ac03e92d2715e2432.js");
try { test1(); } catch (e) { if (e.message != "Const must be initialized") { passed = false; }}
WScript.LoadScriptFile("b51b40fde78b79706ac9b036b6e004b2.js");
try { test2(); } catch (e) { if (e.message != "Const must be initialized") { passed = false; }}

if (passed) {
    print('Pass');
}
else {
    print('Fail');
}
