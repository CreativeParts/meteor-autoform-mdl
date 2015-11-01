Template.afInputText_mdl.helpers({
  attrs: Utility.helpers.attsToggleInvalidClass
});

Template.afInputText_mdl.rendered = function() {
    this.$('textarea').characterCounter();
}