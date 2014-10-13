'use strict';
var fs = require('fs');

exports.angularHtmlify = {
    compile: function (test) {
        var actual = fs.readFileSync('./test/tmp/angular-basic.html', 'utf8');
        var expected = fs.readFileSync('./test/expected/angular-basic.html', 'utf8');
        test.equals(actual, expected);
        test.done();
    }
};
