
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
	grunt.registerTask( 'default', [ 'concat', 'uglify' ]);
}


/**
 * `grunt concat` task
 */

function concat() {
	return {
		tiko: {
			src: [
				'./lib/base/core.base.js',
				'./lib/core/core.config.js',
				'./lib/core/core.events.js',
				'./lib/core/core.util.js',
				'./lib/core/core.log.js',
				'./lib/core/core.pubsub.js',
				'./lib/core/core.storage.js',
				'./lib/core/core.moduleBase.js',
				'./lib/core/core.moduleFactory.js',
				'./lib/core/core.moduleMain.js',
				'./lib/core/core.pageBase.js'
			],
			dest: './dest/tiko.js'
		}
	};
}


/**
 * `grunt uglify` task
 */

function uglify() {
	return {
		tiko: {
			options: {
	      preserveComments: 'some'
	    },
	    files: {
	      './dest/tiko.min.js': [ './dest/tiko.js' ]
	    }
		}
	}
}


/**
 * `grunt watch` task
 */

function watch() {

}