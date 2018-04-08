"use strict";

const SIDE = 700;
let bufferLength = parseInt(prompt("Combien de points voulez vous créer par tour de boucle ?"));
let points = new Array(bufferLength);
let colorOfPoints = new Array(points.length);
let centralPoint = new Point(SIDE/2, SIDE/2);

let numberOfPoints = 0;
let numberOfPointsOnDisk = 0;

let pi;

let valueContainer;

function setup() {
	valueContainer = document.getElementById("valueContainer");
	createCanvas(SIDE, SIDE);
	background(255);
	drawCircle();
}

function draw() {
	pick();
	drawPoints();
	printPi();
}

function drawCircle() {
	strokeWeight(4)
	stroke(0);
	noFill();
	ellipse(centralPoint.x, centralPoint.y, SIDE, SIDE);
}

function pick() {
	for(let i = 0; i < points.length; i++) {
		points[i] = new Point(randomInt(0, SIDE), randomInt(0, SIDE));
		
		if(points[i].distanceSquared(centralPoint) <= (SIDE/2)**2) {
			numberOfPointsOnDisk++;
			colorOfPoints[i] = new Color(0, 255, 255);
		} else {
			colorOfPoints[i] = new Color(0, 255, 0);
		}
		numberOfPoints++;
	}
}

function drawPoints() {
	for(let i = 0; i < points.length; i++) {
		points[i].draw(colorOfPoints[i]);
	}
}

function printPi() {
	pi = 4 * numberOfPointsOnDisk/numberOfPoints; 
	valueContainer.innerHTML = "";
	valueContainer.insertAdjacentHTML("beforeend", pi);
}
