Template['quickForm_mdl'].helpers({
  submitButtonAtts: function() {
    var atts, qfAtts;
    qfAtts = this.atts;
    atts = {};
    if (typeof qfAtts.buttonClasses === 'string') {
      atts['class'] = qfAtts.buttonClasses;
    } else {
      atts['class'] = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect';
    }
    return atts;
  }
});