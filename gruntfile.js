module.exports = function(grunt) {

  

  grunt.initConfig({
    notify_hooks: {
        options: {
            enabled: true,
            max_jshint_notifications: 5, // maximum number of notifications from jshint output
            title: "PHIX" // defaults to the name in package.json, or will use project directory's name
            }
        },
        less: {
            style: {
                files: {
                    "css/global.css": "less/global.less"
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'css/minified/global.min.css': ['css/global.css']
                }
            }
        },
        svgsprite: {
            spriteCSS:{
                src:    ['img/svg/'],
                dest:   'img/sprite'
            }
        },
        watch: {
            css: {
                files: ['less/**.less','css/*.css','js/*.js'],
                tasks: ['less:style', 'cssmin:combine' ],
                options: {
                    livereload: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-svg-sprite');
    
    grunt.registerTask('default', [ 'less', 'cssmin', 'svgsprite', 'watch' ]);
};
