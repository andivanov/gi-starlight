module.exports = function(grunt) {

  

  grunt.initConfig({
    notify_hooks: {
        options: {
            enabled: true,
            max_jshint_notifications: 5, // maximum number of notifications from jshint output
            title: "PHIX" // defaults to the name in package.json, or will use project directory's name
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest:'img/'
                }], 
            }
        },
        
        sprite:{
            all: {
                src: 'img/sprite-png-pre/*.png',
                destImg: 'img/sprite-png-post/sprite-main.png',
                padding:2,
                cssOpts:{
                    cssClass: function(item){
                        return '.' + item.name;
                    }
                },
                destCSS: 'css/sprites.css'
            }
        },

        iconizr: {
            options: {
                dims: true,
                common: "sprite-svg",
                padding: 1,
                render    : {
                    css     : false,
                    less    : 'less'
                }
            },
            your_target: {
                src      : 'img/sprite-svg-pre',
                dest     : 'less/svg/'
            }
        },

        less: {
            style: {
                files: {
                    "css/global.css": "less/global.less"
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['css/sprites.css', 'css/global.css'],
                dest: 'css/universal.css',
            },
        },
        cssmin: {
            combine: {
                files: {
                    'css/universal.min.css': ['css/universal.css']
                }
            }
        },
        watch: {
            css: {
                files: ['less/**.less','less/*/**.less','css/*.css','js/*.js'],
                tasks: ['less:style', 'concat:dist', 'cssmin:combine'],
                options: {
                    //port: 8888,
                    //livereload: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-iconizr');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // grunt.registerTask('build-sprite', ['iconizr']);
    grunt.registerTask('images', [ 'iconizr','imagemin', 'sprite',]);
    grunt.registerTask('default', [ 'less', 'concat', 'cssmin', 'watch' ]);
};








