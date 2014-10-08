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
                src: 'img/sprite-pre/*.png',
                destImg: '../img/sprite-post/sprite-main.png',
                cssOpts:{
                    cssClass: function(item){
                        return '.' + item.name;
                    }
                },
                destCSS: 'css/sprites.css'
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
                    'css/minified/universal.min.css': ['css/universal.css']
                }
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-spritesmith');
    
    grunt.registerTask('default', [ 'less', 'concat', 'cssmin', 'imagemin', 'sprite', 'watch' ]);
};
