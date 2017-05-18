var Triangle = require('./triangle');

describe('Triangle', function() {

  it('should output equilateral if all sides are equal', function() {
    var triangle = new Triangle(4,4,4);
    expect(triangle.type()).toEqual('equilateral');
  });

  it('should output equilateral if all sides are equal', function() {
    var triangle = new Triangle(30,30,30);
    expect(triangle.type()).toEqual('equilateral');
  });

  it('should output isosceles if the last two sides are equal', function() {
    var triangle = new Triangle(5,6,6);
    expect(triangle.type()).toEqual('isosceles');
  });

  it('should output isosceles if the first two sides are equal', function() {
    var triangle = new Triangle(3,3,4);
    expect(triangle.type()).toEqual('isosceles');
  });

  it('should output isosceles if the first and last sides are equal', function() {
    var triangle = new Triangle(5,4,5);
    expect(triangle.type()).toEqual('isosceles');
  });

  it('should output isosceles if the last two sides are equal', function() {
    var triangle = new Triangle(5,5,4);
    expect(triangle.type()).toEqual('isosceles');
  });

  it('should output isosceles if exactly two sides are equal', function() {
    var triangle = new Triangle(26,26,10);
    expect(triangle.type()).toEqual('isosceles');
  });

  it('should output scalene if no sides are equal', function() {
    var triangle = new Triangle(5,6,7);
    expect(triangle.type()).toEqual('scalene');
  });

  it('should output scalene if no sides are equal even if large', function() {
    var triangle = new Triangle(12,13,14);
    expect(triangle.type()).toEqual('scalene');
  });

  it('should output scalene if no sides are equal', function() {
    var triangle = new Triangle(6,5,4);
    expect(triangle.type()).toEqual('scalene');
  });

  it('should throw an error if there are no sizes', function() {
    var triangle = new Triangle(0,0,0);
    expect(triangle.type.bind(triangle)).toThrow();
  });

  it('should throw an error if there are negative numbers as they are not valid', function() {
    var triangle = new Triangle(4,5,-6);
    expect(triangle.type.bind(triangle)).toThrow();
  });

  it('should throw an error if the input is in violation of the triangle inequality theorem', function() {
    var triangle = new Triangle(2,2,5);
    expect(triangle.type.bind(triangle)).toThrow();
  });

  it('should throw an error if the input is in violation of the triangle inequality theorem 2', function() {
    var triangle = new Triangle(8,4,3);
    expect(triangle.type.bind(triangle)).toThrow();
  });

  it('should throw an error if the input is in violation of the triangle inequality theorem 3', function() {
    var triangle = new Triangle(12,2,5);
    expect(triangle.type.bind(triangle)).toThrow();
  });

  it('should throw an error if the input contains any non-integers', function() {
    var triangle = new Triangle('a',2,2);
    expect(triangle.type.bind(triangle)).toThrow();
  });

  it('should throw an error if the input contains any non-integers', function() {
    var triangle = new Triangle(2,'a',2);
    expect(triangle.type.bind(triangle)).toThrow();
  });

  it('should throw an error if the input contains any non-integers', function() {
    var triangle = new Triangle(2,2,'a');
    expect(triangle.type.bind(triangle)).toThrow();
  });

});
