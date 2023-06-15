function setup(){
	createCanvas(windowWidth, windowHeight);
	loadFont('Orologio_Personale_2/ds_digital/DS-DIGIT.TTF', drawText);
}

function drawText(ds_digital) {
	fill('#ED225D');
	textFont(ds_digital, 36);
	text('ciao', 10, 50);
}

function draw(){
	let h = hour();
	let m = minute();
	let s = second();
	let ms = new Date().getMilliseconds();
	
	let r = h * 10.625;
	let g = m * 4.25;
	let b = s * 4.25;
	
	let casuale = random(0,255);
	
	
	//Variabili per la rotazione
	let angolo_h = TWO_PI / 12 * h + TWO_PI / 12 / 60 * m;
	let angolo_m = TWO_PI / 60 * m + TWO_PI / 60 * s / 60;
	let angolo_s = TWO_PI / 60 * s + TWO_PI / 60 * ms / 1000;
	
	//Variabili per visualizzare l'ora
	
	if(h < 10) h = "0" + h;
	if(m < 10) m = "0" + m;
	if(s < 10) s = "0" + s;
	let ora = h + ":" + m + ":" + s;
	
	let punti = 60;
	let font = 'ZCOOL QingKe HuangYou'
	
	
	background(r,g,b);
	
	
	
	


	// prima si sposta l'origine poi si fanno le azzioni come la rotazione.
	translate(width/2, height/2)
	scale(2);
	
		//bordo esterno
	// noStroke();
	// fill(255);
	// ellipse(0,0, 400);
	



	//secondi
	push();
	// rotazione della matrice
		rotate(angolo_s);
		
		// fill ('red')
		// noStroke();
		// ellipse(-2.5, -70, 5, -220);
		//ellipse(0, -180, 40)
		
		push();
			translate(0, -180);
			rotate(-angolo_s);
			
			textSize(punti*0.25);
			textFont(font);
			textAlign(CENTER, CENTER);
			fill(b);
			text(s, 0, 0);
		pop();
	pop();


	
	//minuti
	push();
		// rotazione della matrice
		 rotate(angolo_m);
		
		//  fill (20, 30, 50);
		// noStroke();
		// ellipse(-2.5, -40, 05, -180);

		push();
			translate(0, -140);
			rotate(-angolo_m);

			textSize(punti*0.5);
			textFont(font);
			textAlign(CENTER, CENTER);
			fill(g);
			text(m, 0, 0);
		pop();
	pop();
	
	
	
	
	
	//h
	push();
	// rotazione della matrice
		rotate(angolo_h);
		
		// fill (20, 30, 50);
		// noStroke();
		// ellipse(-2.5, -10, 05, -80);
	
		push();
			translate(0, -80);
			rotate(-angolo_h);
	
			textSize(punti);
			textFont(font);
			textAlign(CENTER, CENTER);
			fill(r);
			text(h, 0, 0);
		pop();
	pop();

	
	
	
	
}	

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}