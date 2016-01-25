
Template.registerHelper('cpAFMDL', function (context) {
    
    var result = "";
    var type = AutoForm.getInputType(context);
    var attsExist = false;


    //Checkpoint ### 1 ### context.afFieldInputAtts.mdltheme exist and not empty...
    if( typeof context == 'undefined' 
        || typeof context.afFieldInputAtts == 'undefined'
        || typeof context.afFieldInputAtts.mdltheme == 'undefined' 
        || context.afFieldInputAtts.mdltheme == ''){

        console.log('NO ATTS...');
        attsExist = false;
    }else{
        attsExist = true;   
        console.log(context.afFieldInputAtts.mdltheme);    
    }


    if(type == "text"){
        //Text inputs...
        //Checkpoint ### 2 ### Check if theme attribute value passed is a valid value...
        //if not then return the default theme...

        result = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";
    }else if(type == "textarea"){
        //Text Area inputs...
        result = "mdl-textfield mdl-js-textfield";
    }else if(type == "select-radio"){
        //Radio inputs...
        result = "mdl-radio mdl-js-radio mdl-js-ripple-effect";
    }
    
    return result;
  }
);



// Template.registerHelper('getInputAttr', function (inputAttr) {
//     console.log(inputAttr);
// });