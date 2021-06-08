// Define the user defined component
jQuery.sap.declare("LOGINUI5APP.loginui5app.Component");

// Create the component and load the root view (App.view.xml)
	sap.ui.core.UIComponent.extend("LOGINUI5APP.loginui5app.Component", {
    createContent : function() {
		var oApp = sap.ui.view({
			id	: "idApp",
			viewName	: "LOGINUI5APP.loginui5app.view.App",
			type	: sap.ui.core.mvc.ViewType.XML
		});
        return oApp;
		},
});
