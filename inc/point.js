"use strict";

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	distanceSquared(point) {
		return (this.x - point.x)**2 + (this.y - point.y)**2;
	}

	draw(color) {
		strokeWeight(8);
		stroke(color.r, color.g, color.b);
		fill(color.r, color.g, color.b);
		ellipse(this.x, this.y, 10, 10);
	}
}
