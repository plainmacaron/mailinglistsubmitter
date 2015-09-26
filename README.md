# mailinglistsubmitter

## About

### Author

Ryan E. Anderson

---

### Description

This customizable jQuery plug-in allows a visitor to easily join a mailing list.

  - Join a mailing list by submitting an email address.
  - Create custom callback functions that can be used to handle ajax responses that occur from submitting an email address.
  - Choose between two display styles.

Mailinglistsubmitter can be downloaded from the [plainmacaron site] and [GitHub].

---

### Version

1.0.0

---

### License

GPL-2.0

## Demo

Try the [demos] on the "Controls" page of the Plain Macaron website.

Add a simple mailing list plug-in to your project:

![screenshot 1](https://raw.githubusercontent.com/plainmacaron/mailinglistsubmitter/master/screenshots/screenshot-1.png)

This control comes with validation features:

![screenshot 2](https://raw.githubusercontent.com/plainmacaron/mailinglistsubmitter/master/screenshots/screenshot-2.png)

Try different display styles:

![screenshot 3](https://raw.githubusercontent.com/plainmacaron/mailinglistsubmitter/master/screenshots/screenshot-3.png)

## Installation

Install mailinglistsubmitter with npm:

```sh
$ npm i mailinglistsubmitter
```

Alternatively, you can add the JavaScript file to your project with a script tag:

```html
<script type="text/javascript" src="./js/plainmacaron/jquery.plainmacaron.mailinglistsubmitter.js"></script>
```

## Using mailinglistsubmitter

Use this plug-in in your projects. The following example demonstrates how to initialize this plug-in:

```html
    <script type="text/javascript">
        $(function() {
            $("#submitter").mailinglistsubmitter({
                formAction: "php/join.php",
                formSubmitResultFontFamily: null,
                imagePath: "png/Mailing-List-Envelope.png",
                inputFontFamily: "'OpenSans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                joinButtonFontFamily: null,
                joinButtonFontSize: "0.745em",
                labelFontFamily: null,
                noticeFontFamily: null
            });
        });
    </script>
```

[plainmacaron site]: <http://plainmacaron.com/> "Plain Macaron website"
[GitHub]: <https://github.com/plainmacaron/mailinglistsubmitter> "GitHub Repository"
[Demos]: <http://plainmacaron.com/Controls/> "Demos Page"
