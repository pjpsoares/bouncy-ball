 /*global physicsEngine canvasDelegate*/

function BouncyBall(initX, initY, velocity, angle) {
	'use strict';

	// After bouncing if Y has almost no velocity remove the ball
	var MINIMUM_VELOCITY_FOR_Y_AFTER_BOUNCE = 1;

	var velocityX = physicsEngine.getVelocityX(velocity, angle);
	var velocityY = physicsEngine.getVelocityY(velocity, angle);
	var initialTime = new Date().getTime();

	// Because on the browser the bottom is the total height instead of zero, we need to convert it
	initY = canvasDelegate.getHeight() - initY;

	this.draw = function () {
		var timePassed = ((new Date().getTime()) - initialTime) / 1000;
		var x = initX + physicsEngine.getDistanceX(velocityX, timePassed);
		var y = initY + physicsEngine.getDistanceY(velocityY, timePassed);
		var timeToHitGround;
		var circleRadius = canvasDelegate.getCircleRadius();

		// The x is off the screen so we don't need to draw anything. Returns false so it is removed.
		if (x > canvasDelegate.getWidth() || x < 0) {
			return false;
		}

		//The y is off the screen so we don't need to draw it. Because it might come back we return true.
		if (y > canvasDelegate.getHeight()) {
			return true;
		}

		// The y hits the ground so we set the ball as a new launch updating the needed values.
		if (y - circleRadius <= 0) {
			timeToHitGround = physicsEngine.getTimeToHitTheGround(initY - circleRadius, velocityY);

			initialTime = initialTime + timeToHitGround * 1000;
			initX = initX + physicsEngine.getDistanceX(velocityX, timeToHitGround);
			initY = 0 + circleRadius;

			velocityY = physicsEngine.getVelocityYAfterBounce(
				physicsEngine.getVelocityYAfterTime(velocityY, timeToHitGround)
			);

			if (velocityY < MINIMUM_VELOCITY_FOR_Y_AFTER_BOUNCE) {
				return false;
			}

			return this.draw();
		}

		canvasDelegate.drawCircle(x, canvasDelegate.getHeight() - y);
		return true;
	};
}
