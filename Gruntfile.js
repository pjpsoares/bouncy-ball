'use strict';

module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        basePath: {
            app: 'app'
        },
        watch: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= basePath.app %>/*.html',
                '<%= basePath.app %>/styles/{,*/}*.css',
                '<%= basePath.app %>/scripts/{,*/}*.js',
                '<%= basePath.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
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
                        '<%= basePath.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: [
                        'dist'
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
        concat: {
            src: {
                src: ['app/scripts/**/*.js'],
                dest: 'dist/bouncy-ball.js'
            },
            css: {
                src: ['app/styles/**/*.css'],
                dest: 'dist/bouncy-ball.css'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/bouncy-ball.min.js': ['<%= concat.src.dest %>']
                }
            }
        },
        clean: {
            dist: ['dist'],
            buildEnd: ['dist/bouncy-ball.js', 'dist/bouncy-ball.css']
        },
        cssmin: {
            minify: {
                expand: true,
                src: ['<%= concat.css.dest %>'],
                ext: '.min.css'
            }
        },
        processhtml: {
            dist: {
                options: {
                    process: true,
                    data: {
                        title: 'Bouncy ball',
                        message: 'This is production distribution'
                    }
                },
                files: {
                    'dist/index.html': ['app/index.html']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask('generateDist', [
        'clean:dist',
        'concat:src',
        'concat:css',
        'uglify',
        'cssmin',
        'processhtml',
        'htmlmin',
        'clean:buildEnd'
    ]);

    grunt.registerTask('serve', ['connect:livereload', 'watch']);
    grunt.registerTask('serveDist', ['generateDist', 'connect:dist', 'watch']);

    grunt.registerTask('build', [
        'clean:dist',
        'eslint',
        'karma:singleRun',
        'generateDist'
    ]);
};