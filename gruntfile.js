
/**
 * expose `grunt`
 */

module.exports = grunt;


/**
 * `grunt` main method
 *
 * @param {object} `grunt` instance
 */

function grunt( grunt ) {

	// configs
	grunt.initConfig({
		concat: concat(),
		watch: watch(),
		uglify: uglify()
	});

	// all grunt modules
	require( 'load-grunt-tasks' )( grunt );

	// tasks
	grunt.registerTask();
}


/**
 * `grunt concat` task
 */

function concat() {

}


/**
 * `grunt uglify` task
 */

function uglify() {

}


/**
 * `grunt watch` task
 */

function watch() {

}