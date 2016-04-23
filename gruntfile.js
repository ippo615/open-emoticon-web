
module.exports = function(grunt) {

  grunt.initConfig({
		webfont: {
			//target1: {
				icons: {
					src: 'icons/*.svg',
					dest: 'build/',
					options: {
						/*
						customOutputs are not generated...
						customOutputs: [{
							template: 'templates/icon-utilities.css',
							dest: 'build/',
							context: {
								utilityClassPrefix: 'oe'
							}
						}],{
							template: 'templates/icon-list.html',
							dest: 'build/icon-list.html'
						},{
							template: 'templates/index.html',
							dest: 'build/index.html'
						}],
						*/
						engine: 'node', // or 'fontforge' (looks horrible)
						font: 'open-emoticon',
						templateOptions: {
							baseClass: 'oe',
							classPrefix: 'oe-',
							mixinPrefix: 'oe-'
						}
					}
				}
			//}
		}
  });

	grunt.loadNpmTasks('grunt-webfont');
  grunt.registerTask('default', ['webfont']);

};
