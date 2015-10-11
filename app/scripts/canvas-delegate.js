/*global canvas*/

var canvasDelegate = (function () {
	'use strict';

	var CIRCLE_RADIUS = 10;
	var CIRCLE_COLOR = '#0000ff';
	var context = canvas.getContext('2d');
	var canvasWidth;
	var canvasHeight;

	function setCanvasDimensions() {
		canvasWidth = window.innerWidth;
		canvasHeight = window.innerHeight;
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
	}

	setCanvasDimensions();
	window.addEventListener('resize', setCanvasDimensions, false);

	function drawCircle(x, y) {
		context.beginPath();
		context.fillStyle = CIRCLE_COLOR;
		context.arc(x, y, CIRCLE_RADIUS, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
	}

	function getWidth() {
		return canvasWidth;
	}

	function getHeight() {
		return canvasHeight;
	}

	function clear() {
		context.clearRect(0, 0, getWidth(), getHeight());
	}

	function getCircleRadius() {
		return CIRCLE_RADIUS;
	}

	return {
		drawCircle: drawCircle,
		clear: clear,
		getWidth: getWidth,
		getHeight: getHeight,
		getCircleRadius: getCircleRadius
	};
})();
