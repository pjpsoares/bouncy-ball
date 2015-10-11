/*global canvasDelegate canvasContext*/

describe('canvasDelegate', function () {
	'use strict';

	describe('drawCircle', function () {
		var x = 25;
		var y = 50;

		beforeEach(function () {
			canvasDelegate.drawCircle(x, y);
		});

		it('should use canvas context to draw a circle', function () {
			expect(canvasContext.beginPath).toHaveBeenCalledWith();
			expect(canvasContext.arc).toHaveBeenCalledWith(x, y, 10, 0, Math.PI * 2, true);
			expect(canvasContext.closePath).toHaveBeenCalledWith();
			expect(canvasContext.fill).toHaveBeenCalledWith();
		});
	});

	describe('clear', function () {
		beforeEach(function () {
			canvasDelegate.clear();
		});

		it('should call clearRect of the canvas context', function () {
			expect(canvasContext.clearRect).toHaveBeenCalled();
		});
	});

	describe('getCircleRadius', function () {
		it('should return the default value of 10', function () {
			expect(canvasDelegate.getCircleRadius()).toEqual(10);
		});
	});
});