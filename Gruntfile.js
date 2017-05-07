/* -------------------------------------------------------------------------- *\
   Gruntfile - project build instructions
   --------------------------------------------------------------------------

   This file is part of Achim Christ's personal homepage.
   https://acch.github.io/

   Copyright 2017 Achim Christ

\* -------------------------------------------------------------------------- */

module.exports = function(grunt) {
  "use strict";

  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      docs: [
        '<%= imagemin.site.dest %>*'
      ]
    },

    imagemin: {
      site: {
        expand: true,
        flatten: true,
        src: 'img/*.{png,jpg,gif}',
        dest: 'img/min/'
      }
    }

  });

  // load the plugin(s)
  require('load-grunt-tasks')(grunt);

  // default task
  grunt.registerTask('default', [
    'clean',
    'imagemin'
  ]);

};
