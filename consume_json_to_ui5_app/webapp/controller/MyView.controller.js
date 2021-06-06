sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("READJSONTOUI5.consumejsontoui5app.controller.MyView", {
			onInit: function () {
var oJSONModel = new sap.ui.model.json.JSONModel("model/emp.json");
 this.getView().setModel(oJSONModel,"JSN");
 var oResModel = new sap.ui.model.resource.ResourceModel({
 bundleName : "i18n.emp",
 bundleLocale : "de"
 });
 /* var oLangu=sap.ui.getCore().getConfiguration().getLanguage();
 var oResModel = new sap.ui.model.resource.ResourceModel({
 bundleName : "i18n.emp",
 bundleLocale : oLangu
 });*/
 this.getView().setModel(oResModel,"RES");
 }
});
});