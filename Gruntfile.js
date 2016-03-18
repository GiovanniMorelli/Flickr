module.exports = function(grunt) {

    grunt.initConfig({
        // set plugin
        pkg: grunt.file.readJSON('package.json'),
        cssmin:{
            combine:{
                files:{
                    'public/stylesheets/main.css':['public/stylesheets/style.css']
                }

            }
        },
        uglify:{
            dist:{
                files:{
                    'public/javascripts/script.min.js':['public/javascripts/script.js','public/javascripts/common.js']
                }
            }
        },
        autoprefixer: {
            options: {
                // We need to `freeze` browsers versions for testing purposes.
                browsers: ['opera 12', 'ff 15', 'chrome 25']
            },

            single_file: {
                src: 'public/stylesheets/style.css',
                dest: 'public/stylesheets/style.css'
            }
        },
    });

    // init plugin

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-autoprefixer');

    // define task
    grunt.registerTask("default",['autoprefixer','cssmin','uglify']);

};
