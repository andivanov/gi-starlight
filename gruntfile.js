module.exports = function(grunt) {

  grunt.registerTask('default', [ 'less', 'imagemin', 'cssmin',/*'concat','uglify',*/'watch' ]);

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
            }
        }
    },
    less: {
        style: {
            files: {
                "css/global.css": "less/global.less"
            }
        }
    },
   /* concat: {
        dist: {
          src: [
                'css/jquery-ui-1.8.20.custom.min.css', 
                'css/jquery.ui.datepicker.min.css', 
                'css/bootstrap-3.1.1.min.css',
                'css/phix-home-animate.css',
                'css/phix-home-animation-hover.css',
                'css/phix-home-animation-slide.css'
            ],
          dest: 'css/global.css',
        },
      }, */
    cssmin: {
        combine: {
            files: {
                'css/global.min.css': ['css/global.css']
            }
        }
    },
    /*uglify: {
        my_target: {
            files: {
                'js/gihome.min.js': ['js/gihome.js'],
                'js/accessibility.min.js': ['js/accessibility.js']
            }
        }
    },*/
    watch: {
      css: {
        files: ['less/*.less','css/*.css','js/*.js', 'img/*.{png,jpg,gif}'],
        tasks: ['less:style', 'concat:dist','cssmin:combine', 'uglify:my_target', 'imagemin:dynamic'],
        options: {
            livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.loadNpmTasks('grunt-notify');
  grunt.task.run('notify_hooks');
};
