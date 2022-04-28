/* -------------------------------------------------------------------------- *\
   Gruntfile - project build instructions
   --------------------------------------------------------------------------

   This file is part of Achim Christ's personal homepage.
   https://www.achim-christ.de/

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
        '<%= responsive_images.resp_hero.dest %>*',
        '_includes/*/style.scss'
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
      resp_hero: {
        options: {
          concurrency: 2,
          quality: 85,
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
        expand: true,
        flatten: true,
        src: 'imgsrc/resp_hero/*.{png,jpg,gif}',
        dest: 'img/src/'
      },
      resp_small: {
        options: {
          concurrency: 2,
          quality: 85,
          sizes: [
            {
              name: '270',
              width: 270
            },
            {
              name: '370',
              width: 370
            },
            {
              name: '445',
              width: 445
            },
            {
              name: '510',
              width: 510
            }
          ]
        },
        expand: true,
        flatten: true,
        src: 'imgsrc/resp_small/*.{png,jpg,gif}',
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
    },

    postcss: {
      options: {
        processors: [
          //require('autoprefixer')
        ]
      },
      site: {
        files: {
          '_includes/private/style.scss': 'scss/private.scss',
          '_includes/business/style.scss': 'scss/business.scss'
        }
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
    'imagemin',
    'postcss'
  ]);

};
