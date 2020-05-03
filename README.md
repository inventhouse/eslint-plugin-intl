# eslint-plugin-intl

Check for strings that should be wrapped for translation by react-intl, but aren't

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install [eslint-plugin-intl](https://github.com/inventhouse/eslint-plugin-intl):

```
$ npm install inventhouse/eslint-plugin-intl --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-intl` globally.

## Usage

Add `intl` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "intl"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "intl/no-bare-text": ["error"],
        "intl/i18n-attrs": ["error"]
    }
}
```

## Supported Rules

- **no-bare-text** - Requires that jsx text be wrapped for internationalization by react-intl
- **i18n-attrs** - Requires that user-facing tag attributes be wrapped for internationalization by react-intl (currently `aria-label` and non-empty `alt`)


Notes
-----
- exceptions in rules are silently caught and dropped (maybe?)

- __Development__
    - post to a public GitHub repo
    - Add to `package.json`: 
        > `"eslint-plugin-mine": "ghuser/eslint-plugin-mine#branch"`
    - Add to `.eslintrc`:
        > ```
        > "plugins": [
        >   "mine"
        > ],
        > "rules": {
        >   "mine/my-rule": ["error"]
        > }
        > ```
    - (If already installed) `rm -rf node_modules eslint-plugin-mine`
    - `make install`
    - `make lint`


ToDo
----
- look into eslint-plugin-jsx-a11y for possible techniques/ideas

- start identifying different types of strings that should be flagged
    - template literals
    - DONE: aria-label
    - DONE: alt text

- identify more distinguishing criteria
    - css class name strings

- eslint-disable-next-line doesn't seem to work (at least with intl/no-bare-text)
    - eslint-disable-line works only if it comes before bare text :-/

### Doneyard

DONE: set up skeleton eslint plugin and rule

- DONE: put project in git
- DONE: figure out how to run eslint with my plugin

DONE: identify a plain string

DONE: distinguish between plain string and string in message

---
