module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    excluir: [
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
    manter: [
      'controle_lab',
      'monitoria'
    ],

    ftpush: {
      rodrigoalves: {
        auth: {
          host: 'ftp.rodrigoalves.me',
          port: 21,
          authKey: 'key1'
        },
        src: './',
        dest: './',
        exclusions:'<%= excluir %>',
        keep: '<%= manter %>'
      },
      rodrigom: {
        auth: {
          host: 'ftp.rodrigom.tk',
          port: 21,
          authKey: 'key2'
        },
        src: './',
        dest: './',
        exclusions:'<%= excluir %>',
        keep: '<%= manter %>'
      }
    },
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-ftpush');

  // Default task(s).
  grunt.registerTask('ftp1','ftpush:rodrigoalves');
  grunt.registerTask('ftp2','ftpush:rodrigom');
  grunt.registerTask('ftp','ftpush');

};