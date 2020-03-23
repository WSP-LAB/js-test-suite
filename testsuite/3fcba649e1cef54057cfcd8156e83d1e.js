load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.Echo("abc".replace(/(b)/, "$1"));
WScript.Echo("abc".replace(/(b)/, "$01"));
WScript.Echo("abc".replace(/(b)/, "$00"));
WScript.Echo("abc".replace(/(b)/, "$0"));