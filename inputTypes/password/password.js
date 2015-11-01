Template.afInputPassword_mdl.helpers({
  attrs: Utility.helpers.attsToggleInvalidClass
});

Template.afInputPassword_mdl.rendered = function() {
    this.$('textarea').characterCounter();
}
