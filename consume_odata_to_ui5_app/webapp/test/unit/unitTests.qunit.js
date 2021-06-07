/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ODATATOUI5/consume_odata_to_ui5_app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
