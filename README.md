

Google MDL theme for Meteor Autoform - [ ALPHA RELEASE ]
=========================
Adds [Material Design Lite](http://www.getmdl.io/) look and feel to autoform.


- [Installation](#installation)
- [Supported Components](#supported-components)
- [Applying different MDL themes](#applying-different-mdl-themes)
- [Attributes](#attributes)
- [License](#license)


## Installation

In a Meteor app directory, enter:

```
$ meteor add aldeed:autoform
$ meteor add creativeparts:meteor-autoform-mdl
```


## Supported components

The following components are currently supported:

* `Text Fields`
* `Text Area` 
* `Checkboxes`
* `Radio Buttons`
* `Buttons`


## Applying different Text input themes

If you want to customize Text input fields to display different MDL 
themes (ex. default, floating) you need to change the mdlTheme parameter in
afQuickField. 

Here's an example:

```html
<template name="sampleForm">
  {{#autoForm collection="Customers" id="sampleForm" type="insert"}}
    <fieldset>
      <legend>Add new customer</legend>
      {{> afQuickField name='title' mdltheme="default"}}
    </fieldset>
    <button type="submit">Save</button>
  {{/autoForm}}
</template>
```

Note that not specifying the mdlTheme will display the default theme.


### attributes

Use the following attributes with afQuickField.

The following attributes are recognized:

* `mdltheme`: Required to specify MDL component theme, specifically for Text input. the following themes are supported for Text input:
    * Text: 'default', 'floating'.

if no mdltheme selected, 'default' will be the default theme.

## License
meteor-autoform-mdl is licensed under the [MIT Licence](LICENSE).

Based on:
- Material Design Lite: https://github.com/google/material-design-lite
- Meteor Autoform https://github.com/aldeed/meteor-autoform
