sap.ui.define([], () => {
	"use strict";

	return {
		statusText(sStatus) {
			const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

			switch (sStatus) {
				case "A":
					return oResourceBundle.getText("detailStatusA");
				case "B":
					return oResourceBundle.getText("detailStatusB");
				default:
					return sStatus;
			}
		}
	};
});
