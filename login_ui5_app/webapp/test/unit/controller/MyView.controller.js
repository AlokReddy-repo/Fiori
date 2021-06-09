/*global QUnit*/

sap.ui.define([
	"LOGINUI5APP/login_ui5_app/controller/MyView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MyView Controller");

	QUnit.test("I should test the MyView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
