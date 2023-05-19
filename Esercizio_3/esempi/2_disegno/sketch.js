
let posX = 200;
let posY = 200;
let velX = 1.5;
let velY = 30;

function setup(){
	createCanvas(400, 400);
	background(200,30,200);
	
};

function draw(){
	
	// rect(10, posY, 10, 80);
	// rect(380, mouseY, 10, 80);

	


	//translate(5,0);
	for (let i=0; i<random(2,12); i++){
		
		fill(i*100)
		ellipse(posX + i*10, posY, random(1,20));
		posX = posX + velX;
		posY = posY + velY;

		if(posX >= width-100 || posX <= 20){
			velX = -velX 
	
		}
		
		if(posY >= height-20 || posY == 20){
			velY = -velY;
		}
	}



	// fill(random(255),random(255),random(255));
	// ellipse(posX+30, posY+30, 50, 50);
	// posX = posX + velX;
	// posY = posY + velY;

	// if(posX >= width-20 || posX == 20){
	// 	velX = -velX  

	// }
	
	// if(posY >= height-20 || posY == 20){
	// 	velY = -velY;  
	// }
}


function keyPressed(){
	save("pong_01.png")
}
