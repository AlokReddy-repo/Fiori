/*global QUnit*/

sap.ui.define([
	"READJSONTOUI5/consume_json_to_ui5_app/controller/MyView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MyView Controller");

	QUnit.test("I should test the MyView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
