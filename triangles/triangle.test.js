var triangleTest = require('./triangle');

test('not a triangle', function() {
	expect(triangleTest(1, 2, 7)).toEqual("not a triangle");
})

test('not a triangle 2', function() {
	expect(triangleTest(17, 4, 7)).toEqual("not a triangle");
})

test('obtuse', function() {
	expect(triangleTest(2, 4, 5)).toEqual("obtuse triangle");
})

test('acute', function() {
	expect(triangleTest(4, 5, 6)).toEqual("acute triangle");
})

test('right', function() {
	expect(triangleTest(3, 4, 5)).toEqual("right triangle");
})

test('right 2', function() {
	expect(triangleTest(5, 4, 3)).toEqual("right triangle");
})

test('equilateral', function() {
	expect(triangleTest(5, 5, 5)).toEqual("equilateral triangle");
})

test('acute isosceles', function() {
	expect(triangleTest(2, 5, 5)).toEqual("acute isosceles triangle");
})

test('obtuse isosceles', function() {
	expect(triangleTest(3, 3, 5)).toEqual("obtuse isosceles triangle");
})

test('degenerate', function() {
	expect(triangleTest(1, 2, 3)).toEqual("not a triangle");
})
