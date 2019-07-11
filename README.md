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

docker-compose exec prospectus sh -c "eslint --rule 'intl/intl-strings: error' --config .eslintrc.base.yaml --no-eslintrc --plugin intl ."


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

- DONE: put project in git
- DONE: figure out how to run eslint with my plugin

---
