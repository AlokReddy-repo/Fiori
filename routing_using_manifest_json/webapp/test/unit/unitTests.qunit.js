/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ROUTINGMANIFEST/routing_using_manifest_json/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
