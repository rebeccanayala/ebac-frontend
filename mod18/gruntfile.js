module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    grunt.registerTask('olaGrunt', function() {
        console.log('Olá Grunt');
    });
};


