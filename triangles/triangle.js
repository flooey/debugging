var triangleType = function(a, b, c) {
	if (a + b < c) {
		return "not a triangle";
	}
	if (a + c < c) {
		return "not a triangle";
	}
	if (b + c < a) {
		return "not a triangle";
	}
	if (a = b = c) {
		return "equilateral triangle";
	}
	var baseType = "triangle";
	if ((a == b) || (b == c) || (a == c)) {
		baseType = "isosceles " + baseType;
	}
	if ((a * a) + (b * b) == (c * c)) {
		return "right " + baseType;
	}
	if ((a * a) + (b * b) < (c * c)) {
		return "acute " + baseType;
	} else {
		return "obtus " + baseType;
	}
}

module.exports = triangleType;
