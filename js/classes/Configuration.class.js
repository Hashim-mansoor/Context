function Configuration() {
	"use strict";
	var constants = {
		iconsPath: 'icons/dortmund/',
		icons: ['home', 'search', 'world', 'heart', 'lightbulb', 'basket', 'customers', 'hire-me', 'administrative-docs', 'comment', 'config', 'finished-work', 'settings', 'star'],
		extensionName: 'Context',
		configBackupFormatVersion: 1
	};

	var defaults = {
		appsSupport: 'false',
		extensionEnableDelay: 200,//ms
		showLoadAllBtn: 'true',
		newExtensionAction: 'ask',
		firstRun: 'yes',
		highlightUngroupedExtensions: 'false'
	};

	this.get = function(name) {
		return constants[name] || localStorage[name] || defaults[name] || null;
	};
}

var CONFIG = new Configuration();