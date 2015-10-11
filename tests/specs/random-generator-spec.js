/*global randomGenerator*/

describe('random generator', function () {
	'use strict';

	describe('generateAngle', function () {
		it('should return maxium angle of 60 for random generated 0.999', function () {
			spyOn(Math, 'random').and.returnValue(0.999);
			expect(randomGenerator.generateAngle()).toEqual(60);
		});

		it('should return minimum angle of 30 for random generated 0', function () {
			spyOn(Math, 'random').and.returnValue(0);
			expect(randomGenerator.generateAngle()).toEqual(30);
		});

		it('should return velocity of 45 for random generated 0.5', function () {
			spyOn(Math, 'random').and.returnValue(0.5);
			expect(randomGenerator.generateAngle()).toEqual(45);
		});
	});

	describe('generateVelocity', function () {
		it('should return maxium velocity of 200 for random generated 0.999', function () {
			spyOn(Math, 'random').and.returnValue(0.999);
			expect(randomGenerator.generateVelocity()).toEqual(200);
		});

		it('should return minimum velocity of 0 for random generated 0', function () {
			spyOn(Math, 'random').and.returnValue(0);
			expect(randomGenerator.generateVelocity()).toEqual(0);
		});

		it('should return velocity of 100 for random generated 0.5', function () {
			spyOn(Math, 'random').and.returnValue(0.5);
			expect(randomGenerator.generateVelocity()).toEqual(100);
		});
	});
});