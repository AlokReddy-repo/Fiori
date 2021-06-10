/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"UI5FRAGNESTVIEW/ui5_fragments_nested_views/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
