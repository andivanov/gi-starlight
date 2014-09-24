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
                    dest:'img/minified/'
                }]
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
                    'css/global.min.css': ['css/global.css']
                }
            }
        },
        watch: {
            css: {
                files: ['less/*.less','css/*.css','js/*.js', 'img/*.{png,jpg,gif}'],
                tasks: ['less:style', 'cssmin:combine', 'imagemin:dynamic'],
                options: {
                    livereload: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    
    grunt.registerTask('default', [ 'less', 'imagemin', 'cssmin', 'watch' ]);
};
