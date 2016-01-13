Template.afFormGroup_mdl.helpers({
    addInputField: function() {
        var result, skipInputType, type;
        skipInputType = [
            'checkbox',
            'checkbox-group',
            'boolean-checkbox',
            'select-radio',
            'select-checkbox-inline',
            'select-radio-inline',
            'boolean-radios',
            'toggle',
            'switch'
        ];
        //this returns AutoForm field properties, 
        type = AutoForm.getInputType(this);
        result = !_.contains(skipInputType, type);
        return result;
    },
    skipLabel: function() {
        //Hide Label for  specific field types...
        var result, skipLabelTypes, type;
        skipLabelTypes = [
            'text',
            'checkbox',
            'checkbox-group',
            'boolean-checkbox',
            'select-radio',
            'select-checkbox-inline',
            'select-radio-inline',
            'boolean-radio',
            'toggle',
            'switch'
        ];
        type = AutoForm.getInputType(this);
        result = this.skipLabel || _.contains(skipLabelTypes, type);
        return result;
    },
    mdlErr: function(){
        var type = AutoForm.getInputType(this);
        if(type == 'text'){
            return true;
        }else{
            return false;
        }
    }


});

Template.afFormGroup_mdl.rendered = function() {
    var formId;
    formId = AutoForm.getFormId();
    this.autorun((function(_this) {
        return function() {
            var value = AutoForm.getFieldValue(_this.data.name, formId);
            var inputValue = AutoForm.getInputValue(_this.find('input'));
            var type = AutoForm.getInputType(_this.data);
            var placeholder = _this.data.afFieldInputAtts.placeholder;
            var skipActiveLabelTypes = [
                'select',
                'checkbox',
                'checkbox-group',
                'boolean-checkbox',
                'select-radio',
                'select-checkbox-inline',
                'select-radio-inline',
                'boolean-radio',
                'toggle',
                'switch'
            ];

            if (!_.contains(skipActiveLabelTypes, type)) {
                if (!!value || !!inputValue || !!placeholder) {
                    return _this.$('.input-field > label:not(:focus)').addClass('active');
                } else {
                    return _this.$('.input-field > label:not(:focus)').removeClass('active');
                }
            }
        };
    })(this));
};