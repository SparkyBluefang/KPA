/*
 * ***** BEGIN LICENSE BLOCK *****
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * 
 * Original code copyright (C) Mozilla Foundation. All Rights Reserved.
 * Copyright (C) 2014 Matthew Turnbull <sparky@bluefang-logic.com>. All Rights Reserved.
 * 
 * ***** END LICENSE BLOCK *****
*/

if(!caligon) var caligon = {};

window.addEventListener("load", function buildKillPanelAnim()
{
	window.removeEventListener("load", buildKillPanelAnim, false);

	Components.utils.import("resource://killpanelanim/KillPanelAnim.jsm");

	caligon.kpa = new KillPanelAnim(window);
	caligon.kpa.setup();
}, false);

