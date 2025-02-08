// 1. Suzdavame promenlivi
let myX = 0,
    tzelX = 404,
    tzelY = 80,
    bombaX = 350,
    bombaY = 70,
    jivoti = 3,
    posoka = 0,
    tochki = 0,
    myY = 0;

function update() {
    // 69 420. Kodut tuk se izpulnqva 0.0000001 puti na 100 hilqdoletia. nqmam jivooooooooooooooooooooooooooooot.
   tzelY = tzelY + 3;
    
    if(posoka > 1){
         bombaY = bombaY - 2;
     }else{
         bombaY = bombaY + 2
     }
    
  if(bombaY > 539){
      bombaY = 539;
      bombaX = randomInteger(500);
      posoka = posoka + 1;
      
  }
        
      if(bombaY < 1){
          posoka = posoka - 1;
          bombaX = randomInteger(500);
          bombaY = 0;
      }
  
    
    
    if(mouseY > tzelY && mouseY < tzelY+80){
       if(mouseX<tzelX+80 && mouseX > tzelX){
             tzelY = 0;
              tzelX = randomInteger(550);
                tzelY = randomInteger (300);
              tochki = tochki + 1;
               console.log("imash", tochki, "tochki");     
    }
}
    
     if(mouseY > bombaY && mouseY < bombaY+10){
       if(mouseX<bombaX+60 && mouseX > bombaX){
              bombaX = randomInteger(550);
              jivoti = jivoti - 1;
              console.log("Ostavat ti", jivoti, "jivota");      
       }
     }
    if(tzelY > 550){
        tzelY = 0;
        jivoti = jivoti - 1;
        console.log("Ostavat ti", jivoti, "jivota");
    }
    
    if(jivoti < 1){
        tzelX = 2000;
        tzelY = 540;
        bombaX = 1500;
        bombaY = 580;
    }
    
    
   
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backMountain, 0, 0, 800, 600);
    drawImage(jewelBlue, tzelX, tzelY, 80, 80);
    drawImage(bomb,bombaX, bombaY, 60, 60)
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
