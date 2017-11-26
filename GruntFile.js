module.exports = function (grunt) {
    var input = "public_dev/";
    var output = "public/";
    grunt.initConfig({
        concat: {
            javascripts: {
                src: 'public_dev/js/**/*.js',
                dest: 'public/javascripts/build.js'
            },
            styles: {
                src: 'public_dev/stylesheets/**/*.css',
                dest: 'public/stylesheets/build.css'
            }
        }       
    });

    grunt.registerTask("speaking", function () {
        uglify: {
            build: {
                files: [{
                    expand: true,
                    src: 'public_dev/js/**/*.js',
                    dest: 'public/javascripts/build1.js',
                    cwd: 'public_dev/app'
                }]
            }
        }

    });

    grunt.registerTask("yelling", function () {



    });

    grunt.registerTask("clean:output",function(){
        clean: {
            build: {
                src: [output+'javascripts/**/*.js', output+'stylesheets/**/*.css', output+'images/**/*.+(png|jpg|jpeg|gif)']
            }
        }

        
    });

    grunt.registerTask("default", ['speaking', 'yelling', 'concat']);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

}