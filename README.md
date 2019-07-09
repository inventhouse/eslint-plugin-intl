# eslint-plugin-intl

Check for strings that should be wrapped for translation by react-intl, but aren&#39;t

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-intl`:

```
$ npm install eslint-plugin-intl --save-dev
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
        "intl/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


ToDo
----
- put project in git
- figure out how to run eslint with my plugin

- identify a plain string
- distinguish between plain string and string in message

- start identifying different types of strings that should be flagged
    - template literals
    - aria-label
    - alt text

- identify more distinguishing criteria
    - css class name strings

### Doneyard

DONE: set up skeleton eslint plugin and rule

---
