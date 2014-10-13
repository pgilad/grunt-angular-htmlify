# [grunt](https://github.com/gruntjs/grunt)-angular-htmlify

> Change your ng-attributes to data-ng-attributes for HTML5 validation using [angular-html5](https://github.com/pgilad/angular-html5)

[![NPM Version](http://img.shields.io/npm/v/grunt-angular-htmlify.svg?style=flat)](https://npmjs.org/package/grunt-angular-htmlify)
[![NPM Downloads](http://img.shields.io/npm/dm/grunt-angular-htmlify.svg?style=flat)](https://npmjs.org/package/grunt-angular-htmlify)
[![Build Status](http://img.shields.io/travis/pgilad/grunt-angular-htmlify.svg?style=flat)](https://travis-ci.org/pgilad/grunt-angular-htmlify)

*Issues with the output should be reported on the angular-html5 [issue tracker](https://github.com/pgilad/angular-html5/issues).*

## Install

```sh
$ npm install --save-dev grunt-angular-htmlify
```

## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    'angularHtmlify': {
        options: {
            customPrefixes: ['ui-'] //optional
        },
        dist: {
            files: {
                'dist/index.html': 'src/index.html'
            }
        }
    }
});

grunt.registerTask('default', ['angularHtmlify']);
```

## Options

See the `angular-html5` [options](https://github.com/pgilad/angular-html5#api)

## License

MIT © [Gilad Peleg](https://github.com/pgilad)
