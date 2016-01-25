//=================================================================================================================

Utility.helpers.attsAddClass = function(){
  var atts;
  atts = _.clone(this.atts);
  // atts = AutoForm.Utility.addClass(atts, 'btn waves-effect waves-light');
  atts = AutoForm.Utility.addClass(atts, 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect');
  return atts;
};

//=================================================================================================================

Utility.helpers.attsAddBtnClass = function(){

  //Add btn classes...
  var atts;
  atts = _.clone(this.atts);
  atts = AutoForm.Utility.addClass(atts, 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect');
  return atts;

};

Utility.helpers.attsAddSubmitBtnClass = function(){

  //Submit btn classes...
  var atts;
  atts = _.clone(this.atts);
  atts = AutoForm.Utility.addClass(atts, 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect');
  return atts;
  
};

//=================================================================================================================