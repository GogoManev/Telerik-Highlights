// 1. Suzdavame promenlivi
let myX = 0,
    myX2 = 0,
    myY2 = 400,
    dx = 0,
    dy = 0,
    dx2 = 0,
    dy2 = 0,
    cameraX = 100,
    iv,
    vragDX = [],
    vragX = [],
    vragY = [],
    Igrach2 = false,
    igrach2button = true,
    igrach2X = 730,
    igrach2Y = 530,
    brVragove = 50,
    ib,
    backgroundX = [],
    backgroundY = [],
    brBackgound = 100,
    myY = 0;
 
for(iv = 0; iv < brVragove; iv = iv + 1){
    vragY[iv] = randomInteger(520);
    vragX[iv] = randomInteger(5000);
}

for(ib = 0; ib < brBackgound; ib = ib + 1){
    backgroundX[ib] = 0
    backgroundY[ib] = 0
}

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
   // myX = myX + (mouseX - myX) / 10;
    //myY = myY + (mouseY - myY) / 10;
    myX = myX + dx;
    myY = myY + dy;
    myX2 = myX2 + dx2;
    myY2 = myY2 + dy2;
    cameraX = myX - 50;
    dx = dx / 1.01;
    dy = dy / 1.01;
    dx2 = dx2 / 1.01;
    dy2 = dy2 / 1.01;
    
    
    for(iv = 0; iv < brVragove; iv = iv + 1){
        if(areColliding(vragX[iv]-cameraX, vragY[iv], 50, 50, myX-cameraX, myY, 80, 60)){
            dx = dx - 0.15
        }
        
        vragX[iv] = vragX[iv] + randomInteger(7)
    }
    
    
    if(Igrach2 == true){
        
        if(isKeyPressed[39]){
            dx2 = dx2 + 0.1
        }
        
        if(isKeyPressed[37]){
            dx2 = dx2 - 0.1
        }
        
        if(isKeyPressed[38]){
            dy2 = dy2 - 0.1
        }
        
        if(isKeyPressed[40]){
            dy2 = dy2 + 0.1
        }
        
        for(iv = 0; iv < brVragove; iv = iv + 1){
            if(areColliding(vragX[iv]-cameraX, vragY[iv], 50, 50, myX2-cameraX, myY2, 80, 60)){
                dx2 = dx2 - 0.15
            }
        
        vragX[iv] = vragX[iv] + randomInteger(7)
    }
        
        
    }
    
    if(Igrach2 == false){
        dx2 = dx2 + 0.1;
        
         for(iv = 0; iv < brVragove; iv = iv + 1){
        if(areColliding(vragX[iv]-cameraX, vragY[iv], 50, 50, myX2-cameraX, myY2, 80, 60)){
            dx2 = dx2 - 0.1
            myY2 = myY2 - 20
        }
        
        vragX[iv] = vragX[iv] + randomInteger(4)
    }
    }
    
    if(isKeyPressed[68]){
        dx = dx + 0.1
    }
    
    if(isKeyPressed[65])[
        dx = dx - 0.1
    ]
    
    if(isKeyPressed[87]){
        dy = dy - 0.1
    }
    
    if(isKeyPressed[83]){
        dy = dy + 0.1
    }
   
    
    if(myY > 240){
        myY = 240;
        dy = 0
    }
    
    if(myY < 0){
        myY = 0
        dy = 0
    }
    
    if(myY2 > 550){
        myY2 = 550
    }
    
    if(myY2 < 300){
        myY2 = 300
    }
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
   
    drawImage(backMushrooms, 0-(cameraX%800), 0, 800, 300);
    drawImage(backMushrooms, 0-(cameraX%800)+800, 0, 800, 300);
    drawImage(backMushrooms, 0-(cameraX%800), 300, 800, 300);
    drawImage(backMushrooms, 0-(cameraX%800)+800, 300, 800, 300);
    
     for(iv = 0; iv < brVragove; iv = iv + 1){
      drawImage(flyMan, vragX[iv]-cameraX, vragY[iv], 60, 60)
   }
    
    drawImage(plane, myX-cameraX, myY, 80, 60);
    drawImage(planeGray, myX2-cameraX, myY2, 80, 60)
    
    if(igrach2button == true){
    drawImage(boxAlienGreenSuit, igrach2X, igrach2Y, 70, 70)
    }
    
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
    
    if(igrach2button == true){
    if(areColliding(igrach2X, igrach2Y, 70, 70, mouseX, mouseY, 70, 70)){
        Igrach2 = true;
        igrach2button = false;
        myX2 = myX;
        my2Y = 450;
        dx2 = 0;
        }
    }
}
