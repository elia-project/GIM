
let snow;



function setup(){
	createCanvas(400, 400);
	
	snow = new snowStorm();
	background(0,255);
	
};

function draw(){
	background(0,0,80);
	snow.update();
		
};

function snowStorm(){
	this.pos = [];
	this.vel = [];
	this.size = [1,2,3,4,5];
	
	this.flow = [];
	this.breeze = [];
	this.rot = [];
	
	this.yoff = [1,2];
	let dense = 175;
	let sizeset = 0;

	for (let i=0; i<dense; i++){

		this.yoff.push(random(100));
		this.pos.push(createVector(random(width), random(height)));

		sizeset = lerp(sizeset, 6, 0.1);
		this.size.push(8-sizeset);
		this.vel.push(createVector(0, this.size[i]));
		this.vel[i].mult(1.25);

		this.flow.push(0);
		this.breeze.push(random(0.75));
		this.rot.push(random(-PI, PI));

		

	};


	this.update = function(){

		for (let i=0; i<dense; i++){
			this.yoff[i] += 0.05;
			this.pos[i].add(this.vel[i]);

			this.flow[i] = map(noise((i+1)*0.01,
										this.yoff[i],
										frameCount*0.01),
										0,1,-this.size[i]*4,
										this.size[i]*4);
			this.flow[i] = map(noise(this.yoff[i]*0.1,
										frameCount*0.00001),
									0,1,
									-TWO_PI,
									TWO_PI);
			
			let swtichmove = map(noise(this.yoff[i]*0.1,
										frameCount*0.005),
									0,1,
									-3,3);
			
			let move = map(this.size[i],1,5,0.1,2);
			move *= swtichmove;

			this.pos[i].x += move;
			this.bounds(i);

			push();
			let scol = map(this.size[i],1,5,64,255);
			stroke(scol,150);
			strokeWeight(this.size[i]);

			push();
			translate(this.pos[i].x+this.flow[i],
					this.pos[i].y+this.flow[i]);
			
			rotate(this.rot[i]);

			let flip = map(this.rot[i],-TWO_PI,TWO_PI,
							-this.size[i]*4,
							this.size[i]*4);
			
			let scale = this.size[i];
			line(-scale-flip,0,scale+flip);
			line(scale,-scale,-scale,scale);

			pop();

			pop();

		};

	};

	this.bounds = function(i){

		if(this.pos[i].y>height) {
			this.pos[i] = createVector(random(width),0);
			this.vel[i] = createVector(0, this.size[i]);
			this.vel[i].mult(1.25);
		}

		if(this.pos[i].x>width){
			this.pos[i].x =0;
		}
		
		if(this.pos[i].x<0){
			this.pos[i].y = width;
		}
		
	};

};




//https://www.youtube.com/watch?v=u0PG4MY39Eo