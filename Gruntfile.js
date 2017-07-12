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
      site: [
        '<%= imagemin.site.dest %>*',
        '<%= responsive_images.site.dest %>*'
      ]
    },

    copy: {
      site: {
        files: [
          {
            expand: true,
            flatten: true,
            src: 'imgsrc/*.{png,jpg,gif}',
            dest: 'img/src/'
          }
        ]
      }
    },

    responsive_images: {
      options: {
        concurrency: 2,
        sizes: [
          {
            name: '510',
            width: 510
          },
          {
            name: '690',
            width: 690
          },
          {
            name: '930',
            width: 930
          },
          {
            name: '1110',
            width: 1110
          }
        ]
      },
      site: {
        expand: true,
        flatten: true,
        src: 'imgsrc/resp/*.{png,jpg,gif}',
        dest: 'img/src/'
      }
    },

    imagemin: {
      site: {
        expand: true,
        flatten: true,
        src: 'img/src/*.{png,jpg,gif}',
        dest: 'img/'
      }
    }

  });

  // load the plugin(s)
  require('load-grunt-tasks')(grunt);

  // default task
  grunt.registerTask('default', [
    'clean',
    'copy',
    'responsive_images',
    'imagemin'
  ]);

};
