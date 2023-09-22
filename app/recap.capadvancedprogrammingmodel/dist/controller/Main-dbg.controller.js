"use strict";

sap.ui.define(["./BaseController", "../model/formatter", "sap/ui/model/json/JSONModel", "sap/ui/core/Fragment"], function (__BaseController, __formatter, JSONModel, Fragment) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  const formatter = _interopRequireDefault(__formatter);
  /**
   * @namespace recap.capadvancedprogrammingmodel.controller
   */
  const Main = BaseController.extend("recap.capadvancedprogrammingmodel.controller.Main", {
    constructor: function constructor() {
      BaseController.prototype.constructor.apply(this, arguments);
      this.formatter = formatter;
    },
    onInit: function _onInit() {
      this.getView().setModel(new JSONModel({
        speakers: [{
          initials: "DVV",
          name: "Dries Van Vaerenbergh",
          tooltip: "1",
          jobPosition: "Full stack SAP development consultant",
          src: "https://avatars.githubusercontent.com/u/32237030?v=4",
          fallbackIcon: "sap-icon://person-placeholder",
          company: "Flexso",
          scn: "https://people.sap.com/vvdries",
          github: "https://github.com/vvdries",
          twitter: "@vvdries"
        }, {
          initials: "WL",
          name: "Wouter Lemaire",
          tooltip: "2",
          jobPosition: "SAP solution architect, developer & consultant ",
          src: "https://avatars.githubusercontent.com/u/5943183?v=4",
          fallbackIcon: "sap-icon://person-placeholder",
          company: "Independent Consultant",
          scn: "https://people.sap.com/wouter.lemaire",
          github: "https://github.com/lemaiwo",
          twitter: "@wouter_lemaire"
        }, {
          initials: "GM",
          name: "Gert Mertens",
          tooltip: "3",
          jobPosition: "Full stack SAP development consultant",
          src: "https://avatars.githubusercontent.com/u/91686405?v=4",
          fallbackIcon: "sap-icon://person-placeholder",
          company: "Flexso",
          scn: "https://people.sap.com/mertensgert",
          github: "https://github.com/gertmertens92",
          twitter: ""
        }]
      }));
      this.getView().setModel(new JSONModel(), "speakerData");
    },
    navigate2ServicesApp: function _navigate2ServicesApp() {
      this.getRouter().navTo("btpServices");
    },
    onSpeakerSelect: async function _onSpeakerSelect(event) {
      const avatarGroupItem = event.getParameter("eventSource");
      const view = this.getView();
      const speaker = avatarGroupItem.getBindingContext().getObject();
      if (!this.speakerPopover) {
        this.speakerPopover = await Fragment.load({
          id: view.getId(),
          name: "recap.capadvancedprogrammingmodel.view.fragments.SpeakerPopover",
          controller: this
        });
        view.addDependent(this.speakerPopover);
      }
      this.getModel("speakerData").setData(this.getSpeaker(speaker, avatarGroupItem));
      this.speakerPopover.openBy(avatarGroupItem).addStyleClass("sapFAvatarGroupPopover");
    },
    getSpeaker: function _getSpeaker(speaker, avatarGroupItem) {
      return {
        src: speaker.src,
        initials: speaker.initials,
        fallbackIcon: speaker.fallbackIcon,
        backgroundColor: avatarGroupItem.getAvatarColor(),
        name: speaker.name,
        jobPosition: speaker.jobPosition,
        company: speaker.company,
        scn: speaker.scn,
        github: speaker.github,
        twitter: speaker.twitter
      };
    }
  });
  return Main;
});