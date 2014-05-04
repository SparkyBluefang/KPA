/*
 * ***** BEGIN LICENSE BLOCK *****
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * 
 * Copyright (C) 2014 Matthew Turnbull <sparky@bluefang-logic.com>. All Rights Reserved.
 * 
 * ***** END LICENSE BLOCK *****
*/

"use strict";

const EXPORTED_SYMBOLS = ["KillPanelAnim"];

const CC = Components.classes;
const CI = Components.interfaces;
const CU = Components.utils;

CU.import("resource://gre/modules/Services.jsm");

function KillPanelAnim(window, gBrowser, toolbox)
{
	this._window = window;
}

KillPanelAnim.prototype =
{
	_window:  null,

	setup: function()
	{
		this._window.addEventListener("unload", this, false);
		Services.prefs.addObserver("browser.panels.animate", this, false);

		this.update();
	},

	destroy: function()
	{
		this._window.removeEventListener("unload", this, false);
		Services.prefs.removeObserver("browser.panels.animate", this);

		["_window"].forEach(function(prop)
		{
			delete this[prop];
		}, this);
	},

	handleEvent: function(aEvent)
	{
		switch(aEvent.type)
		{
			case "unload":
				this.destroy();
				break;
		}
	},

	observe: function(aSubject, aTopic, aData)
	{
		if(aTopic != "nsPref:changed" || aData != "browser.panels.animate")
		{
			return;
		}

		this.update();
	},

	update: function()
	{
		let bookmarksButton = this._window.document.getElementById("bookmarks-menu-button");
		if(!bookmarksButton)
		{
			return;
		}

		if(Services.prefs.getBoolPref("browser.panels.animate"))
		{
			bookmarksButton.removeAttribute("animate");
		}
		else
		{
			bookmarksButton.setAttribute("animate", "false");
		}
	}
};

