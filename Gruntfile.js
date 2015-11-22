//var pngquant = require('imagemin-pngquant');
//var mozjpeg = require('imagemin-mozjpeg');
//var gifsicle = require('imagemin-gifsicle');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    ftpush: {
      build: {
        auth: {
          host: 'ftp.rodrigoalves.me',
          port: 21,
          authKey: 'key1'
        },
        src: './',
        dest: './',
        exclusions: [
          '**/.DS_Store',
          '**/Thumbs.db',
          '.git',
          'README.md',
          'node_modules',
          'grunt',
          'grunt.cmd',
          'package.json',
          'Gruntfile.js',
          '.ftppass',
          '.gitattributes',
          '.gitignore',
          '.grunt'
        ],
        keep: [
          'controle_lab'
        ]
      },
      build2: {
        auth: {
          host: 'ftp.rodrigom.tk',
          port: 21,
          authKey: 'key2'
        },
        src: './',
        dest: './',
        exclusions: [
          '**/.DS_Store',
          '**/Thumbs.db',
          '.git',
          'README.md',
          'node_modules',
          'grunt',
          'grunt.cmd',
          'package.json',
          'Gruntfile.js',
          '.ftppass',
          '.gitattributes',
          '.gitignore',
          '.grunt'
        ],
        keep: [
          'controle_lab'
        ]
      }
    },
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-ftpush');

  // Default task(s).
  grunt.registerTask('ftp1','ftpush:build');
  grunt.registerTask('ftp2','ftpush:build2');

};