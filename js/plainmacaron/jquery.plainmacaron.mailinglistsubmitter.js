/*!
 * jQuery Mailinglistsubmitter plug-in v1.0.0 - 2015-09-22T07:08Z
 * http://PlainMacaron.com/Controls/, http://PlainMacaron.com/Download/
 *
 * This customizable jQuery plug-in allows a visitor to easily join a mailing list.
 * Copyright (C) 2015 Plain Macaron
 *
 * Mailinglistsubmitter is released under the GNU General Public License, Version 2 (or later).
 *
 * Mailinglistsubmitter is free software; you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software Foundation;
 * either version 2 of the License, or (at your option) any later version.
 *
 * Mailinglistsubmitter is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program;
 * if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
 * Boston, MA  02110-1301, USA.
 * http://PlainMacaron.com/Permission/
 *
 * Please, contact us if you have any questions or feedback about this plug-in.
 * http://PlainMacaron.com/Contact/, support@plainmacaron.com
 *
 * This plug-in has the following dependencies: jQuery v1.5 or higher and jQuery UI v1.7 or 
 * higher.
 *
 * This plug-in was developed by Ryan E. Anderson.
 *
 */

; (function( $, window, document, undefined ) {
    $.widget( "plainmacaron.mailinglistsubmitter", {
        defaultElement: "<div>",
        flag: false,
        options: {
            ajax: null,
            backgroundColor: "#acddea",
            color: "#283437",
            containerIdentifier: "ui-mailing-list-submitter",
            containerClass: "ui-container",
            containerWidth: "100%",
            displayStyle: 2,
            fieldsetClass: "ui-fieldset",
            formAction: "../php/join.php",
            formIdentifier: "subscribe-form",
            formMethod: "POST",
            formSubmitResultClass: "ui-submit-result",
            formSubmitResultFailureColor: "#5f1b17",
            formSubmitResultFontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            formSubmitResultIdentifier: "result",
            formSubmitResultSuccessColor: "#163923",
            hasForm: true,
            imageClass: "ui-label icon",
            imageHeight: "26px",
            imagePath: "../png/Mailing-List-Envelope.png",
            imageWidth: "51px",
            inputBackgroundColor: "#ffffff",
            inputBlurBackgroundColor: "#283437",
            inputBlurClass: "ui-input-blur",
            inputBlurColor: "#ffffff",
            inputBorderColor: "transparent",
            inputClass: "ui-input",
            inputColor: "#283437",
            inputFontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            inputFontSize: "0.9em",
            inputHeight: "24px",
            inputIdentifier: "email",
            inputLineHeight: "normal",
            inputMaxHeight: null,
            inputMaxWidth: null,
            inputName: "email",
            inputWidth: null,
            inputValue: "ENTER AN EMAIL ADDRESS",
            joinButtonBackgroundColor: "#283437",
            joinButtonBorderColor: "#283437",
            joinButtonClass: "ui-button",
            joinButtonColor: "#ffffff",
            joinButtonFontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            joinButtonFontSize: "0.9em",
            joinButtonIdentifier: "subscribe-button",
            joinButtonLineHeight: "normal",
            joinButtonLink: "#subscribe-button",
            joinButtonTitle: "Subscribe to receive newsletter.",
            joinButtonValue: "Join",
            labelClass: "ui-label",
            labelFontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            labelFontSize: "1.35em",
            labelIdentifier: "email-label",
            labelLineHeight: null,
            labelText: "Join our mailing list",
            labelTextClass: "ui-label-text",
            labelTextColor: "#283437",
            noticeClass: "ui-notice",
            noticeFontFamily: "Geneva, Verdana, 'Verdana Ref', sans-serif",
            noticeFontSize: "0.91em",
            noticeLineHeight: "normal",
            noticeText: "Your information is safe with us!",
            noticeTextColor: "#283437",
            submitCallback: $.noop
        },
        version: "1.0.0",

        _create: function() {
            var clearFix;
            var container;
            var element;
            var icon;
            var joinButton;
            var labelText;
            var formLabel;
            var mailingListForm;
            var mailingListInput;
            var name;
            var options;
            var parents;
            var privacyNotice;
            var privacyNoticeText;
            var result;
            var resultText;
            var self;

            self = this;
            element = self.element;
            options = self.options;

            container = $("<div />");
            mailingListForm = $("<fieldset />");
            mailingListInput = $("<input type='text' />");
            formLabel = $("<label><span></span><img></img></label>");
            joinButton = $("<a />");
            privacyNotice = $("<div><small></small></div>");
            result = $("<div><p></p></div>");
            clearFix = $("<div />");

            container.attr( "id", options.containerIdentifier )
                     .addClass( options.containerClass )
                     .css({
                         backgroundColor: options.backgroundColor,
                         color: options.color,
                         width: options.containerWidth
                     })
                     .appendTo( element );

            mailingListForm.addClass( options.fieldsetClass );

            parents = container.parents( "form" );

            if ( options.hasForm && parents.length === 0 ) {
                var form;

                form = $("<form />");

                form.append( mailingListForm );

                mailingListForm = form.first()
                                      .attr( "id", options.formIdentifier );
            }

            mailingListForm.appendTo( container );

            name = options.inputName;

            if ( name === null || name === "" ) {
                name = "email";
            }

            formLabel.first()
                     .attr( "id", options.labelIdentifier )
                     .attr( "for", name )
                     .addClass( options.labelClass )
                     .css({
                         fontFamily: options.labelFontFamily,
                         fontSize: options.labelFontSize
                     });

            labelText = formLabel.find( "span" )
                                 .addClass( options.labelTextClass )
                                 .css({
                                     color: options.labelTextColor,
                                     cssFloat: ( options.displayStyle === 1 ? "left" : "none" )
                                 })
                                 .text( options.labelText );

            icon = formLabel.find( "img" )
                            .attr( "src", options.imagePath )
                            .attr( "alt", options.labelText )
                            .addClass( options.imageClass )
                            .css({
                                height: options.imageHeight
                            });

            if ( options.hasForm ) {
                container.find( "fieldset" )
                         .append( formLabel );
            } else {
                mailingListForm.first()
                               .append( formLabel );
            }

            mailingListInput.attr( "id", options.inputIdentifier )
                            .attr( "name", options.inputName )
                            .attr( "value", options.inputValue )
                            .addClass( options.inputClass )
                            .css({
                                backgroundColor: options.inputBackgroundColor,
                                borderColor: options.inputBorderColor,
                                color: options.inputColor,
                                fontFamily: options.inputFontFamily,
                                fontSize: options.inputFontSize,
                                height: options.inputHeight,
                                lineHeight: options.inputLineHeight,
                                maxHeight: options.inputMaxHeight,
                                maxWidth: options.inputMaxWidth,
                                width: options.inputWidth
                            })
                            .insertAfter( formLabel );

            labelText.css({
                         lineHeight: ( options.displayStyle === 1 && options.labelLineHeight !== null ? Math.max( mailingListInput.outerHeight( true ), parseInt( $.trim( options.labelLineHeight ) ) ) + "px" : options.labelLineHeight )
                     });

            joinButton.text( options.joinButtonValue )
                      .attr( "id", options.joinButtonIdentifier )
                      .attr( "href", options.joinButtonLink )
                      .attr( "title", options.joinButtonTitle )
                      .addClass( options.joinButtonClass )
                      .css({
                          backgroundColor: options.joinButtonBackgroundColor,
                          borderColor: options.joinButtonBorderColor,
                          color: options.joinButtonColor,
                          fontFamily: options.joinButtonFontFamily,
                          fontSize: options.joinButtonFontSize
                      })
                      .insertAfter( mailingListInput );

            privacyNotice.addClass( options.noticeClass )
                         .insertAfter( joinButton );

            privacyNoticeText = privacyNotice.find( "small" )
                                             .css({
                                                 color: options.noticeTextColor,
                                                 fontFamily: options.noticeFontFamily,
                                                 fontSize: options.noticeFontSize,
                                                 lineHeight: options.noticeLineHeight
                                             })
                                             .text( options.noticeText );

            result.first()
                  .attr( "id", options.formSubmitResultIdentifier )
                  .addClass( options.formSubmitResultClass )
                  .insertAfter( joinButton );

            resultText = result.find( "p" )
                               .css({
                                   fontFamily: options.formSubmitResultFontFamily,
                                   lineHeight: mailingListInput.outerHeight( true ) + "px"
                               });

            clearFix.css({
                        clear: "both",
                        width: "100%"
                    })
                    .insertAfter( container );

            self._on( mailingListInput, {
                blur: self._inputBlurEventHandler,
                click: self._inputClickEventHandler,
                focus: self._inputFocusEventHandler,
                keydown: self._inputKeydownEventHandler
            });

            self._on( joinButton, {
                blur: self._joinButtonBlurEventHandler,
                click: self._joinButtonClickEventHandler,
                mouseenter: self._joinButtonMouseenterEventHandler,
                mouseleave: self._joinButtonMouseleaveEventHandler
            });

            self._on( $("#" + options.formIdentifier), {
                submit: self._mailingListFormSubmitEventHandler
            });
        },

        _destroy: function() {
            var container;
            var element;
            var options;
            var self;

            self = this;
            element = self.element;
            options = self.options;

            container = element.children( "#" + options.containerIdentifier );

            self._off( $("#" + options.inputIdentifier), "blur" );
            self._off( $("#" + options.inputIdentifier), "click" );
            self._off( $("#" + options.inputIdentifier), "focus" );
            self._off( $("#" + options.inputIdentifier), "keydown" );
            self._off( $("#" + options.joinButtonIdentifier), "blur" );
            self._off( $("#" + options.joinButtonIdentifier), "click" );
            self._off( $("#" + options.joinButtonIdentifier), "mouseenter" );
            self._off( $("#" + options.joinButtonIdentifier), "mouseleave" );
            self._off( $("#" + options.formIdentifier), "submit" );

            container.next()
                     .remove();

            element.children( container )
                   .remove();
        },

        _inputBlurEventHandler: function( event ) {
            var inputText;
            var options;
            var self;
            var value;

            self = this;
            options = self.options;

            inputText = $(event.target);

            value = $.trim( inputText.val() );

            if ( !self.flag ) {
                if ( value !== "" && value !== options.inputValue ) {
                    inputText.addClass( options.inputBlurClass )
                             .css({
                                 color: options.inputBlurColor,
                                 backgroundColor: options.inputBlurBackgroundColor
                             });
                } else {
                    inputText.val( options.inputValue );
                }
            } else {
                if ( inputText.hasClass( options.inputBlurClass ) ) {
                    inputText.removeClass( options.inputBlurClass )
                             .css({
                                 color: options.inputColor,
                                 backgroundColor: options.inputBackgroundColor
                             });
                }

                self.flag = false;
            }
        },

        _inputClickEventHandler: function( event ) {
            var inputText;
            var options;
            var result;
            var self;
            var value;

            self = this;
            options = self.options;

            inputText = $(event.target);
            result = $("#" + options.formSubmitResultIdentifier);

            value = $.trim( inputText.val() );

            if ( value === options.inputValue ) {
                inputText.val( "" );
            }

            result.find( "p" )
                  .html( "" );
        },

        _inputFocusEventHandler: function( event ) {
            var inputText;
            var options;
            var self;

            self = this;
            options = self.options;

            inputText = $(event.target);

            if ( inputText.hasClass( options.inputBlurClass ) ) {
                inputText.removeClass( options.inputBlurClass )
                         .css({
                             color: options.inputColor,
                             backgroundColor: options.inputBackgroundColor
                         });
            }
        },

        _inputKeydownEventHandler: function( event ) {
            if ( event.which === 9 ) {
                var inputText;
                var joinButton;
                var options;
                var self;
                var value;

                self = this;
                options = self.options;

                inputText = $(event.target);
                joinButton = $("#" + options.joinButtonIdentifier);

                self._off( inputText, "blur" );

                value = $.trim( inputText.val() );

                if ( value === "" ) {
                    inputText.val( options.inputValue );
                }

                event.preventDefault();      

                joinButton.focus();
            }
        },

        _joinButtonBlurEventHandler: function( event ) {
            var inputText;
            var options;
            var self;
            var value;
			
            self = this;
            options = self.options;
			
            inputText = $("#" + options.inputIdentifier);

            self._on( inputText, {
                blur: self._inputBlurEventHandler
            });

            value = $.trim( inputText.val() );

            if ( !self.flag ) {
                if ( value !== "" && value !== options.inputValue ) {
                    inputText.addClass( options.inputBlurClass )
                             .css({
                                 color: options.inputBlurColor,
                                 backgroundColor: options.inputBlurBackgroundColor
                             });
                } else {
                    inputText.val( options.inputValue );
                }
            } else {
                if ( inputText.hasClass( options.inputBlurClass ) ) {
                    inputText.removeClass( options.inputBlurClass )
                             .css({
                                 color: options.inputColor,
                                 backgroundColor: options.inputBackgroundColor
                             });
                }

                self.flag = false;
            }
        },

        _joinButtonClickEventHandler: function ( event ) {
            var form;
            var options;
            var self;

            self = this;
            options = self.options;

            form = $("#" + options.formIdentifier);

            form.submit();
        },

        _joinButtonMouseenterEventHandler: function ( event ) {
            var inputText;
            var joinButton;
            var options;
            var self;
            
            self = this;
            options = self.options;

            inputText = $("#" + options.inputIdentifier);
            joinButton = $(event.target);

            self._off( inputText, "blur" );

            joinButton.focus();       
        },

        _joinButtonMouseleaveEventHandler: function ( event ) {
            var inputText;
            var options;
            var self;
            
            self = this;
            options = self.options;

            inputText = $("#" + options.inputIdentifier);

            self._on( inputText, {
                blur: self._inputBlurEventHandler
            });
        },

        _joinCallback: function ( control, callback ) {
            return function ( data, textStatus, jqXHR ) {
                if ( typeof callback === "function" && callback != $.noop ) {
                    return callback( control, data, textStatus, jqXHR );
                } else {
                    var message;
                    var options;
                    var result;

                    options = control.options;
                    message = data.message;

                    result = $("#" + options.formSubmitResultIdentifier);

                    result.find( "p" )
                          .css({
                              color: options.formSubmitResultSuccessColor
                          })
                          .html( "" )
                          .hide()
                          .text( message )
                          .fadeIn( "slow" );
                }
            };
        },

        _mailingListFormSubmitEventHandler: function ( event ) {
            var inputText;
            var joinButton;
            var options;
            var self;
            var value;

            self = this;
            options = this.options;

            inputText = $("#" + options.inputIdentifier);
            joinButton = $("#" + options.joinButtonIdentifier);

            value = $.trim( inputText.val() );

            self.flag = self.validate( value );

            event.preventDefault();

            if ( !self.flag ) {
                var result;

                result = $("#" + options.formSubmitResultIdentifier);

                result.find( "p" )
                      .html( "" )
                      .hide()
                      .text( "The email appears to be invalid." )
                      .css({
                          color: options.formSubmitResultFailureColor
                      })
                      .fadeIn( "slow" );
            } else {
                var ajax;
                var callback;
                var request;

                ajax = options.ajax;

                if ( ajax === null ) {
                    var name;

                    name = options.inputName;

                    if ( name === null || name === "" ) {
                        name = "email";
                    }

                    ajax = {
                        type: options.formMethod,
                        url: options.formAction,
                        data: { name: value },
                        dataType: "json"
                    };
                }

                request = $.ajax( ajax );

                callback = self._joinCallback;

                request.done( callback( self, options.submitCallback ) );

                inputText.val( options.inputValue );
            }
			
            if ( inputText.is( ":focus" ) ) {
                inputText.blur();
            }
			
            if ( joinButton.is( ":focus" ) ) {
                joinButton.blur();
            }
        },

        _setOption: function ( key, value ) {
            var container;
            var element;
            var options;
            var self;

            self = this;
            element = self.element;
            options = self.options;

            container = element.children( "#" + options.containerIdentifier );

            switch ( key ) {
                case "backgroundColor":
                    container.css({
                        backgroundColor: value
                    });

                    break;
                case "color":
                    container.css({
                        color: value
                    });

                    break;
                case "containerClass":
                    container.removeClass()
                             .addClass( value );

                    break;
                case "containerIdentifier":
                    container.attr( "id", value );

                    break;
                case "containerWidth":
                    container.css({
                        width: value
                    });

                    break;
                case "displayStyle":
                    var inputText;

                    inputText = container.find( "#" + options.inputIdentifier );

                    container.find( "#" + options.labelIdentifier )
                             .find( "span" )
                             .css({
                                 cssFloat: ( value === 1 ? "left" : "none" ),
                                 lineHeight: ( options.displayStyle === 1 && options.labelLineHeight !== null ? Math.max( inputText.outerHeight(), parseInt( $.trim( options.labelLineHeight ) ) ) + "px" : options.labelLineHeight )
                             });

                    break;
                case "fieldsetClass":
                    container.find( "form" )
                             .find( "fieldset" )
                             .removeClass()
                             .addClass( value );

                    break;
                case "formIdentifier":
                    if ( options.hasForm ) {
                        container.find( "form" )
                                 .attr( "id", value );
                    }

                    break;
                case "formSubmitResultClass":
                    container.find( "form" )
                             .find( "fieldset" )
                             .find( "#" + options.formSubmitResultIdentifier )
                             .removeClass()
                             .addClass( value );

                    break;
                case "formSubmitResultFontFamily":
                    container.find( "form" )
                             .find( "fieldset" )
                             .find( "#" + options.formSubmitResultIdentifier )
                             .find( "p" )
                             .css({
                                 fontFamily: value
                             });

                    break;
                case "formSubmitResultIdentifier":
                    container.find( "form" )
                             .find( "fieldset" )
                             .find( "div" )
                             .first()
                             .attr( "id", value );

                    break;
                case "hasForm":
                    var parents;

                    parents = container.parents( "form" );

                    if ( value ) {
                        var children;
                        var parent;

                        children = container.children( "form" );
                        parent = container.parent();

                        if ( parent.is( "form" ) ) {
                            container.unwrap();
                        }

                        if ( children.length === 0 && parents.length === 0 ) {
                            var wrappedForm;

                            wrappedForm = $("<form />");

                            wrappedForm.attr( "id", options.formIdentifier );

                            container.find( "fieldset" )
                                     .wrap( wrappedForm );
                        }
                    } else {
                        container.find( "fieldset" )
                                 .unwrap();

                        if ( parents.length === 0 ) {
                            var form;

                            form = $("<form />");

                            form.attr( "id", options.formIdentifier );

                            container.next()
                                     .andSelf()
                                     .wrapAll( form );
                        }
                    }

                    self._on( $("#" + options.inputIdentifier), {
                        blur: self._inputBlurEventHandler,
                        click: self._inputClickEventHandler,
                        keydown: self._inputKeydownEventHandler
                    });

                    self._on( $("#" + options.joinButtonIdentifier), {
                        blur: self._joinButtonBlurEventHandler,
                        click: self._joinButtonClickEventHandler
                    });

                    self._on( $("#" + options.formIdentifier), {
                        submit: self._mailingListFormSubmitEventHandler
                    });

                    break;
                case "imageClass":
                    container.find( "#" + options.labelIdentifier )
                             .find( "img" )
                             .removeClass()
                             .addClass( value );

                    break;
                case "imageHeight":
                    container.find( "#" + options.labelIdentifier )
                             .find( "img" )
                             .css({
                                 height: value
                             });

                    break;
                case "imagePath":
                    container.find( "#" + options.labelIdentifier )
                             .find( "img" )
                             .attr( "src", value );

                    break;
                case "imageWidth":
                    container.find( "#" + options.labelIdentifier )
                             .find( "img" )
                             .css({
                                 width: value
                             });

                    break;
                case "inputBackgroundColor":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "input" )
                             .css({
                                 backgroundColor: value
                             });

                    break;
                case "inputBorderColor":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "input" )
                             .css({
                                 borderColor: value
                             });

                    break;
                case "inputClass":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "input" )
                             .removeClass()
                             .addClass( value );

                    break;
                case "inputColor":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "input" )
                             .css({
                                 color: value
                             });

                    break;
                case "inputFontFamily":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "input" )
                             .css({
                                 fontFamily: value
                             });

                    break;
                case "inputFontSize":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "input" )
                             .css({
                                 fontSize: value
                             });

                    break;
                case "inputHeight":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "input" )
                             .css({
                                 height: value
                             });

                    break;
                case "inputIdentifier":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "input" )
                             .attr( "id", value );

                    break;
                case "inputLineHeight":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "input" )
                             .css({
                                 lineHeight: value
                             });

                    break;
                case "inputMaxHeight":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "input" )
                             .css({
                                 maxHeight: value
                             });

                    break;
                case "inputMaxWidth":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "input" )
                             .css({
                                 maxWidth: value
                             });

                    break;
                case "inputName":
                    container.find( "fieldset" )
                             .find( "input" )
                             .attr( "name", value );

                    break;
                case "inputWidth":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "input" )
                             .css({
                                 width: value
                             });

                    break;
                case "inputValue":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset")
                             .find( "input" )
                             .attr( "value", value );

                    break;
                case "joinButtonBackgroundColor":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "a" )
                             .css({
                                 backgroundColor: value
                             });

                    break;
                case "joinButtonBorderColor":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "a" )
                             .css({
                                 borderColor: value
                             });

                    break;
                case "joinButtonClass":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "a" )
                             .removeClass()
                             .addClass( value );

                    break;
                case "joinButtonColor":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "a" )
                             .css({
                                 color: value
                             });
                    break;
                case "joinButtonFontFamily":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "a" )
                             .css({
                                 fontFamily: value
                             });

                    break;
                case "joinButtonFontSize":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "a" )
                             .css({
                                 fontSize: value
                             });

                    break;
                case "joinButtonIdentifier":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "a" )
                             .attr( "id", value );

                    break;
                case "joinButtonLineHeight":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "a" )
                             .css({
                                 lineHeight: value
                             });

                    break;
                case "joinButtonLink":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "a" )
                             .attr( "href", value );

                    break;
                case "joinButtonTitle":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "a" )
                             .attr( "title", value );

                    break;
                case "joinButtonValue":
                    container.find( "#" + options.formIdentifier )
                             .find( "fieldset" )
                             .find( "a" )
                             .text( value );

                    break;
                case "labelClass":
                    container.find( "#" + options.labelIdentifier )
                             .removeClass()
                             .addClass( value );

                    break;
                case "labelFontFamily":
                    container.find( "#" + options.labelIdentifier )
                             .css({
                                 fontFamily: value
                             });

                    break;
                case "labelFontSize":
                    container.find( "#" + options.labelIdentifier )
                             .css({
                                 fontSize: value
                             });

                    break;
                case "labelIdentifier":
                    container.find( "form" )
                             .find( "fieldset" )
                             .find( "label" )
                             .attr( "id", value );

                    break;
                case "labelLineHeight":
                    container.find( "#" + options.labelIdentifier )
                             .css({
                                 lineHeight: value
                             });

                    break;
                case "labelText":
                    container.find( "#" + options.labelIdentifier )
                             .find( "span" )
                             .text( value );

                    container.find( "#" + options.labelIdentifier )
                             .find( "img" )
                             .attr( "alt", value );

                    break;
                case "labelTextClass":
                    container.find( "#" + options.labelIdentifier )
                             .find( "span" )
                             .removeClass()
                             .addClass( value );

                    break;
                case "labelTextColor":
                    container.find( "#" + options.labelIdentifier )
                             .find( "span" )
                             .css({
                                 color: value
                             });

                    break;
                case "noticeClass":
                    container.find( "form" )
                             .find( "fieldset" )
                             .find( "#" + options.formSubmitResultIdentifier )
                             .next( "div" )
                             .removeClass()
                             .addClass( value );

                    break;
                case "noticeFontFamily":
                    container.find( "form" )
                             .find( "fieldset" )
                             .find( "#" + options.formSubmitResultIdentifier )
                             .next( "div" )
                             .find( "small" )
                             .css({
                                 fontFamily: value
                             });

                    break;
                case "noticeFontSize":
                    container.find( "form" )
                             .find( "fieldset" )
                             .find( "#" + options.formSubmitResultIdentifier )
                             .next( "div" )
                             .find( "small" )
                             .css({
                                 fontSize: value
                             });

                    break;
                case "noticeLineHeight":
                    container.find( "form" )
                             .find( "fieldset" )
                             .find( "#" + options.formSubmitResultIdentifier )
                             .next( "div" )
                             .find( "small" )
                             .css({
                                 lineHeight: value
                             });

                    break;
                case "noticeText":
                    container.find( "form" )
                             .find( "fieldset" )
                             .find( "#" + options.formSubmitResultIdentifier )
                             .next( "div" )
                             .find( "small" )
                             .append( value );

                    break;
                case "noticeTextColor":
                    container.find( "form" )
                             .find( "fieldset" )
                             .find( "#" + options.formSubmitResultIdentifier )
                             .next( "div" )
                             .find( "small" )
                             .css({
                                 color: value
                             });

                    break;
                default: break;
            }

            $.Widget.prototype
                    ._setOption
                    .apply( self, arguments );
        },

        destroy: function () {
            var self;

            self = this;

            self._destroy();
        },

        validate: function ( value ) {
            var flag;
            var pattern;

            flag = false;
            pattern = /^\b[A-Z0-9._\-%]+@[A-Z0-9\-.]+\.[A-Z]{2,4}\b$/i;
			
            if ( pattern.test( value ) ) {                
                flag = true;
            }

            return flag;
        }

    });

})( jQuery, window, document );