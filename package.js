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
    // 'utilities/helpers/dsk.js',
    // 'utilities/helpers/item-atts-with-uniq-id.js',
    // 'utilities/helpers/atts-toggle-invalid-class.js',
    // 'utilities/helpers/atts-check-selected.js',
    // 'utilities/helpers/atts-add-class.js',
    // 'utilities/helpers/option-atts.js',



    // input types
    'inputTypes/boolean-checkbox/boolean-checkbox.html',
    'inputTypes/boolean-checkbox/boolean-checkbox.js',
    'inputTypes/boolean-radios/boolean-radios.html',
    'inputTypes/boolean-radios/boolean-radios.js',
    'inputTypes/boolean-select/boolean-select.html',
    'inputTypes/boolean-select/boolean-select.js',
    'inputTypes/button/button.html',
    'inputTypes/button/button.js',
    'inputTypes/color/color.html',
    'inputTypes/color/color.js',
    'inputTypes/contenteditable/contenteditable.html',
    'inputTypes/date/date.html',
    'inputTypes/date/date.js',
    'inputTypes/datetime/datetime.html',
    'inputTypes/datetime/datetime.js',
    'inputTypes/datetime-local/datetime-local.html',
    'inputTypes/datetime-local/datetime-local.js',
    'inputTypes/email/email.html',
    'inputTypes/email/email.js',
    'inputTypes/file/file.html',
    'inputTypes/hidden/hidden.html',
    'inputTypes/image/image.html',
    'inputTypes/month/month.html',
    'inputTypes/month/month.js',
    'inputTypes/number/number.html',
    'inputTypes/number/number.js',
    'inputTypes/password/password.html',
    'inputTypes/password/password.js',
    'inputTypes/radio/radio.html',
    'inputTypes/radio/radio.js',
    'inputTypes/range/range.html',
    'inputTypes/range/range.js',
    'inputTypes/reset/reset.html',
    'inputTypes/reset/reset.js',
    'inputTypes/search/search.html',
    'inputTypes/select/select.html',
    'inputTypes/select/select.js',
    'inputTypes/select-checkbox/select-checkbox.html',
    'inputTypes/select-checkbox/select-checkbox.js',
    'inputTypes/select-checkbox-inline/select-checkbox-inline.html',
    'inputTypes/select-checkbox-inline/select-checkbox-inline.js',
    'inputTypes/select-multiple/select-multiple.html',
    'inputTypes/select-multiple/select-multiple.js',
    'inputTypes/select-radio/select-radio.html',
    'inputTypes/select-radio/select-radio.js',
    'inputTypes/select-radio-inline/select-radio-inline.html',
    'inputTypes/select-radio-inline/select-radio-inline.js',
    'inputTypes/submit/submit.html',
    'inputTypes/submit/submit.js',
    'inputTypes/tel/tel.html',
    'inputTypes/tel/tel.js',
    'inputTypes/text/text.html',
    'inputTypes/text/text.js',
    'inputTypes/textarea/textarea.html',
    'inputTypes/textarea/textarea.js',
    'inputTypes/time/time.html',
    'inputTypes/time/time.js',
    'inputTypes/url/url.html',
    'inputTypes/url/url.js',
    'inputTypes/week/week.html',
    'inputTypes/week/week.js',
    'inputTypes/switch/switch.html',
    'inputTypes/switch/switch.js',
    'inputTypes/pickadate/pickadate.html',
    'inputTypes/pickadate/pickadate.js',
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
