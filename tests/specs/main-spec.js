/*global canvasDelegate randomGenerator canvas*/

describe('main', function () {
	'use strict';
	// We should get some way of correctly mocking time

	beforeEach(function () {
		spyOn(canvasDelegate, 'clear');
		spyOn(canvasDelegate, 'drawCircle');
		spyOn(randomGenerator, 'generateAngle').and.returnValue(45);
		spyOn(randomGenerator, 'generateVelocity').and.returnValue(20);
	});

	describe('when there\'s no balls to be drawn', function () {
		describe('and the we get to draw the canvas', function () {

			it('should clear the canvas', function (done) {
				setTimeout(function () {
					expect(canvasDelegate.clear).toHaveBeenCalled();
					done();
				}, 11);
			});

			it('should not draw anything', function (done) {
				setTimeout(function () {
					expect(canvasDelegate.drawCircle).not.toHaveBeenCalled();
					done();
				}, 11);
			});
		});
	});

	describe('when there are 2 balls to be drawn', function () {
		describe('and the we get to draw the canvas', function () {

			beforeEach(function () {
				canvas.onclick({
					clientX: 50,
					clientY: 400
				});
				canvas.onclick({
					clientX: 50,
					clientY: 400
				});
			});

			it('should clear the canvas', function (done) {
				setTimeout(function () {
					expect(canvasDelegate.clear).toHaveBeenCalled();
					done();
				}, 11);
			});

			it('should draw 2 balls', function (done) {
				// Because we can't really determine how many times this has happened
				setTimeout(function () {
					expect(canvasDelegate.drawCircle.calls.count()).toBeGreaterThan(1);
					done();
				}, 11);
			});
		});
	});
});