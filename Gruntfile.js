module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' //注释名称
            },
            build_all: {
                files: [{
                    expand: true,
                    cwd: 'src', //js目录下
                    src: '**/*.js', //所有js文件
                    dest: 'dist' //输出到此目录下
                }]
            }

        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: ['Gruntfile.js', 'src/*.js', 'src/**/*.js']
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerTask("default", ['uglify', 'jshint']);
};
