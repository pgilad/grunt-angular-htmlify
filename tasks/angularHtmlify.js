'use strict';
var chalk = require('chalk');

module.exports = function (grunt) {
    grunt.registerMultiTask('angularHtmlify',
        'Change your ng-attributes to data-ng-attributes for HTML5 validation',
        function () {
            var options = this.options();
            var htmlify = require('angular-html5')({
                customPrefixes: options.customPrefixes
            });

            this.files.forEach(function (file) {
                var valid = file.src.filter(function (filepath) {
                    // Warn on and remove invalid source files (if nonull was set).
                    if (!grunt.file.exists(filepath)) {
                        grunt.log.warn('Source file ' + chalk.cyan(filepath) + ' not found.');
                        return false;
                    } else {
                        return true;
                    }
                });
                if (!valid.length) {
                    grunt.fail.warn('Destination (' + file.dest + ') not written because src files were empty.');
                }
                var filename = valid[0];
                var data = grunt.file.read(filename);
                grunt.verbose.writeln('Checking if file ' + chalk.cyan(filename) + ' has ng-attributes to convert');
                var shouldCheck = htmlify.test(data);
                if (!shouldCheck) {
                    grunt.verbose.writeln('File ' + chalk.cyan(filename) + ' doesn\'t have any ng-attributes. Skipping');
                    return;
                }
                grunt.verbose.writeln('Running angular-html5 replace on the file ' + chalk.cyan(filename));
                grunt.file.write(file.dest, htmlify.replace(data));
            });
        });
};
