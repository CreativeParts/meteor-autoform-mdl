

Google MDL theme for Meteor Autoform - [[[ Under Development - please do NOT use in production ]]]
=========================
Adds [Material Design Lite](http://www.getmdl.io/) look and feel to autoform.


- [Installation](#installation)
- [Applying different MDL themes](#applying-different-mdl-themes)
- [Attributes](#attributes)
- [License](#license)


## Installation

In a Meteor app directory, enter:

```
$ meteor add aldeed:autoform
$ meteor add creativeparts:meteor-autoform-mdl
```


## Applying different MDL themes

If you want to customize input fields (ex. Text) to display different MDL 
themes (ex. Simple, Floating) you need to change the mdlTheme parameter in
afQuickField. 

Here's an example:

```html
<template name="sampleForm">
  {{#autoForm collection="Customers" id="sampleForm" type="insert"}}
    <fieldset>
      <legend>Add new customer</legend>
      {{> afQuickField name='title' mdltheme="Simple"}}
    </fieldset>
    <button type="submit">Save</button>
  {{/autoForm}}
</template>
```

Note that not specifying the mdlTheme will display the default theme.


### attributes

Use the following attributes with afQuickField.

The following attributes are recognized:

* `mdltheme`: Required to specify MDL component theme, the following themes are supported for listed below input types:
    * Text: 'Normal', 'Floating'.
    * Textarea: 
* `mdlthemelabel`: Required to specify Text input label text. Applies only when 'Normal' mdltheme is selected


## License
meteor-autoform-mdl is licensed under the [MIT Licence](LICENSE).

Based on:
- Material Design Lite: https://github.com/google/material-design-lite
- Meteor Autoform https://github.com/aldeed/meteor-autoform
