load("01487b5e26e41bde4c1e25d129c62c2d.js");
load("fcab22158355653e147edca3e3d42e56.js");
/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * The contents of this file are subject to the Netscape Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/NPL/
 *
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 *
 * The Original Code is Mozilla Communicator client code, released March
 * 31, 1998.
 *
 * The Initial Developer of the Original Code is Netscape Communications
 * Corporation. Portions created by Netscape are
 * Copyright (C) 1998 Netscape Communications Corporation. All
 * Rights Reserved.
 *
 * Contributor(s): 
 * Rob Ginda rginda@netscape.com
 */

test();

function test()
{    
    enterFunc ("test");

    printBugNumber (24712);
    
    var re = /([\S]+([ \t]+[\S]+)*)[ \t]*=[ \t]*[\S]+/;
    var result = re.exec("Course_Creator = Test");

    if (!result)
        reportFailure ("exec() returned null.");
    
    exitFunc ("test");
    
}

