// 1. praim ei tiq neshta xd
let myX = 0,
    patron = false,
    patronX = 9,
    patronY = 520,
    vragX = 700,
    vragY = 0,
    vragDX = 3,
    vrag = true,
    vrag2 = false,
    bazaX = 350,
    bazaY = 400,
    vrag2X = 1,
    vrag2Y = 0,
    tochki = 0,
    brRestartirane = 0,
    bonusJivot = false,
    restartX = 620,
    restartY = 520,
    bonusJivotY = 0,
    bonusJivotX = 100,
    jivoti = 5,
    myY = 420;

function update() {
    if(jivoti > 0){
    // mnogo dalag kodd
    myX = myX + (mouseX - myX);
    vragY = vragY + 2;
    vrag2X = vrag2X + (mouseX - vrag2X) / 30;
    patronY = patronY - 5;
    
    if(patron == true){
        patronY = patronY - 2;
    }
    
        
    if(bonusJivot == true){
      bonusJivotY = bonusJivotY + 2;
    }
    
    if(tochki > 20){
        vragY = vragY + 3;
        vragX = vragX + 2;
    }
    
    if(patron == false){
        patronY = 450;
    }
    if(myX > 740){
        myX = 740
    }
    
    if(vrag == true && areColliding(vragX, vragY, 80, 80, patronX, patronY, 50, 50)){
                    tochki = tochki + 1;
                    console.log("Imash", tochki, "tochki");
                    patron = false;
                    vragY = 0;
                    vragX = randomInteger(500);  
    }
        
    if(bonusJivot == true && areColliding(bonusJivotX, bonusJivotY, 80, 80, patronX, patronY, 50, 50)){
                jivoti = jivoti + 1;
                bonusJivotX = randomInteger(500);
                bonusJivotY = 0;
                patron = false;
        }
        
    if(vrag == true && areColliding(vragX, vragY, 80, 80, bazaX, bazaY, 150, 100)){
        jivoti = jivoti - 2;
        console.log("O ne, pipnaha ti bazata. Gubish 2 jivota.");
        vragY = 0;
        vragX = randomInteger(500);
    }
        
    if(vrag2 == true && areColliding(vrag2X, vrag2Y, 80, 80, bazaX, bazaY, 150, 100)){
        jivoti = jivoti - 2;
        console.log("O ne, pipnaha ti bazata. Gubish 2 jivota.");
        vrag2Y = 0;
        vrag2X = randomInteger(500);
    }
        
    if(vrag2 == true && areColliding(vrag2X, vrag2Y, 80, 80, patronX, patronY, 50, 50)){
        tochki = tochki + 1;
        console.log("Imash", tochki, "tochki");
        patron = false;
        vrag2Y = 0; 
        vrag2X = randomInteger(500);
        }
        
        if( vrag == true && areColliding(vragX, vragY, 80, 80, myX, myY, 50, 50)){
                    jivoti = jivoti - 1;
                    vragY = 0;
    }
        if(vrag2 == true && areColliding(vrag2X, vrag2Y, 80, 80, myX, myY, 50, 50)){
                        jivoti = jivoti - 1;
                        vrag2Y = 0;  
    }
    
    if(vrag2X > 720){
        vrag2X = 720
    }
    
    if(patronY < 0){
        patron = false;
        patronY = 420;

    }
    
    if(vrag == true && vragY > 400){
        vragY = 0;
        vragX = randomInteger(500);       
    }
    
    if(vrag2 == true && vrag2Y > 400){
        vrag2Y = 0;
        vrag2X = randomInteger(500);      
}
    
    if(vrag2Y > 400){
        vrag2Y = 0;
    }
        
        if(tochki > 12 && jivoti < 5){
        bonusJivot = true;
        }
        
        if(jivoti > 5){
            jivoti = 5;
        }
        
        if(bonusJivotY > 400){
            bonusJivotY = 0;
        }
        
        if(jivoti == 5){
            bonusJivot = false;
        }
        
        if(tochki > 49){
            vrag = false;
            vrag2 = true;
            vrag2Y = vrag2Y + 8;
        }
        
        if(tochki == 1){
            brRestartirane = 0;
        }
        
        if(brRestartirane == 10){
            console.log("Bravo, ti otkri tainoto nivo!")
            tochki = tochki + 10000;
            patronY = patronY - 20;
            vrag = true;
            vrag2 = true;
            vrag2Y = vrag2Y - 5;
        }
    }
}

function draw() {
    // 3. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    drawImage(playerShip2_orange, 0, 510, 50, 50);
    drawImage(repair, restartX, restartY, 60, 60);
    
    
     if(tochki < 21){
    drawImage(backForest, 0, 0, 800, 500);
    drawImage(gem[12], 720, 520, 60, 60);
    }
    
    if(tochki > 20){
    drawImage(backTrees, 0, 0, 800, 500);
    drawImage(gem[31], 720, 520, 60, 60);
    }
    
    if(tochki > 49){
    drawImage(backWaterfall, 0, 0, 800, 500);
    drawImage(gem[9], 720, 520, 60, 60);
    }
    
    if(tochki > 9999){
    drawImage(barrelRed, 0, 0, 800, 500);
    }
    
    if(jivoti > 0){
    drawImage(building[3], bazaX, bazaY, 150, 100);
    drawImage(playerShip2_orange, myX, myY, 60, 80);
    
    if(vrag == true){
    drawImage(jelly[0], vragX, vragY, 80, 80);
    }
    
    if(vrag2 == true){
    drawImage(jelly[3], vrag2X, vrag2Y, 80, 80);
    }
    
    if(patron == true){
        drawImage(arrowUp, patronX, patronY, 50,50)
    }
    
    if(jivoti == 5){
        drawImage(heartSmall, 40, 490, 80, 80);
        drawImage(heartSmall, 100, 490, 80, 80);
        drawImage(heartSmall, 160, 490, 80, 80);
        drawImage(heartSmall, 220, 490, 80, 80);
        drawImage(heartSmall, 280, 490, 80, 80);
    }
    
    if(jivoti == 4){
        drawImage(heartSmall, 40, 490, 80, 80);
        drawImage(heartSmall, 100, 490, 80, 80);
        drawImage(heartSmall, 160, 490, 80, 80);
        drawImage(heartSmall, 220, 490, 80, 80);
    }
    
    if(jivoti == 3){
        drawImage(heartSmall, 40, 490, 80, 80);
        drawImage(heartSmall, 100, 490, 80, 80);
        drawImage(heartSmall, 160, 490, 80, 80);
    }
    
    if(jivoti == 2){
        drawImage(heartSmall, 40, 490, 80, 80);
        drawImage(heartSmall, 100, 490, 80, 80);
    }
    
    if(jivoti == 1){
        drawImage(heartSmall, 40, 490, 80, 80);
    }
        
    if(bonusJivot == true){
        drawImage(heart, bonusJivotX, bonusJivotY, 80, 80);
    }
    }
}

function keyup(key) {
    // ne natiskai klaviaturata nqma smisul
    console.log("Za kvo natiskash klaviaturata to nqma nikuv smisul za tazi igra");
}

function mouseup() {
    // tva e koda otnosno natiskane na mishkata, nishto drugo..............................
   if(patronY > 420){
    patron = true;
    patronY = myY;
    patronX = myX;
   }
    if(mouseY > restartY && mouseY < restartY+100){
           if(mouseX<restartX+100 & mouseX > restartX){
                      tochki = 0;
                      jivoti = 5;
                      vragX = randomInteger(500);
                      vragY = randomInteger(100);
                      vrag2 = false;
                      vrag = true;
                      brRestartirane = brRestartirane + 1;
                      patron = false;
                      bonusJivot = false;
                      console.log("!!!!!!!!!!!!!!!!!!!!!!", "Igrata e restartirana", "!!!!!!!!!!!!!!!!!!!!!!!");
           }
        }
}
