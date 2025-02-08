// 1. Suzdavame promenlivi
let myX = 50,
    myY = 300,
    dx = 0,
    dy = 0,
    nekiv = true,
    plX = 400,
    plY = 300,
    plSize = 200,
    plVertikalnaLiE,
    nekivX = 600,
    nekivY = 310,
    izstrelqnaLiE = false,
    ip;

for(ip=0;ip<5;ip=ip+1){
    plX[ip] = randomInteger(600);
    plY[ip] = randomInteger(400)
}

function dvijiPticata(){
    myX = myX + dx;
    myY = myY + dy;
    dy = dy + 0.1;
}

function izstrelai(){
    dx = 50 - mouseX;
	dy = 300 - mouseY;
	izstrelqnaLiE = true;  
}

function startiraiNivoto(){
    myX = 50;
    myY = 300;
    izstrelqnaLiE = false;
}

function otskachane(){
    dy = -dy;
    dx = -dx;
}

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
	if(izstrelqnaLiE == true){	
		dvijiPticata();
	}
    
    if(areColliding(myX, myY, 30, 30, nekivX, nekivY, 60, 60)){
        nekiv = false;
        console.log("Bravo! Ti oceli vraga!");
        otskachane();
    }
    
    if(myX < 0){
        myX = 0
    }
    
    if(myY > 600){
        myY = 600;
        dy = 0;
    }
    
    if(myX > 760){
        myX = 760;
        myY = myY + 1;
        myX = myX - 1;
    }
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backGrass, 0, 0, 800, 600);
    drawImage(boxItemDisabled, 35, 300, 15, 150);
    drawImage(boxItemDisabled, 90, 300, 15, 150);
    drawImage(powerupRed, 40, 320, 60, 10);
    drawImage(bird, myX, myY, 40, 40);
    
    if(nekiv == true){
        drawImage(jelly[2], nekivX, nekivY, 60, 60);
        
    }
    
	if(!izstrelqnaLiE){
		izstrelai();	
        
		for(ip = 0;ip < 100;ip = ip + 1){
			dvijiPticata();
			drawImage(box, myX, myY, 6, 6);
		}
        startiraiNivoto();
	}
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

function mouseup() {
	izstrelai();
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
