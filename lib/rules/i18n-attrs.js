/**
 * @fileoverview Requires that user-facing tag attributes be wrapped for internationalization by react-intl
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
            description: "Requires that user-facing tag attributes be wrapped for internationalization by react-intl",
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
            "JSXAttribute[name.name=/^aria-label$|^alt$/][value.type=Literal]": (node) => {
                if (node.name.name === "alt" && node.value.value === "") {
                    return;  // alt="" is used to keep some images from cluttering screenreaders
                }

                var s = node.value.value.trim();
                if (s.length > 25) {
                    s = `${s.substring(0, 26)}…`;
                }
                context.report({
                    node,
                    message: `Bare ${node.name.name}: "${s}"`,
                });
            }
        };
    }
};
