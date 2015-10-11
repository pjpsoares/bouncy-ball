/*global physicsEngine*/

describe('physics engine', function () {
	'use strict';

	describe('getDistanceX', function () {
		it('should return 0 for 0 velocity and 0 time', function () {
			expect(physicsEngine.getDistanceX(0, 0)).toBe(0);
		});

		it('should return 0 for 5 velocity and 0 time', function () {
			expect(physicsEngine.getDistanceX(5, 0)).toBe(0);
		});

		it('should return 0 for 0 velocity and 10 time', function () {
			expect(physicsEngine.getDistanceX(0, 10)).toBe(0);
		});

		it('should return 25 for 5 velocity and 10 time', function () {
			expect(physicsEngine.getDistanceX(5, 10)).toBe(50);
		});

		it('should return -25 for -5 velocity and 10 time', function () {
			expect(physicsEngine.getDistanceX(-5, 10)).toBe(-50);
		});
	});

	describe('getDistanceY', function () {
		it('should return 0 for 0 velocity and 0 time', function () {
			expect(physicsEngine.getDistanceY(0, 0)).toBe(0);
		});

		it('should return 0 for 5 velocity and 0 time', function () {
			expect(physicsEngine.getDistanceY(5, 0)).toBe(0);
		});

		it('should return -122.5 for 0 velocity and 10 time', function () {
			expect(physicsEngine.getDistanceY(0, 10)).toBe(-490);
		});

		it('should return -97.5 for 5 velocity and 10 time', function () {
			expect(physicsEngine.getDistanceY(5, 10)).toBe(-440);
		});

		it('should return -147.5 for -5 velocity and 10 time', function () {
			expect(physicsEngine.getDistanceY(-5, 10)).toBe(-540);
		});
	});

	describe('getVelocityX', function () {
		it('should return 0 for 0 velocity and 0 angle', function () {
			expect(physicsEngine.getVelocityX(0, 0)).toBe(0);
		});

		it('should return 0 for 0 velocity and 45 angle', function () {
			expect(physicsEngine.getVelocityX(0, 45)).toBe(0);
		});

		it('should return 50 for 50 velocity and 0 angle', function () {
			expect(physicsEngine.getVelocityX(50, 0)).toBe(50);
		});

		it('should return 0 for 50 velocity and 90 angle', function () {
			// Because of decimal rouding problems this will not equal zero
			expect(physicsEngine.getVelocityX(50, 90)).toBeCloseTo(0, 10);
		});

		it('should return -50 for 50 velocity and 180 angle', function () {
			expect(physicsEngine.getVelocityX(50, 180)).toBe(-50);
		});

		it('should return 30 for 50 velocity and 30 angle', function () {
			expect(physicsEngine.getVelocityX(50, 50)).toBeCloseTo(32.14, 2);
		});
	});

	describe('getVelocityY', function () {
		it('should return 0 for 0 velocity and 0 angle', function () {
			expect(physicsEngine.getVelocityY(0, 0)).toBe(0);
		});

		it('should return 0 for 0 velocity and 45 angle', function () {
			expect(physicsEngine.getVelocityY(0, 45)).toBe(0);
		});

		it('should return 50 for 50 velocity and 0 angle', function () {
			expect(physicsEngine.getVelocityY(50, 0)).toBe(0);
		});

		it('should return 0 for 50 velocity and 90 angle', function () {
			// Because of decimal rouding problems this will not equal zero
			expect(physicsEngine.getVelocityY(50, 90)).toBe(50);
		});

		it('should return -50 for 50 velocity and 180 angle', function () {
			expect(physicsEngine.getVelocityY(50, 270)).toBe(-50);
		});

		it('should return 30 for 50 velocity and 30 angle', function () {
			expect(physicsEngine.getVelocityY(50, 50)).toBeCloseTo(38.30, 2);
		});
	});

	describe('getTimeToHitTheGround', function () {
		it('should return 0 for 0 initial position and 0 initial velocity', function () {
			expect(physicsEngine.getTimeToHitTheGround(0, 0)).toBe(0);
		});

		it('should return 0 for 5 initial position and 0 initial velocity', function () {
			expect(physicsEngine.getTimeToHitTheGround(5, 0)).toBeCloseTo(1.01, 2);
		});

		it('should return 0 for 0 initial position and 10 initial velocity', function () {
			expect(physicsEngine.getTimeToHitTheGround(0, 10)).toBeCloseTo(2.04, 2);
		});

		it('should return 0 for 5 initial position and 10 initial velocity', function () {
			expect(physicsEngine.getTimeToHitTheGround(5, 10)).toBeCloseTo(2.46, 2);
		});

		it('should return 0 for 5 initial position and -10 initial velocity', function () {
			expect(physicsEngine.getTimeToHitTheGround(5, -10)).toBeCloseTo(0.42, 2);
		});
	});

	describe('getVelocityYAfterBounce', function () {
		it('should return 0 when velocity is 0', function () {
			expect(physicsEngine.getVelocityYAfterBounce(0)).toBe(0);
		});

		it('should return -8 when velocity is 10', function () {
			expect(physicsEngine.getVelocityYAfterBounce(10)).toBe(-8);
		});
	});

	describe('getVelocityYAfterTime', function () {
		it('should return 0 for 0 initial velocity and 0 time', function () {
			expect(physicsEngine.getVelocityYAfterTime(0, 0)).toBe(0);
		});

		it('should return 0 for 5 initial velocity and 0 time', function () {
			expect(physicsEngine.getVelocityYAfterTime(5, 0)).toBe(5);
		});

		it('should return 0 for 0 initial velocity and 10 time', function () {
			expect(physicsEngine.getVelocityYAfterTime(0, 10)).toBe(-98);
		});

		it('should return 25 for 5 initial velocity and 10 time', function () {
			expect(physicsEngine.getVelocityYAfterTime(5, 10)).toBe(-93);
		});

		it('should return -103 for -5 initial velocity and 10 time', function () {
			expect(physicsEngine.getVelocityYAfterTime(-5, 10)).toBe(-103);
		});
	});
});