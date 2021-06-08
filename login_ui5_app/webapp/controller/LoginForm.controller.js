sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("LOGINUI5APP.loginui5app.controller.LoginForm", {
			onInit: function () {

            },
        checkDetails:function(){
			var uname = this.getView().byId("idIUname").getValue();
			var pwd = this.getView().byId("idIPwd").getValue();
			if ( uname=="" || pwd=="" )
			{
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show("Both input fields are mandatory",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Validation Failed",
					actions : [sap.m.MessageBox.Action.OK]
				});
			}
			else
			{ if (uname=="admin@gmail.com" && pwd=="admin@123")
				{
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show("Login successful",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Validation Success",
					actions : [sap.m.MessageBox.Action.OK]
					});
					var oApp = this.getView().getParent();
					oApp.to("idApp--idSplitApp");
				}
			}
		}
	});
});
