"use strict";sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","./model/models","sap/m/IllustrationPool","sap/ui/core/IconPool"],function(t,e,s,i,n){"use strict";function o(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const a=e["support"];const c=o(s);const l=t.extend("recap.capadvancedprogrammingmodel.Component",{metadata:{manifest:"json"},init:function e(){t.prototype.init.call(this);this.setModel(c.createDeviceModel(),"device");this.getRouter().initialize();n.registerFont({fontFamily:"SAP-icons-TNT",fontURI:sap.ui.require.toUrl("sap/tnt/themes/base/fonts/")});i.registerIllustrationSet({setFamily:"tnt",setURI:sap.ui.require.toUrl("sap/tnt/themes/base/illustrations")},false)},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!a.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return l});
//# sourceMappingURL=Component.js.map