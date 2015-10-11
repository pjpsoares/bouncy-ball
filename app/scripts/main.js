/*global randomGenerator BouncyBall canvasDelegate canvas*/

(function () {
	'use strict';

	var REDRAW_RATE = 10;
	var bouncyBalls = [];

	function drawAllBalls() {
		var i = bouncyBalls.length - 1;

		canvasDelegate.clear();
		for (; i >= 0; i--) {
			if (!bouncyBalls[i].draw()) {
				bouncyBalls.splice(i, 1);
			}
		}
	}

	function listenForClick() {
		canvas.onclick = function (event) {
			bouncyBalls.push(new BouncyBall(
				event.clientX, event.clientY, randomGenerator.generateVelocity(), randomGenerator.generateAngle()
			));
		};
	}

	(function () {
		setInterval(drawAllBalls, REDRAW_RATE);
		listenForClick();
	})();
})();
