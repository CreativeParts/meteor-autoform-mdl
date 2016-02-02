Template.registerHelper('getMdlLabelClass', function (context, fieldAttr) {
    //Return MDL Label classes based on input field type...

    var result = "";
    var type = AutoForm.getInputType(context);
  
    if(type == "text"){
        //Text inputs...
        result = "mdl-textfield__label";

    }else if(type == "textarea"){
        //Text Area inputs...
        result = "mdl-textfield__label";

    }else if(type == "select-checkbox"){
        //Select Checkboxes...
        result = "mdl-checkbox__label";

    }else if(type == "select-radio"){
        //Select Radio...
        result = "mdl-radio__label";

    }

    return result;

  }
);

Template.registerHelper('getMdlInputClass', function (context, fieldAttr) {
    //Return MDL Input classes based on input field type...

    var result = "";
    var type = AutoForm.getInputType(context);
    // console.log(context);
    var attsExist = "false";
    
    if( typeof context == 'undefined' 
        || typeof fieldAttr == 'undefined'
        || typeof fieldAttr.mdltheme == 'undefined' 
        || fieldAttr.mdltheme == ''){

        attsExist = "false";
    }else{
        attsExist = "true";   
        // console.log(fieldAttr.mdltheme);
    }


    if(type == "text" && attsExist =="false"){
        //Text inputs - No theme default, return default classes...
        result = "mdl-textfield mdl-js-textfield";        

    }else if(type == "text" && attsExist =="true"){
        //Text inputs - theme defined...check theme...
        if(fieldAttr.mdltheme == 'Normal'){
            result = "mdl-textfield mdl-js-textfield";

        }else if(fieldAttr.mdltheme == 'Floating'){
            result = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";            

        }
    }else if(type == "textarea"){
        //Text Area inputs...
        result = "mdl-textfield mdl-js-textfield";

    }
        
    return result;
  }
);




Template.registerHelper('themeRequireLabel', function (context) {
    //Check if the component selected theme require label, 
    //will skip label for special inputs/ themes (ex. input: Text, theme: Floating)...

    //No label to appear with Floating / text input
    //

    var inputType = AutoForm.getInputType(context);

    if( typeof context == 'undefined' 
        || typeof context.afFieldInputAtts == 'undefined'
        || typeof context.afFieldInputAtts.mdltheme == 'undefined' 
        || context.afFieldInputAtts.mdltheme == ''){

        return true;
    }else{
        //
        if(context.afFieldInputAtts.mdltheme == 'Floating' && inputType == "text"){
            return false;
        }else{
            return true;    
        }

    }

});








