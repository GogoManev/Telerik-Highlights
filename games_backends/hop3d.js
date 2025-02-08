// Suzdavame promenlivi
let myX, myY, myZ, myShir, platX, platY, platZ, platShir, platDulj, platVis, brPlat, p, podY, dY, g, myShadow, score, speed;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    platX = [];
    podY = 200;
    platY = podY;
    platZ = [];
    brPlat = 4;
    platShir = 200;
    platDulj = 1.1;
    platVis = 100;
    myX = 0; myY = 0; myZ = 1; myShir = 50;
    dY = 0; g = 0.05;
    ramkaZOffset = 0;
    myShadow = tryToLoad("shadow", "black");
    score = 0;
    speed = 1;

    for(p = 0; p < 100; p++){
        platX[brPlat] = randomInteger(700) - 400;
        platZ[brPlat] = 1 + p*1.7262569832402235;
        brPlat++
    }
}
function update() {
    if(myY < 600){
        for(let p = 0; p < brPlat; p++){
                platZ[p] = platZ[p] - 0.01;

            if(myY >= podY && myY <= podY + myShir){
                if(areColliding(platX[p], platZ[p], platShir, platDulj, myX, myZ, myShir, 0)){
                    myY = podY;
                    dY = -dY;
                    score++
                }   
            }
        }
        myX = mouseX - 400;
        dY = dY + g;
        myY = myY + dY;

        ramkaZOffset += 0.01;
        if(ramkaZOffset > 0.2){
            ramkaZOffset = 0;
        }

        if(myX > 370){
            myX = 370
        }
    }
}

function draw() {
    drawRamka();
    for(let p = 0; p < brPlat; p++){
        draw3DPlatforma(platX[p], platY, platZ[p], platShir, platDulj);
        draw3DPrednaStena(platX[p], platY, platZ[p], platShir, platVis);
    }

    let myeX = oRKEX(myX, myY, myZ), myeY = oRKEY(myX, myY, myZ),
        myeR = oRKERAZMER(myShir, myZ);
    drawImage(myShadow, myeX, 500, myeR, myeR);
    drawImage(ballOrTree, myeX, myeY, myeR, myeR);

    if(myY > 600){
        context.fillStyle = "red";
        context.font = "120px Arial";
        context.fillText("GAME OVER!", 30, 200);
    }
    //score
    context.fillStyle = "green";
    context.font = "40px Arial";
    context.fillText("Score:", 0, 0);
    context.fillText(score, 120, 0);
    //ishowspeed "BEN"
    context.fillStyle = "cyan";
    context.font = "40px Arial";
    context.fillText("Speed:", 630, 0);
    context.fillText(speed, 760, 0);

    // Tuk naprogramirai kakvo da se risuva
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

function oRKEX(rX, rY, rZ){
    return rX/rZ + canvas.width/2;
}

function oRKEY(rX, rY, rZ){
    return rY/rZ + canvas.height/2;
}

function oRKERAZMER(realenRazmer, rZ){
    return realenRazmer/rZ;
}

function draw3DPlatforma(x1, y1, z1, shir, dulj){
    let x2 = x1 + shir,     y2 = y1,    z2 = z1,
        x3 = x1 + shir,     y3 = y1,    z3 = z1 + dulj,
        x4 = x1,            y4 = y1,    z4 = z1 + dulj;
     z1 = Math.max(z1, 0.1);
     z2 = Math.max(z2, 0.1);
     z3 = Math.max(z3, 0.1);
     z4 = Math.max(z4, 0.1);
    let eX1 = oRKEX(x1, y1, z1), eY1 = oRKEY(x1, y1, z1),
        eX2 = oRKEX(x2, y2, z2), eY2 = oRKEY(x2, y2, z2),
        eX3 = oRKEX(x3, y3, z3), eY3 = oRKEY(x3, y3, z3),
        eX4 = oRKEX(x4, y4, z4), eY4 = oRKEY(x4, y4, z4);

        context.beginPath();
        context.moveTo(eX1, eY1);
        context.lineTo(eX2, eY2);
        context.lineTo(eX3, eY3);
        context.lineTo(eX4, eY4);
        context.closePath();
        context.fill();
        context.stroke();
}

function draw3DPrednaStena(x1,y1,z1,shir,vis){
    let x2 = x1 + shir,   y2 = y1,             z2 = z1,
        x3 = x1 + shir,          y3 = y1 + vis,       z3 = z1,
        x4 = x1,   y4 = y1 + vis,       z4 = z1;
    z1 = Math.max(z1, 0.1);
    z2 = Math.max(z2, 0.1);
    z3 = Math.max(z3, 0.1);
    z4 = Math.max(z4, 0.1);
    let eX1 = oRKEX(x1, y1, z1), eY1 = oRKEY(x1, y1, z1),
        eX2 = oRKEX(x2, y2, z2), eY2 = oRKEY(x2, y2, z2),
        eX3 = oRKEX(x3, y3, z3), eY3 = oRKEY(x3, y3, z3),
        eX4 = oRKEX(x4, y4, z4), eY4 = oRKEY(x4, y4, z4);

        context.beginPath();
        context.moveTo(eX1, eY1);
        context.lineTo(eX2, eY2);
        context.lineTo(eX3, eY3);
        context.lineTo(eX4, eY4);
        context.closePath();
        context.fill();
        context.stroke();
}

function draw3DStrStena(){

}

function drawRamka(){
    let ramkaX = -400, ramkaY = -300, ramkaZ, ramkaShir = 800, ramkaVis = 600;
    for(ramkaZ = 1; ramkaZ < 6; ramkaZ = ramkaZ + 0.2){
        let ramkaX = -400, ramkaY = -300, ramkaShir = 800, ramkaVis = 600;
        let ramkaEkx = oRKEX(ramkaX, ramkaY, ramkaZ),
        ramkaEky = oRKEY(ramkaX, ramkaY, ramkaZ),
        ramkaEkShir = oRKERAZMER(ramkaShir, ramkaZ),
        ramkaEkVis = oRKERAZMER(ramkaVis, ramkaZ);
        context.strokeRect(ramkaEkx, ramkaEky, ramkaEkShir, ramkaEkVis);
    }
}