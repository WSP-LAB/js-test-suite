load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("60699afe5b794b4c3e7c5edd87eb4d83.js");
load("a1db3b7323a3f125b6dd2e35c6c5707b.js");
/* -*- Mode: java; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Rhino code, released
 * May 6, 1999.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1997-2000
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Igor Bukanov
 *   Ethan Hugg
 *   Milen Nankov
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

gTestfile = '13.5.1.js';

START("13.5.1 - XMLList Constructor as Function");

x = XMLList();

TEST(1, "xml", typeof(x));  
TEST(2, true, x instanceof XMLList);

// Make sure it's not copied if it's an XMLList
x =
<>
    <alpha>one</alpha>
    <bravo>two</bravo>
</>;

y = XMLList(x);
TEST(3, x === y, true);

x += <charlie>three</charlie>;
TEST(4, x === y, false);

// Load from one XML type
x = XMLList(<alpha>one</alpha>);
TEST_XML(5, "<alpha>one</alpha>", x);

// Load from Anonymous
x = XMLList(<><alpha>one</alpha><bravo>two</bravo></>);
correct = new XMLList();
correct += <alpha>one</alpha>;
correct += <bravo>two</bravo>;
TEST_XML(6, correct.toString(), x);

// Load from Anonymous as string
x = XMLList(<><alpha>one</alpha><bravo>two</bravo></>);
correct = new XMLList();
correct += <alpha>one</alpha>;
correct += <bravo>two</bravo>;
TEST_XML(7, correct.toString(), x);

// Load from single textnode
x = XMLList("foobar");
TEST_XML(8, "foobar", x);

x = XMLList(7);
TEST_XML(9, "7", x);

// Undefined and null should behave like ""
x = XMLList(null);
TEST_XML(10, "", x);

x = XMLList(undefined);
TEST_XML(11, "", x);

END();