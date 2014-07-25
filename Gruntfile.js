module.exports = function (grunt) {

    var expandFiles = function (glob) {
        return grunt.file.expand({
            filter: 'isFile'
        }, glob);
    };
    var proxyquire = require('proxyquireify');

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            clean: ["dest/"],
            copy: {
                sound: {
                    files: [
                        {expand: true, cwd: './assets/sounds', src: ['**/*.*'], dest: 'dest/assets/sounds'}
                    ]
                }
            },
            htmlmin: {
                min: {
                    options: {
                        removeComments: true,
                        collapseWhitespace: true
                    },
                    files: {
                        'dest/index.html': 'dest/index.html'
                    }
                }
            },
            cssmin: {
                combine: {
                    files: {
                        'dest/assets/css/bundle.css': ['assets/css/**/*.css']
                    }
                }
            },
            watch: {
                main: {
                    files: ['./assets/js/**/*.js', './assets/css/**/*.css', './*.html', './templates/**/*.hbs'],
                    tasks: ['htmlmin:min', 'browserify:main', 'cssmin:combine'],
                    options: {
                        spawn: false,
                        livereload: true
                    }
                },
                test: {
                    files: ['./assets/js/**/*.js', 'test/**/*.js'],
                    tasks: ['browserify:test', 'jasmine']
                }
            },
            connect: {
                main: {
                    options: {
                        port: 9090,
                        livereload: true,
                        middleware: function (connect) {
                            return [
                                function (req, res, next) {
                                    res.setHeader('Access-Control-Allow-Origin', '*');
                                    res.setHeader('Access-Control-Allow-Methods', '*');
                                    next();
                                } ,
                                // Serve static files.
                                connect.static('dest'),
                                // Make empty directories browsable.
                                connect.directory('dest')
                            ]
                        }
                    }
                }
            },
            browserify: {
                main: {
                    src: [ './assets/js/**/*.js' ],
                    dest: './dest/assets/js/bundle.js',
                    options: {
                        bundleOptions: {
                            require: expandFiles(['./assets/js/**/*.js'])
                        },
                        transform: ['browserify-handlebars']
                    }
                },
                test: {
                    src: ['test/spec/**/*.js'],
                    dest: 'dest/test_bundle.js',
                    options: {
                        transform: ['browserify-handlebars'],
                        plugin: [proxyquire.plugin]
                    }
                }
            },
            uglify: {
                build: {
                    files: {
                        'dest/assets/js/bundle.js': ['dest/assets/js/bundle.js']
                    }
                }
            },
            imagemin: {
                min: {
                    files: [
                        {
                            expand: true,
                            cwd: './assets/img',
                            src: ['**/*.{png,jpg,gif}'],
                            dest: 'dest/assets/img'
                        }
                    ]
                }
            },
            jasmine: {
                src: 'dest/assets/js/bundle.js',
                options: {
                    specs: 'dest/test_bundle.js'
                }
            },
            jshint: {
                files: [
                    'assets/js/**/*.js'
                ],
                options: {
                    ignores: [
                        'assets/js/libs/**/*.js'
                    ],
                    reporter: require('jshint-stylish'),
                    "boss": true,
                    "browser": true,
                    "sub": true,
                    "eqnull": true,
                    "expr": true,
                    "forin": true,
                    "evil": true,
                    "newcap": true,
                    "globals": {
                        "define": true,
                        "jQuery": true
                    }
                }
            },
            bumper: {
                options: {
                    files: ["package.json"],
                    updateConfigs: ['pkg'],
                    runTasks: false,
                    add: true,
                    addFiles: ["."],
                    commit: true,
                    commitMessage: "Release v%VERSION%",
                    commitFiles: ["-a"],
                    createTag: true,
                    tagName: "v%VERSION%",
                    tagMessage: "Version %VERSION%",
                    push: true,
                    pushTo: "origin",
                    npm: false,
                    npmTag: "Release v%VERSION%",
                    gitDescribeOptions: "--tags --always --abbrev=1 --dirty=-d"
                }
            },
            htmlbuild: {
                dist: {
                    src: 'index.html',
                    dest: 'dest/',
                    options: {
                        beautify: true,
                        data: {
                            version: grunt.file.readJSON('package.json').version
                        }
                    }
                }
            }
        }
    );
    /** Use a plugin to load each and every task (instead of using loadNpmTasks **/
    require('load-grunt-tasks')(grunt);

    /** main dev task with livereload and so on **/
    grunt.registerTask('default', ['clean', 'copy:sound', 'htmlbuild', 'htmlmin','imagemin', 'cssmin:combine', 'browserify:main', 'connect:main', "watch:main"]);

    /** to release a new version, this task increases the version tag and commit it to git **/
    grunt.registerTask('release', ['lint', 'clean', 'browserify', 'jasmine', 'bumper']);

    /** roughly the same than the dev taks but without livereload. This generates a dest folder which contains everything that is needed for Photobooth.JS **/
    grunt.registerTask('deploy', ['clean', 'copy:sound', 'htmlbuild', 'htmlmin', 'cssmin:combine', 'imagemin', 'browserify:main', 'uglify:build']);


    grunt.registerTask('test', ['lint', 'clean', 'browserify', 'jasmine', 'watch:test']);

    grunt.registerTask('travis', ['lint', 'clean', 'browserify', 'jasmine']);

    grunt.registerTask('lint', ['jshint']);

};
