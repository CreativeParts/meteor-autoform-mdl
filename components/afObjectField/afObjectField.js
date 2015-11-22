/* global AutoForm */

Template.afObjectField_mdl.helpers({
  getTemplateName: function () {
    return AutoForm.getTemplateName('afObjectField_mdl', this.template, this.name);
  },
  innerContext: function() {
    var c = AutoForm.Utility.getComponentContext(this, 'afObjectField_mdl');
    return _.extend({}, this, c.atts);
  }
});
