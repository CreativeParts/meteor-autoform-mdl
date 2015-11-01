Template.afSelect_mdl.helpers({
  attrs: Utility.helpers.attsToggleInvalidClass
});
Template.afSelect_mdl.helpers({
  optionAtts: Utility.helpers.optionAtts
});

Template.afSelect_mdl.onRendered(Utility.initializeSelect);