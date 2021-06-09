sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("LOGINUI5APP.loginui5app.controller.Master", {
		onInit: function () {

            },
            
        gotoPersonal:function(){
			var oApp = this.getView().getParent().getParent();
			oApp.toDetail("idApp--idSplitApp--idPersonal","flip");
		},
		gotoExperience:function(){
			var oApp = this.getView().getParent().getParent();
			oApp.toDetail("idApp--idSplitApp--idExperience","flip");
		},
		gotoAddress:function(){
			var oApp = this.getView().getParent().getParent();
			oApp.toDetail("idApp--idSplitApp--idAddress","flip");
		},
		onNavBack:function(){
			window.location.href = "./index.html";
		}
		});
	});
