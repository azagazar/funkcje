function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
		return a * h / 2;
	}

	else {
		return "Nieprawidłowe dane"
	}
}

console.log(getTriangleArea(10,6))

function getTriangle1Area(a, h) {
	if ((a > 0) && (h > 0)) {
		return a * h / 2;
	}

	else {
		return "Nieprawidłowe dane"
	}
}

console.log(getTriangle1Area(10, 15))

function getTriangle2Area(a, h) {
	if ((a > 0) && (h > 0)) {
		return a * h / 2;
	}

	else {
		return "Nieprawidłowe dane"
	}
}

console.log(getTriangle2Area(10, 0))
