//@ui5-bundle recap/capadvancedprogrammingmodel/Component-preload.js
sap.ui.require.preload({
	"recap/capadvancedprogrammingmodel/Component.js":function(){
"use strict";sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","./model/models","sap/m/IllustrationPool","sap/ui/core/IconPool"],function(t,e,s,i,n){"use strict";function o(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const a=e["support"];const c=o(s);const l=t.extend("recap.capadvancedprogrammingmodel.Component",{metadata:{manifest:"json"},init:function e(){t.prototype.init.call(this);this.setModel(c.createDeviceModel(),"device");this.getRouter().initialize();n.registerFont({fontFamily:"SAP-icons-TNT",fontURI:sap.ui.require.toUrl("sap/tnt/themes/base/fonts/")});i.registerIllustrationSet({setFamily:"tnt",setURI:sap.ui.require.toUrl("sap/tnt/themes/base/illustrations")},false)},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!a.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return l});
},
	"recap/capadvancedprogrammingmodel/controller/App.controller.js":function(){
"use strict";sap.ui.define(["./BaseController"],function(e){"use strict";function t(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const n=t(e);const o=n.extend("recap.capadvancedprogrammingmodel.controller.App",{onInit:function e(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}});return o});
},
	"recap/capadvancedprogrammingmodel/controller/BaseController.js":function(){
"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/ui/core/routing/History"],function(e,t,n){"use strict";const o=e.extend("recap.capadvancedprogrammingmodel.controller.BaseController",{getOwnerComponent:function t(){return e.prototype.getOwnerComponent.call(this)},getRouter:function e(){return t.getRouterFor(this)},getResourceBundle:function e(){const t=this.getOwnerComponent().getModel("i18n");return t.getResourceBundle()},getModel:function e(t){return this.getView().getModel(t)},setModel:function e(t,n){this.getView().setModel(t,n);return this},navTo:function e(t,n,o){this.getRouter().navTo(t,n,undefined,o)},onNavBack:function e(){const t=n.getInstance().getPreviousHash();if(t!==undefined){window.history.go(-1)}else{this.getRouter().navTo("main",{},undefined,true)}}});return o});
},
	"recap/capadvancedprogrammingmodel/controller/Main.controller.js":function(){
"use strict";sap.ui.define(["./BaseController","../model/formatter","sap/ui/model/json/JSONModel","sap/ui/core/Fragment"],function(e,t,o,n){"use strict";function a(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const s=a(e);const r=a(t);const i=s.extend("recap.capadvancedprogrammingmodel.controller.Main",{constructor:function e(){s.prototype.constructor.apply(this,arguments);this.formatter=r},onInit:function e(){this.getView().setModel(new o({speakers:[{initials:"DVV",name:"Dries Van Vaerenbergh",tooltip:"1",jobPosition:"Full stack SAP development consultant",src:"https://avatars.githubusercontent.com/u/32237030?v=4",fallbackIcon:"sap-icon://person-placeholder",company:"Flexso",scn:"https://people.sap.com/vvdries",github:"https://github.com/vvdries",twitter:"@vvdries"},{initials:"WL",name:"Wouter Lemaire",tooltip:"2",jobPosition:"SAP solution architect, developer & consultant ",src:"https://avatars.githubusercontent.com/u/5943183?v=4",fallbackIcon:"sap-icon://person-placeholder",company:"Independent Consultant",scn:"https://people.sap.com/wouter.lemaire",github:"https://github.com/lemaiwo",twitter:"@wouter_lemaire"},{initials:"GM",name:"Gert Mertens",tooltip:"3",jobPosition:"Full stack SAP development consultant",src:"https://avatars.githubusercontent.com/u/91686405?v=4",fallbackIcon:"sap-icon://person-placeholder",company:"Flexso",scn:"https://people.sap.com/mertensgert",github:"https://github.com/gertmertens92",twitter:""}]}));this.getView().setModel(new o,"speakerData")},navigate2ServicesApp:function e(){this.getRouter().navTo("btpServices")},onSpeakerSelect:async function e(t){const o=t.getParameter("eventSource");const a=this.getView();const s=o.getBindingContext().getObject();if(!this.speakerPopover){this.speakerPopover=await n.load({id:a.getId(),name:"recap.capadvancedprogrammingmodel.view.fragments.SpeakerPopover",controller:this});a.addDependent(this.speakerPopover)}this.getModel("speakerData").setData(this.getSpeaker(s,o));this.speakerPopover.openBy(o).addStyleClass("sapFAvatarGroupPopover")},getSpeaker:function e(t,o){return{src:t.src,initials:t.initials,fallbackIcon:t.fallbackIcon,backgroundColor:o.getAvatarColor(),name:t.name,jobPosition:t.jobPosition,company:t.company,scn:t.scn,github:t.github,twitter:t.twitter}}});return i});
},
	"recap/capadvancedprogrammingmodel/i18n/i18n.properties":'appTitle=capadvancedprogrammingmodel\nappDescription=UI5 Application capadvancedprogrammingmodel\nbtnText=Say Hello',
	"recap/capadvancedprogrammingmodel/i18n/i18n_de.properties":'appTitle=capadvancedprogrammingmodel\nappDescription=UI5 Application capadvancedprogrammingmodel\nbtnText=Sag Hallo',
	"recap/capadvancedprogrammingmodel/i18n/i18n_en.properties":'appTitle=capadvancedprogrammingmodel\nappDescription=UI5 Application capadvancedprogrammingmodel\nbtnText=Say Hello',
	"recap/capadvancedprogrammingmodel/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"recap.capadvancedprogrammingmodel","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"recap.capadvancedprogrammingmodel.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.114.0","libs":{"sap.ui.core":{},"sap.ui.layout":{},"sap.ui.unified":{},"sap.m":{}}},"handleValidation":true,"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"recap.capadvancedprogrammingmodel.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"recap.capadvancedprogrammingmodel.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"main","target":"main"},{"name":"btpServices","pattern":"btpServices","target":{"name":"btpServices","prefix":"tns"}}],"targets":{"main":{"viewId":"main","viewName":"Main"},"btpServices":{"type":"Component","usage":"btpServicesComponent"}}},"componentUsages":{"btpServicesComponent":{"name":"recap.capadvancedprogrammingmodel.btpservices","settings":{},"componentData":{},"lazy":false}}}}',
	"recap/capadvancedprogrammingmodel/model/formatter.js":function(){
"use strict";sap.ui.define([],function(){"use strict";var r={formatValue:r=>{if(!r){return""}try{return parseFloat(r).toFixed(2)}catch(t){return r}}};return r});
},
	"recap/capadvancedprogrammingmodel/model/models.js":function(){
"use strict";sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/model/BindingMode","sap/ui/Device"],function(e,i,n){"use strict";var s={createDeviceModel:()=>{const s=new e(n);s.setDefaultBindingMode(i.OneWay);return s}};return s});
},
	"recap/capadvancedprogrammingmodel/view/App.view.xml":'<mvc:View\n\tcontrollerName="recap.capadvancedprogrammingmodel.controller.App"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><App id="app" /></mvc:View>',
	"recap/capadvancedprogrammingmodel/view/Main.view.xml":'<mvc:View\n\tcontrollerName="recap.capadvancedprogrammingmodel.controller.Main"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:f="sap.f"\n\txmlns:core="sap.ui.core"\n\txmlns:mvc="sap.ui.core.mvc"><Page showHeader="false"><content><VBox justifyContent="Center" alignItems="Center" width="100%" height="100%"><Image src="../images/recap-2023-logo-small.png" width="10rem" class="sapUiTinyMarginBottom"/><Title text="» CAP Advanced Programming Model «" titleStyle="H1" class="fontSizeTitle"/><Title text="🕹️ re>≡CAP 2023 🕹️" titleStyle="H2" class="sapUiTinyMarginTop"/><f:AvatarGroup groupType="Individual" avatarDisplaySize="M" press="onSpeakerSelect" items="{path: \'/speakers\'}" class="sapUiSmallMarginTop"><f:AvatarGroupItem initials="{initials}" fallbackIcon="{fallbackIcon}" src="{src}" tooltip= "{initials}"/></f:AvatarGroup><HBox class="sapUiSmallMarginTop"><core:Icon src="sap-icon://SAP-icons-TNT/github" class="iconSize sapUiTinyMarginEnd"/><Link text="Repository" target="_blank" href="https://github.com/lemaiwo/BTPServiceOverview" class="fontSizeLink"/><core:Icon src="sap-icon://SAP-icons-TNT/github" class="iconSize sapUiTinyMarginBegin"/></HBox><Button text="BTP Services" class="sapUiSmallMarginTop fontSizeButton" press=".navigate2ServicesApp"/><IllustratedMessage illustrationType="tnt-Services" illustrationSize="Spot" enableDefaultTitleAndDescription="false" class="betweenSpotAndDot"/></VBox></content></Page></mvc:View>',
	"recap/capadvancedprogrammingmodel/view/fragments/Card.fragment.xml":'<core:FragmentDefinition\n\txmlns="sap.m"\n\txmlns:f="sap.f"\n\txmlns:core="sap.ui.core"\n\txmlns:l="sap.ui.layout"><f:Card><f:content><l:VerticalLayout class="sapUiContentPadding"><HBox alignItems="Center"><f:Avatar src="{speakerData>/src}"\n\t\t\t\t\t\t\tinitials="{speakerData>/initials}"\n\t\t\t\t\t\t\ttooltip="{speakerData>/initials}"\n\t\t\t\t\t\t\tfallbackIcon="{speakerData>/fallbackIcon}"\n\t\t\t\t\t\t\tbackgroundColor="{speakerData>/backgroundColor}" /><VBox class="sapUiTinyMarginBegin"><Title text="{speakerData>/name}" /><Text text="{speakerData>/jobPosition}" /></VBox></HBox><Label text="Company" visible="{= ${speakerData>/company} ? true : false}"/><Text text="{speakerData>/company}" visible="{= ${speakerData>/company} ? true : false}"/><Label text="SAP Community" visible="{= ${speakerData>/scn} ? true : false}"/><Link text="{speakerData>/scn}" href="{speakerData>/scn}" target="_blank" visible="{= ${speakerData>/scn} ? true : false}"/><Label text="GitHub" visible="{= ${speakerData>/github} ? true : false}"/><Link text="{speakerData>/github}" href="{speakerData>/github}" target="_blank"/><Label text="Twitter" visible="{= ${speakerData>/twitter} ? true : false}"/><Text text="{speakerData>/twitter}" visible="{= ${speakerData>/twitter} ? true : false}"/></l:VerticalLayout></f:content></f:Card></core:FragmentDefinition>',
	"recap/capadvancedprogrammingmodel/view/fragments/SpeakerPopover.fragment.xml":'<core:FragmentDefinition\n\txmlns="sap.m"\n\txmlns:core="sap.ui.core"\n\txmlns:f="sap.f"\n\txmlns:l="sap.ui.layout"><Popover\n\t\tid="individualPopover"\n\t\ttitle="Speaker details"\n\t\ttitleAlignment="Center"\n\t\tplacement="Bottom"><core:Fragment fragmentName="recap.capadvancedprogrammingmodel.view.fragments.Card" type="XML"></core:Fragment></Popover></core:FragmentDefinition>'
});
//# sourceMappingURL=Component-preload.js.map
