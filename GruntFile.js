module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    var inPut_folder = "public_dev";
    var outPut_folder = "public";

    grunt.initConfig({
        concat: {
            dist: {
                src: ['/public_dev/js/**/*.js'],
                dest: ['/public/javascripts/build.js']
            }
        }
    });

    grunt.registerTask("speak", function () {



    });

    grunt.registerTask("yell", function () {



    });

    grunt.registerTask("default", ['speak', 'yell']);



}