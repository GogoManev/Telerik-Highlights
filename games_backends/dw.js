//predlojeniq ot debelimitur
//1. magiiki s cooldown
//2. qshu da strela nqkvi patroni
//3. анимирани герои
// Suzdavame promenlivi
let mitko, mitkoX, mitkoY, mitkoDX, mitkoDY, mitkoHP, raketiX, raketiY, brRaketi, qsho, qshoX, qshoY, qshoHP, qshoDY, qshoDX, updates, ny, nx, sword, surce, surceX, surceY;
function init() {
    // debelimitur
    mitko = tryToLoad("DABOSS", "white");
    mitkoRED = tryToLoad("DABOSSRED", "red");
    mitkoX = 300;
    mitkoY = 300;
    mitkoDY = 0;
    mitkoHP = 100;
    canvas.width = 1200;
    canvas.height = 600;
    //qsho
    qsho = tryToLoad("DABOSS2", "white");
    qshoRED = tryToLoad("DABOSS2RED", "red");
    qshoX = 1000;
    qshoY = 250;
    qshoDY = 0;
    qshoDX = 0;
    ny = 6;
    nx = 3;
    qshoHP = 300;
    sword = tryToLoad("sword", "gray");
    //raketi
    bazooka = tryToLoad("bazooka", "green");
    raketiX = [];
    raketiY = [];
    brRaketi = 1;
    //drugi
    updates = 0;
    surce = false;
    surceX = randomInteger(1000);
    surceY = 0;
}
function update() {
    if(mitkoHP > 0){
        if(qshoHP > 0){
        mitkoY = mitkoY - mitkoDY;
        mitkoDY = mitkoDY - 0.08;
        qshoY = qshoY - qshoDY;
        qshoDY = qshoDY - 0.08;
        qshoX = qshoX - qshoDX;
        qshoDX = qshoDX - 0.001;
        updates = updates + 1;
        raketiX[brRaketi] = mitkoX + 160;
        raketiY[brRaketi] = mitkoY + 10;

        for(let b = 0; b < brRaketi; b++){
            raketiX[b] = raketiX[b] + 4;

            if(raketiX[b] > 1250){
                brRaketi--
            }

            if(sblusuk(raketiX[b], raketiY[b], 80 / 2, qshoX, qshoY, 150 / 2)){
                qshoHP = qshoHP - 0.5;
            }

            if(brRaketi > 5){
                brRaketi = 5;
            }
        }

        if(isKeyPressed[87] || isKeyPressed[32] || isKeyPressed[38]){ //w
            mitkoDY = 3
        }

        if(isKeyPressed[65] || isKeyPressed[37]){ //a
            mitkoX = mitkoX - 2;
        }

        if(isKeyPressed[68] || isKeyPressed[39]){ //d
            mitkoX = mitkoX + 2;
        }

        if(mitkoY > 450){
            mitkoY = 450;
        }

        if(mitkoDY > 3){
            mitkoDY = 3;
        }

        if(mitkoY < -5){
            mitkoY = -5;
        }

        if(mitkoX < -30){
            mitkoX = -30;
        }

        if(updates%200 == 0){
            qshoDY = ny;
            qshoDX = nx;
        }

        if(qshoY > 250 && qshoX > 900){
            qshoY = 250;
        }else if(qshoY > 450){
            qshoY = 450;
        }

        if(mitkoX > 900){
            mitkoX = 900;
        }

        if(qshoX < -30){
            qshoX = -30;
            nx = -3;
            ny = 6;
        }else if(qshoX > 1050){
            qshoX = 1050;
            nx = 3;
            ny = 6;
        }
        if(sblusuk(qshoX, qshoY, 150 / 2, mitkoX, mitkoY, 150 / 2)){
            mitkoHP = mitkoHP - 0.5;
        }
        if(mitkoHP < 100){
            surce = true;
            surceY = surceY + 3;

            if(surceY > 750){
                surceY = -60;
                surceX = randomInteger(1000)
            }

            if(sblusuk(mitkoX, mitkoY, 150/2, surceX, surceY, 70/2)){
                mitkoHP = mitkoHP + 30;
                surceY = -850
            }else if(sblusuk(qshoX, qshoY, 150/2, surceX, surceY, 70/2)){
                qshoHP = qshoHP + 30;
                surceY = -850;
            }
        }

        if(mitkoHP > 100){
            mitkoHP = 100;
        }
    }
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backCactus, 0, 0, 1200, 600);
    if(mitkoHP > 0){
        drawImage(mitko, mitkoX, mitkoY, 150, 150);
        drawImage(bazooka, mitkoX + 80, mitkoY + 10, 120, 120);
    }
    if(qshoHP > 0){
        drawImage(qsho, qshoX, qshoY, 150, 150);
        drawImage(sword, qshoX - 10, qshoY + 50, 60, 60);
    }
        drawImage(box, 1000, 400, 200, 200);

        for(let b = 0; b < brRaketi; b++){
            drawImage(planeGray, raketiX[b], raketiY[b], 80, 80);

            if(sblusuk(raketiX[b], raketiY[b], 80 / 2, qshoX, qshoY, 150 / 2)){
                drawImage(qshoRED, qshoX, qshoY, 150, 150)
            }
            
        }
        if(surce == true){
            drawImage(heart, surceX, surceY, 70, 70)
        }

        if(sblusuk(qshoX, qshoY, 150 / 2, mitkoX, mitkoY, 150 / 2)){
            drawImage(mitkoRED, mitkoX, mitkoY, 150, 150)
        }
        //hp bar
    context.fillStyle = "black";
    context.font = "20px Comic Sans MS";
    context.fillText("Debelimitur", 0, 0);
    context.fillText("Qsho", 1150, 0)
    context.fillStyle = "red";
    context.fillRect(0, 20, mitkoHP, 30);
    context.fillRect(1200, 50, -qshoHP, -30);
    context.fillStyle = "black";
    context.font = "20px Arial";
    context.fillText(Math.floor(mitkoHP), 0, 30);
    context.fillText(Math.floor(qshoHP), 1160, 30);

    if(qshoHP <= 0){
        context.fillStyle = "lime";
        context.font = "130px Arial";
        context.fillText("YOU WIN!", 200, 300)
    }
    if(mitkoHP <= 0){
        context.fillStyle = "red";
        context.font = "130px Arial";
        context.fillText("YOU LOSE!", 200, 300)
    }
    
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    if(mitkoHP > 0){
        if(qshoHP > 0){
            brRaketi++;
        }
    }
}
function keyup(key) {
    if(key == 82){
        init();
    }
    // Pechatai koda na natisnatiq klavish
}

function sblusuk(x1, y1, r1, x2, y2, r2){
    let a = (x1-x2), b = (y1-y2);
    return a*a + b*b < (r1+r2)*(r1+r2);
}

//za audio:
//let audio = new
//Audio('audio_file.mp3');
//audio.play();
//audio.pause();
//trrqbva da e v sushtata papka kato start.html