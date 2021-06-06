/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"READJSONTOUI5/consume_json_to_ui5_app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
