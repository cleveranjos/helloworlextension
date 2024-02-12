define(['jquery', 'text!./style.css'],
    function ($) {
        'use strict';

        return {
            definition: {
                type: "items",
                component: "accordion",
                items: {
                    appearancePanel: {
                        uses: "settings",
                        items: {
                            DisplayText: {
                                ref: "displayText",
                                type: "string",
                                label: "Display Text",
                                defaultValue: "Hi! I´m an extension"
                            }
                        }
                    }
                }
            },
            paint: function ($element, layout) {
                $element.empty();
                $element.append('<div class="hw-content">' + layout.displayText + '</div>');
            }
        };
    });