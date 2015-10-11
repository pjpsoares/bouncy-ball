var randomGenerator = (function () {
	'use strict';

	var MINIMUM_ANGLE = 30;
	var MAXIMUM_ANGLE = 60;
	var MINIMUM_VELOCITY = 0;
	var MAXIMUM_VELOCITY = 200;

	/**
	 * Returns a random integer between min (inclusive) and max (inclusive)
	 */
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function generateAngle() {
		return getRandomInt(MINIMUM_ANGLE, MAXIMUM_ANGLE);
	}

	function generateVelocity() {
		return getRandomInt(MINIMUM_VELOCITY, MAXIMUM_VELOCITY);
	}

	return {
		generateAngle: generateAngle,
		generateVelocity: generateVelocity
	};
})();
