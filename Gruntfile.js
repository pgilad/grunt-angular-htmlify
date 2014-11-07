'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        'angularHtmlify': {
            compile: {
                files: {
                    'test/tmp/angular-basic.html': 'test/fixtures/angular-basic.html'
                }
            },
            many: {
                files: [{
                    expand: true, // Enable dynamic expansion.
                    cwd: 'test/fixtures/', // Src matches are relative to this path.
                    src: ['**/*.html'], // Actual pattern(s) to match.
                    dest: 'tmp/' // Destination path prefix.
                }]
            }
        },
        nodeunit: {
            tasks: ['test/test.js']
        },
        clean: {
            test: ['test/tmp/**']
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('default', ['clean', 'angularHtmlify', 'nodeunit', 'clean']);
};
