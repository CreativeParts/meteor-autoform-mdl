Package.describe({
  name: "creativeparts:meteor-autoform-mdl",
  summary: "Google MDL Autoform Theme - CreativeParts",
  version: "0.0.1",
  git: "https://github.com/CreativeParts/meteor-autoform-mdl"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.use(["templating", "underscore"], "client");
  api.use("zodiase:mdl@1.0.6_1");

  api.use("aldeed:autoform@5.5.1");
  api.use("aldeed:collection2@2.5.0");
  
  
  api.addFiles([

    //aldeed:autoform@5.5.1

    // // utility
    'utilities/initialize.js',
    // 'utilities/toggle-invalid-class.js',
    // 'utilities/initialize-select.js',


    // utility template helpers
    'utilities/helpers/initialize.js',

    'utilities/helpers/atts-add-class.js',




    // input types
    'inputTypes/button/button.html',
    'inputTypes/button/button.js',
    'inputTypes/hidden/hidden.html',
    'inputTypes/submit/submit.html',
    'inputTypes/submit/submit.js',
    'inputTypes/text/text.html',
    // 'inputTypes/text/text.js',
    'inputTypes/label/label.html',
    'inputTypes/label/label.js',


    // components that render a form
    'components/autoForm/autoForm.html',
    'components/autoForm/autoForm.js',
    'components/quickForm/quickForm.html',
    'components/quickForm/quickForm.js',


    // components that render controls within a form
    'components/afArrayField/afArrayField.html',
    'components/afFormGroup/afFormGroup.html',
    'components/afFormGroup/afFormGroup.js',
    'components/afObjectField/afObjectField.html',
    'components/afQuickField/afQuickField.html'

    
  ], "client");
});
