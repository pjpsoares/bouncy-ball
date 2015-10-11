'use strict';

module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'app'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= yeoman.app %>/*.html',
                '<%= yeoman.app %>/styles/{,*/}*.css',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    open: true,
                    base: [
                        'tests',
                        '<%= yeoman.app %>'
                    ]
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        eslint: {
            options: {
                configFile: 'conf/eslint.json'
            },
            target: ['app/scripts/**/*.js', 'tests/**/*.js']
        },
        karma: {
            options: {
                frameworks: ['jasmine'],
                browsers: ['PhantomJS'],
                files: ['tests/utils/canvas-mock.js', 'app/scripts/**/*.js', 'tests/specs/**/*.js'],
                preprocessors: {
                    'app/scripts/**/*.js': ['coverage']
                },
                reporters: ['progress', 'coverage'],
                coverageReporter: {
                    reporters: [
                        { type: 'html' }, // HTML format readable by humans
                        { type: 'text-summary' } // Terminal output
                    ]
                }
            },
            unit: {
                singleRun: false
            },
            singleRun: {
                singleRun: true
            }
        },
        uglify: {
            dist: {
                files: {src: 'app/scripts/**/*.js', dest: 'dest/bouncy-ball.min.js'}
            }
        },
        clean: ['dist']
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('server', function(target) {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', function(target) {
        grunt.task.run([
            'eslint',
            'karma:singleRun'
        ]);
    });
};