// 1. praim ei tiq neshta xd
let myX = 0,
    patron = false,
    patronX = 9,
    patronY = 520,
    vragX = randomInteger(600),
    vragY = 0,
    deltaX = 2,
    igrachDeltaX = 5,
    vrag = true,
    vrag2 = false,
    bazaX = 350,
    bazaY = 412,
    vrag2X = 1,
    vragZdrave = 3,
    vrag2Zdrave = 3,
    natiskaLiSeNadqsnoSega = false,
    natiskaLiSeNalqvoSega = false,
    vrag2Y = 0,
    tochki = 0,
    brRestartirane = 0,
    bonusJivot = false,
    restartX = 620,
    restartY = 520,
    bonusJivotY = 0,
    bonusJivotX = 100,
    jivoti = 5,
    lazer = false,
    lazerX,
    lazerY,
    lazerOverheat = 800,
    lazerOverheatDulshina = 800,
    myY = 420;

function update() {
    if(jivoti > 0){
        // mnogo dalag kodd
        //myX = myX + (mouseX - myX);
        vragY = vragY + 2;
        vrag2X = vrag2X + (myX - vrag2X) / 30;
        patronY = patronY - 5;
        lazerX = myX+25;
        lazerY = myY;

        if(patron == true){
            patronY = patronY - 2;
        }

         if(isKeyPressed[39] || isKeyPressed[68]){
            igrachDeltaX = igrachDeltaX + 1
        }

        if(isKeyPressed[37] || isKeyPressed[65]){
            igrachDeltaX = igrachDeltaX - 1
        }
        
        
        
        myX = myX + igrachDeltaX;
        igrachDeltaX = igrachDeltaX / 1.2

        if(bonusJivot == true){
          bonusJivotY = bonusJivotY + 2;
        }

        if(tochki > 19){
            vragY = vragY + 1;
            vragX = vragX + deltaX;

            if(vragX > 740){
            deltaX = - 2
            }


            if(vragX < 0){
            deltaX = 2
            }
        }

        if(lazer == true){
            lazerOverheat = lazerOverheat - 4;
            lazerOverheatDulshina = lazerOverheatDulshina - 4;
        }else{
        lazerOverheat = lazerOverheat + 1;
        lazerOverheatDulshina = lazerOverheatDulshina + 1;
        }
        

        if(patron == false){
            patronY = 450;
        }
        
        if(myX > 740){
            myX = 740
        }

        if(myX < 0){
            myX = 0
        }

        if(lazerOverheat > 800){
            lazerOverheat = 800;
        }

        if(lazerOverheatDulshina > 800){
            lazerOverheatDulshina = 800
        }



        if(vrag == true && areColliding(vragX, vragY, 80, 80, patronX, patronY, 20, 50)){
                        tochki = tochki + 1;
                        console.log("Imash", tochki, "tochki");
                        patron = false;
                        vragY = 0;
                        vragX = randomInteger(500);  
        }

        if(bonusJivot == true && areColliding(bonusJivotX, bonusJivotY, 80, 80, patronX, patronY, 20, 50)){
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

        if(vrag2 == true && areColliding(vrag2X, vrag2Y, 80, 80, patronX, patronY, 20, 50)){
            tochki = tochki + 1;
            console.log("Imash", tochki, "tochki");
            patron = false;
            vrag2Y = 0; 
            vrag2X = randomInteger(500);
            }

            if(vrag == true && areColliding(vragX, vragY, 80, 80, myX, myY, 50, 50)){
                        jivoti = jivoti - 1;
                        vragY = 0;
        }
            if(vrag2 == true && areColliding(vrag2X, vrag2Y, 80, 80, myX, myY, 50, 50)){
                            jivoti = jivoti - 1;
                            vrag2Y = 0;  
        }

            if(lazer == true && vrag == true && areColliding(vragX, vragY, 80, 80, lazerX, 0, 10, lazerY)){
                tochki = tochki + 1;
                console.log("Imash", tochki, "tochki");
                vragX = randomInteger(500);
                vragY = 0;
            }

            if(lazer == true && vrag2 == true && areColliding(vrag2X, vrag2Y, 80, 80, lazerX, 0, 10, lazerY)){
                tochki = tochki + 1;
                console.log("Imash", tochki, "tochki");
                vrag2X = randomInteger(500);
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

        if(vrag2 == true && vrag2Y > 400){
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
                bonusJivotX = randomInteger(500)
            }

            if(jivoti == 5){
                bonusJivot = false;
            }

            if(tochki > 49){
                vrag = false;
                vrag2 = true;
                vrag2Y = vrag2Y + 1.5;
            }
        
            if(tochki > 79){
                vrag = false;
                vrag2 = true;
                vrag2Y = vrag2Y + 3;
            }
        
            if(tochki > 129){
                vrag = true;
                vrag2 = true;
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
            }

            if(lazerOverheat < 0){
                lazer = false;
                lazerOverheat = 0;
            }

            if(lazerOverheatDulshina == 0){
            lazerOverheat = 0;
            }
    }
}

function draw() {
    // 3. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    drawImage(playerShip2_orange, 0, 510, 50, 50);
    drawImage(repair, restartX, restartY, 60, 60);
    
    
     if(tochki < 21){
    drawImage(backForest, 0, 0, 800, 500);
    drawImage(gem[18], 720, 520, 60, 60);
    }
    
    if(tochki > 19){
    drawImage(backNight, 0, 0, 800, 500);
    drawImage(gem[19], 720, 520, 60, 60);
    }
    
    if(tochki > 49){
    drawImage(backStars, 0, 0, 800, 500);
    drawImage(gem[47], 720, 520, 60, 60);
    }
    
    if(tochki > 79){
    drawImage(backSun, 0, 0, 800, 500)    
    drawImage(gem[37], 720, 520, 60, 60);  
    }
    
    if(tochki > 129){
    drawImage(backWaves, 0, 0, 800, 500)    
    drawImage(gem[3], 720, 520, 60, 60);    
    }
    
    if(tochki > 9999){
    drawImage(backSunset, 0, 0, 800, 500);
    }
    
    if(jivoti > 0){
    drawImage(building[3], bazaX, bazaY, 150, 100);
    drawImage(paddle, 0, 500, lazerOverheatDulshina, 10)
    drawImage(playerShip2_orange, myX, myY, 60, 80);
    
        if(vrag == true){
        drawImage(jelly[0], vragX, vragY, 80, 80);
        }
        
        if(lazer == true){
        drawImage(powerupRed, lazerX, 0, 10, lazerY)
        }

        if(vrag2 == true){
        drawImage(jelly[3], vrag2X, vrag2Y, 80, 80);
        }

        if(patron == true){
            drawImage(missile[4], patronX, patronY, 20,50)
        }
       

        if(jivoti == 5){
            drawImage(heartSmall, 40, 495, 80, 80);
            drawImage(heartSmall, 100, 495, 80, 80);
            drawImage(heartSmall, 160, 495, 80, 80);
            drawImage(heartSmall, 220, 495, 80, 80);
            drawImage(heartSmall, 280, 495, 80, 80);
        }

        if(jivoti == 4){
            drawImage(heartSmall, 40, 495, 80, 80);
            drawImage(heartSmall, 100, 495, 80, 80);
            drawImage(heartSmall, 160, 495, 80, 80);
            drawImage(heartSmall, 220, 495, 80, 80);
        }

        if(jivoti == 3){
            drawImage(heartSmall, 40, 495, 80, 80);
            drawImage(heartSmall, 100, 495, 80, 80);
            drawImage(heartSmall, 160, 495, 80, 80);
        }

        if(jivoti == 2){
            drawImage(heartSmall, 40, 495, 80, 80);
            drawImage(heartSmall, 100, 495, 80, 80);
        }

        if(jivoti == 1){
            drawImage(heartSmall, 40, 495, 80, 80);
        }

        if(bonusJivot == true){
            drawImage(heart, bonusJivotX, bonusJivotY, 80, 80);
        }

 
        
    }
}

function keyup(key) {
    // ne natiskai klaviaturata nqma smisul (btw veche ima xD)
  // console.log(key);
    natiskaLiSeNadqsnoSega = false;
    natiskaLiSeNalqvoSega = false;
    
    if(key == 17 || key == 16){
    lazer = false;
    }
    
    if(key == 32 || key == 38 || key == 87 && patronY > 420){
    patron = true;
    patronY = myY;
    patronX = myX+20;
   }
    
}

function keydown(key){
    //tova e ako go zadurjash

    if(key == 17 || key == 16){
        lazer = true
    }
}

function mouseup() {
    // tva e koda otnosno natiskane na mishkata, nishto drugo..............................
   if(patronY > 420){
    patron = true;
    patronY = myY;
    patronX = myX+20;
   }
    if(mouseY > restartY && mouseY < restartY+100){
           if(mouseX<restartX+100 && mouseX > restartX){
                      tochki = 0;
                      jivoti = 5;
                      lazerOverheat = 800;
                      lazerOverheatDulshina = 800;
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
