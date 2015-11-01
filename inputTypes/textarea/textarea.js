Template.afTextarea_mdl.helpers({
  atts: function() {
    var atts;
    atts = _.clone(this.atts);
    atts = AutoForm.Utility.addClass(atts, "materialize-textarea");
    atts = Utility.toggleInvalidClass(atts);
    return atts;
  }
});

Template.afTextarea_mdl.rendered = function() {
    this.$('textarea').characterCounter();
}
