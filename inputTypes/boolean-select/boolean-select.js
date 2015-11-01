Template.afBooleanSelect_mdl.helpers({
  attrs: Utility.helpers.attsToggleInvalidClass
});

Template.afBooleanSelect_mdl.helpers({
  optionAtts: Utility.helpers.optionAtts
});

Template.afBooleanSelect_mdl.onRendered(Utility.initializeSelect);