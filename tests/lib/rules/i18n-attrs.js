/**
 * @fileoverview Requires HTML attributes that are shown to the user to be wrapped for internationalization by react-intl
 * @author Ben Holt
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/i18n-attrs");
var RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("i18n-attrs", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "\"Plain message\"",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
