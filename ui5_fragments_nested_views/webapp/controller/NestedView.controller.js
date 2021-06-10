sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("UI5FRAGNESTVIEW.ui5fragmentsnestedviews.controller.NestedView", {
			onInit: function () {

            },
            onPressSecView: function() {
        sap.ui.core.UIComponent.getRouterFor(this).navTo("secondPage");
            }
		});
	});
