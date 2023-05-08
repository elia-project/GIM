function setup(){
	createCanvas(400, 400)
}

function draw(){
	background(220,220,220);

	point(30,50);

	point(31,50);
	point(32,50);
	point(33,50);

	point(0,0);

	//funzione per disegnare un segmento
	line(50,60,200,280);

	noStroke();
	fill(255,130,60);
	rect(120,120, 120,90);

	stroke(255,0,0);
	fill(210, 130, 255)
	rect(150,150, 120,90);
	
	strokeWeight(3);
	fill(180, 250, 205, 128);
	ellipse(230, 270, 80, 80,);
	

	noFill();
	triangle(310, 90 ,390, 160, 260, 180);
	


	

}