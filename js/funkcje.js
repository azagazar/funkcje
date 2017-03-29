function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
		return a * h / 2;
	}

	else {
		return "Nieprawidłowe dane"
	}
}

console.log(getTriangleArea(10,6))
