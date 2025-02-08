    // 1. Suzdavame promenlivi
    let myX = 0,
        ballX = randomInteger(500),
        ballY = randomInteger(100),
        ballPosicia = 1,
        nadqsnoLiSeDvijiTopkata = true,
        nadoluLiSeDvijiTopkata = true,
        skorost = 1,
        tochki = 0,
        jivoti = 3,
        restartX = 570,
        restartY = 550,
        myY = 0;

    function update() {
        myX = myX + (mouseX - myX);
        myY = myY + (mouseY - myY);

     if(jivoti > 0){

        if(ballPosicia == 0){
            skorost = 2
        }

        if(nadqsnoLiSeDvijiTopkata == true){
         ballX = ballX - skorost;
        }

        if(nadqsnoLiSeDvijiTopkata == false){
            ballX = ballX + skorost;
        }

        if(nadoluLiSeDvijiTopkata == true){
            ballY = ballY + skorost;
        }

        if(nadoluLiSeDvijiTopkata == false){
            ballY = ballY - skorost;
        }

        if(ballY < 1){
            nadoluLiSeDvijiTopkata = true;
        }

        if(ballX > 700){
            nadqsnoLiSeDvijiTopkata = true;
        }

        if(ballY > 500){
            nadoluLiSeDvijiTopkata = false;
        }

        if(ballX < 1){
            nadqsnoLiSeDvijiTopkata = false;
        }

     }
    }


    function draw() {
        // 3. Tuk naprogramirai kakvo da se risuva
         drawImage(backWaterfall, 0, 0, 800, 600);
        if(jivoti > 0){
        drawImage(backWaterfall, 0, 0, 800, 600);
        drawImage(ballOrTree, ballX, ballY, 100, 100);
        drawImage(burgerSilver, mouseX, mouseY, 30, 30);


        if(jivoti == 3){
            drawImage(heart, 750, 550, 50, 50);
            drawImage(heart, 690, 550, 50, 50);
            drawImage(heart, 630, 550, 50, 50);
        }

        if(jivoti == 2){
            drawImage(heart, 750, 550, 50, 50);
            drawImage(heart, 690, 550, 50, 50);
            drawImage(laserRed[2], 630, 550, 50, 50);
        }

        if(jivoti == 1){
            drawImage(heart, 750, 550, 50, 50);
            drawImage(laserRed[2], 690, 550, 50, 50);
            drawImage(laserRed[2], 630, 550, 50, 50);
        }
        }
        if(jivoti == 0){
            drawImage(explosion1, 0, 0, 800, 600);
        }
        
         drawImage(powerupRedBolt, restartX, restartY, 40, 40);
    }

    function mouseup() {
        if(areColliding(mouseX, mouseY, 100, 100, ballX, ballY, 100, 100)){
            ballX = randomInteger(800);
            ballY = randomInteger (600);
            tochki++;
            console.log("sega imash", tochki, "tochki");
        }else{
            jivoti--;;
        }

         if(mouseY > restartY){
           if(mouseX<restartX+100){
              if(mouseY<restartY+100){
                  if(mouseX>restartX){
                      tochki = 0;
                      jivoti = 3;
                      ballX = randomInteger(500);
                      ballY = randomInteger(100);
                      skorost = 1;
                      console.log("Igrata ti e restartirana");

                }
              }
           }
        }

        if(tochki != 0 && tochki%5 == 0){
            skorost++;
            console.log("Skorost: ", skorost);
        }
    }
