/**
 * @fileoverview Requires that jsx text be wrapped for internationalization by react-intl
 * @author Ben Holt
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Requires that jsx text be wrapped for internationalization by react-intl",
            category: "Best Practices",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {
            JSXText: (node) => {
                if (node.raw.match(/\w+/)) {
                    var s = node.raw.trim();
                    if (s.length > 25) {
                        s = `${s.substring(0, 26)}…`;
                    }
                    context.report({
                        node,
                        message: `Bare text: "${s}"`,
                    });
                }
            }
        };
    }
};
