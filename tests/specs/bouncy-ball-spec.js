/*global canvasDelegate BouncyBall*/

describe('bouncy ball', function () {
	'use strict';

	var CANVAS_HEIGHT = 1024;

	beforeAll(function () {
		jasmine.clock().install();
	});

	afterAll(function () {
		jasmine.clock().uninstall();
	});

	beforeEach(function () {
		spyOn(canvasDelegate, 'drawCircle');
		spyOn(canvasDelegate, 'getHeight').and.returnValue(CANVAS_HEIGHT);
	});

	describe('with a bouncy ball with (20, 600) initial position 100 velocity and 45 angle', function () {
		// Initial position of canvas heigth is the same as 0 on a normal referential

		beforeEach(function () {
			this.baseTime = new Date(2015, 11, 10);
			jasmine.clock().mockDate(this.baseTime);

			this.bouncyBall = new BouncyBall(20, 600, 100, 45);
		});

		describe('when drawn after 0 seconds', function () {
			beforeEach(function () {
				this.drawResult = this.bouncyBall.draw();
			});

			it('should draw a circle on (0, CANVAS_HEIGHT)', function () {
				expect(canvasDelegate.drawCircle).toHaveBeenCalledWith(20, 600);
			});

			it('should return true', function () {
				expect(this.drawResult).toEqual(true);
			});
		});

		describe('when drawn after 2 seconds', function () {
			beforeEach(function () {
				jasmine.clock().tick(2000);
				this.drawResult = this.bouncyBall.draw();
			});

			it('should draw a circle on (0, CANVAS_HEIGHT)', function () {
				expect(canvasDelegate.drawCircle.calls.argsFor(0)[0]).toBeCloseTo(161.42, 2);
				expect(canvasDelegate.drawCircle.calls.argsFor(0)[1]).toBeCloseTo(478.18, 2);
			});

			it('should return true', function () {
				expect(this.drawResult).toEqual(true);
			});
		});

		describe('when drawn after 10 seconds (x is off the canvas width)', function () {
			beforeEach(function () {
				jasmine.clock().tick(10000);
				this.drawResult = this.bouncyBall.draw();
			});

			it('should not draw a circle', function () {
				expect(canvasDelegate.drawCircle).not.toHaveBeenCalled();
			});

			it('should return true', function () {
				expect(this.drawResult).toEqual(false);
			});
		});
	});

	describe('with a bouncy ball with (20, 600) initial position 0 velocity and 45 angle', function () {
		// Initial position of canvas heigth is the same as 0 on a normal referential

		beforeEach(function () {
			this.baseTime = new Date(2015, 11, 10);
			jasmine.clock().mockDate(this.baseTime);

			this.bouncyBall = new BouncyBall(20, 600, 0, 45);
		});

		describe('when drawn after 0 seconds', function () {
			beforeEach(function () {
				this.drawResult = this.bouncyBall.draw();
			});

			it('should draw a circle on (0, CANVAS_HEIGHT)', function () {
				expect(canvasDelegate.drawCircle).toHaveBeenCalledWith(20, 600);
			});

			it('should return true', function () {
				expect(this.drawResult).toEqual(true);
			});
		});

		describe('when drawn after 2 seconds', function () {
			beforeEach(function () {
				jasmine.clock().tick(2000);
				this.drawResult = this.bouncyBall.draw();
			});

			it('should draw a circle on (0, CANVAS_HEIGHT)', function () {
				expect(canvasDelegate.drawCircle.calls.argsFor(0)[0]).toBeCloseTo(20, 2);
				expect(canvasDelegate.drawCircle.calls.argsFor(0)[1]).toBeCloseTo(619.6, 2);
			});

			it('should return true', function () {
				expect(this.drawResult).toEqual(true);
			});
		});

		describe('when drawn after 10 seconds (the ball should have bounced)', function () {
			beforeEach(function () {
				jasmine.clock().tick(10000);
				this.drawResult = this.bouncyBall.draw();
			});

			it('should draw a circle on (0, CANVAS_HEIGHT)', function () {
				expect(canvasDelegate.drawCircle.calls.argsFor(0)[0]).toBeCloseTo(20, 2);
				expect(canvasDelegate.drawCircle.calls.argsFor(0)[1]).toBeCloseTo(958.96, 2);
			});

			it('should return true', function () {
				expect(this.drawResult).toEqual(true);
			});
		});

		describe('when drawn after 100 seconds (the ball should have stopped bouncing)', function () {
			beforeEach(function () {
				jasmine.clock().tick(100000);
				this.drawResult = this.bouncyBall.draw();
			});

			it('should not draw a circle', function () {
				expect(canvasDelegate.drawCircle).not.toHaveBeenCalled();
			});

			it('should return true', function () {
				expect(this.drawResult).toEqual(false);
			});
		});
	});

	describe('with a bouncy ball with (20, 15) initial position 100 velocity and 45 angle', function () {
		// Initial position of canvas heigth is the same as 0 on a normal referential

		beforeEach(function () {
			this.baseTime = new Date(2015, 11, 10);
			jasmine.clock().mockDate(this.baseTime);

			this.bouncyBall = new BouncyBall(20, 15, 100, 45);
		});

		describe('when drawn after 2 seconds (y is off the canvas height)', function () {
			beforeEach(function () {
				jasmine.clock().tick(2000);
				this.drawResult = this.bouncyBall.draw();
			});

			it('should draw a circle on (0, CANVAS_HEIGHT)', function () {
				expect(canvasDelegate.drawCircle).not.toHaveBeenCalled();
			});

			it('should return true', function () {
				expect(this.drawResult).toEqual(true);
			});
		});
	});
});
