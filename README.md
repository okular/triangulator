# Triangle Tester

Determine if a triangle is equilateral, isosceles, or scalene.

equilateral triangle = all three sides the same length.<br/>
isosceles triangle = at least two sides the same length.<br/>
scalene triangle = all sides of different lengths.

## Quick Note

To qualify as a triangle, the lengths of all sides of a shape must be greater than zero and the sum of the lengths of any two sides must be greater than or equal to the length of the third side. Reference [Triangle Inequality](https://en.wikipedia.org/wiki/Triangle_inequality)]

## Setup

Have node and jasmine installed on your machine.

## Tests

Execute the tests with:

    npm test

## Run

Run the program by:
	
	$node 
		> var Triangle = require('./triangle')
		> var triangle = new Triangle(2,2,2)
		>t.type()


## Notes

I have had virtually no time the past 4-5 days (including the weekend) with work being crazy.  I did set this up originally with ( npm make-runnable ) so you could just run node triangle.js triangle 2 2 2, but figured i would like to show some understanding of ES6 classes :).  