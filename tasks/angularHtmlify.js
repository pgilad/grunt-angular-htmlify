'use strict';

module.exports = function (grunt) {
    grunt.registerMultiTask('angularHtmlify',
        'Change your ng-attributes to data-ng-attributes for HTML5 validation',
        function () {
            var options = this.options();
            var customPrefixes = options.customPrefixes;
            var htmlify = require('angular-html5')({
                customPrefixes: customPrefixes
            });

            this.files.forEach(function (file) {
                var filename = file.src[0];
                var data = grunt.file.read(filename);
                if (!htmlify.test(data)) {
                    return;
                }
                data = htmlify.replace(data);
                grunt.file.write(file.dest, data);
            });
        });
};
