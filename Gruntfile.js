'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        'angularHtmlify': {
            compile: {
                options: {
                    sourceMap: true
                },
                files: {
                    'test/tmp/angular-basic.html': 'test/fixtures/angular-basic.html'
                }
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
