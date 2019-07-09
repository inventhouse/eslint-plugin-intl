/**
 * @fileoverview Requires that strings be wrapped for internationalization by react-intl
 * @author Ben Holt
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/intl-strings"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("intl-strings", rule, {

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
