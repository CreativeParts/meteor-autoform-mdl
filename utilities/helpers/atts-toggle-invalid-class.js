Utility.helpers.attsToggleInvalidClass = function() {
  console.log('Utility.helpers.attsToggleInvalidClass');

  var atts;
  console.log(this.atts);
  atts = _.clone(this.atts);
  atts = Utility.toggleInvalidClass(atts);
  return atts;
};
