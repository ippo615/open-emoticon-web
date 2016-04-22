
module.exports = function(grunt) {

  grunt.initConfig({
		webfont: {
			//target1: {
				icons: {
					src: 'icons/*.svg',
					dest: 'build/fonts',
					destCss: 'build/fonts',
					options: {
						engine: 'node', // or 'fontforge' (looks horrible)
						font: 'name-of-font',
						templateOptions: {
							baseClass: 'blah-icon',
							classPrefix: 'blah-',
							mixinPrefix: 'blah-'
						}
					}
				}
			//}
		}
  });

	grunt.loadNpmTasks('grunt-webfont');
  grunt.registerTask('default', ['webfont']);

};
