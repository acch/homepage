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
            name: '470',
            width: 470
          },
          {
            name: '650',
            width: 650
          },
          {
            name: '890',
            width: 890
          },
          {
            name: '1070',
            width: 1070
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
