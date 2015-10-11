var physicsEngine = (function () {
	'use strict';

	var GRAVITY_ACCELERATION = 9.8;
	var COERCION_VALUE = 0.8;

	function getDistance(initialVelocity, time, acceleration) {
		return initialVelocity * time - 0.5 * acceleration * time * time;
	}

	function getDistanceX(initialVelocity, time) {
		return getDistance(initialVelocity, time, 0);
	}

	function getDistanceY(initialVelocity, time) {
		return getDistance(initialVelocity, time, GRAVITY_ACCELERATION);
	}

	function getVelocityX(velocity, angle) {
		return velocity * Math.cos(convertToRadians(angle));
	}

	function getVelocityY(velocity, angle) {
		return velocity * Math.sin(convertToRadians(angle));
	}

	function convertToRadians(angle) {
		return Math.PI * (angle / 180);
	}

	function getTimeToHitTheGround(initialY, initialVelocityY) {
		return (-1 * initialVelocityY -
				Math.sqrt(initialVelocityY * initialVelocityY + 2 * GRAVITY_ACCELERATION * initialY))/
			GRAVITY_ACCELERATION * -1;

	}

	function getVelocityYAfterBounce(velocityWhenHittingTheGround) {
		 return velocityWhenHittingTheGround * COERCION_VALUE * -1;
	}

	function getVelocityYAfterTime(velocity, time) {
		return  velocity - GRAVITY_ACCELERATION * time;
	}

	return {
		getDistanceX: getDistanceX,
		getDistanceY: getDistanceY,
		getVelocityX: getVelocityX,
		getVelocityY: getVelocityY,
		getTimeToHitTheGround: getTimeToHitTheGround,
		getVelocityYAfterBounce: getVelocityYAfterBounce,
		getVelocityYAfterTime: getVelocityYAfterTime
	};
})();
