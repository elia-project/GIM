
let x1 = 10;
let y1 = 20;
let y2 = y1 + 10;
let vel= 0.01;



var drop = [];


function setup(){
	createCanvas(400, 400);
	for(let i=0; i<200; i++){
		drop[i] = new Drop();
		
	}
	
};

function draw(){
	background(0);
	for(let i=0; i<200; i++){
		drop[i].show();
		drop[i].update();;
	}
	
	
}

function Drop(){
	this.x= random(0, width);
	this.y= random(0, -height);

	this.show  = function(){
		stroke(220,220,255);
		 line(this.x,this.y, this.x, this.y+10)

	}
	 

	this.update= function(){
		this.speed = random(5, 15);
		this.gravity = 1.05;
		this.y = this.y + this.speed * this.gravity;
		
		if (this.y > height){
			this.y = random(0, -height);
			this.gravity = 0;
		}
		
		
	}
	
}




//tutorial
//https://www.youtube.com/watch?v=eFaVK3_mWkM





// for(let i=0; i<100; i++){

// 	noStroke();
// 	fill(138, 43,226);
// 	ellipse(x1*i ,y1, 2);
// 	y1 = y1 + vel; 
// 	y2 = y2 + vel; 


// 	pos= i * random(1, 10)
// }














// // class drop{
// // 	constructor(x,y,x,y){
// // 		this.x = x;
// // 		this.y = y;
// // 		this.x = x;
// // 		this.y = y;
// // 	}
// // }

// // class drops{
// // 	constructor(){
// // 		this.x = width*0.5;
// // 		this.y = 0;
// // 		this.yspeed = 1;

// 	}

// }