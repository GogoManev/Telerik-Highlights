// PRomenlivi za igracha
let igrachX = 600, igrachY = 550, igrachShir = 100, igrachVis = 50;

// Promenlivi za kashonite 
let kashonX = [], kashonY = [], kashoni = 95, tipKashon = [], kartinki = [], kashonRazmer = 50, k = 0;

// Suzdaj tablica ot 9 kashona. pazq go za vseki sluchai.
//kashonX[0] = 200; kashonY[0] = 200;    kashonX[1] = 250; kashonY[1] = 200;   kashonX[2] = 300; kashonY[2] = 200;
//kashonX[3] = 200; kashonY[3] = 250;    kashonX[4] = 250; kashonY[4] = 250;   kashonX[5] = 300; kashonY[5] = 250;
//kashonX[6] = 200; kashonY[6] = 300;    kashonX[7] = 250; kashonY[7] = 300;   kashonX[8] = 300; kashonY[8] = 300;

for(let i = 0; i < kashoni; i++) {
    for(let j = 0; j < 5; j++){
    kashonX[k] = 0 + i*kashonRazmer/1.2;
    kashonY[k] = 100 + j*kashonRazmer/1.2;
    k++;
    tipKashon[i] = randomInteger(3);
    }
}

//random kartini
kartinki[0] = isoCubeBlue;
kartinki[1] = isoCubeOrange;
kartinki[2] = isoCubePurple;

// Promenlivi za topkata. Ne pitai zashto deltata se kazva ballDeltarune XD
let ballX = [], ballY = [], brTopki = 0, t, ballDeltaruneY = [], ballDeltaruneX = [];

//jivoti
let jivoti = 5, ji;

// Zasega ne pishem kod vuv function init
function init() {
    console.log("Welcome to Gogo's Breakout!");
    console.log("Click the left button of your mouse to shoot a ball. You can only have 10 balls at the same time");
    console.log("When the ball hits the kashon (XD), it breaks");
    console.log("If you miss a ball, it's a sad day for you because you lose a heart.")
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    igrachX = mouseX;

    if(igrachX > 700){
        igrachX = 700
    }
//can i put my balls in ya jaws
    for(t = 0; t <= brTopki; t++){
        ballY[t] = ballY[t] + ballDeltaruneY[t];
        ballX[t] = ballX[t] + ballDeltaruneX[t];

        if(ballY[t] < 10){
            ballDeltaruneY[t] = 2
        }
    
        if(ballY[t] > 590){
            ballX[t] = ballX[brTopki - 1];
            ballY[t] = ballY[brTopki - 1];
            brTopki = brTopki - 1;
            jivoti = jivoti - 1;
        }
    
        if(ballX[t] > 790){
            ballDeltaruneX[t] = -2;
        }
    
        if(ballX[t] < 10){
            ballDeltaruneX[t] = 2;
        }

        if(areColliding(igrachX, igrachY, igrachShir, igrachVis, ballX[t], ballY[t], 10, 10)){
            ballDeltaruneY[t] = -2;
        }
    }

    for(let i = 0; i < kashoni; i++) {
        for(t = 0; t <= brTopki; t++){
            if(areColliding(ballX[t], ballY[t], 10, 10, kashonX[i], kashonY[i], kashonRazmer, kashonRazmer)){
                kashonX[i] = kashonX[kashoni - 1];
                kashonY[i] = kashonY[kashoni - 1];
                kashoni = kashoni - 1;

                if(ballDeltaruneX[t] == -2){
                    ballDeltaruneX[t] = 2;
                }
                if(ballDeltaruneY[t] == 2){
                    ballDeltaruneY[t] = -2;
                }
                if(ballDeltaruneY[t] == -2){
                    ballDeltaruneY[t] = 2;
                }
                if(ballDeltaruneX[t] == 2){
                    ballDeltaruneX[t] = -2;
                }
            }  
        }
    }
    UWIN();
    ULOSE();

    if(brTopki > 10){
        brTopki = 10;
        console.log("You reached the maximum number of balls");
    }
}  
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backStars, 0, 0, 800, 600);
    drawImage(jelly[2], igrachX, igrachY, igrachShir, igrachVis);

    //risuvane na kashoni
    for(let i = 0; i < kashoni; i++) {
        for(let j = 0; j < 5; j++){
            drawImage(kartinki[tipKashon[i]], kashonX[i], kashonY[i], kashonRazmer, kashonRazmer);
            //drawImage(isoCubeOrange, kashonX[i], kashonY[i], kashonRazmer, kashonRazmer);

        }
    }

    //topkata ( ͡° ͜ʖ ͡°)
    for(t = 0; t <= brTopki; t++){
        drawImage(ballOrTree, ballX[t], ballY[t], 10, 10);
    }

    //jivotite
    for(ji = 0; ji < jivoti; ji++){
        drawImage(heart, ji * 50, 0, 50, 50)
    }
}
function mouseup() {
    // Pri klik s lqv buton (- pokaji koordinatite na mishkata // iztrih tozi kod heheheheheheh)
        brTopki = brTopki + 1;
        ballX[brTopki] = mouseX;
        ballY[brTopki] = 500;
        ballDeltaruneY[t] = -2;
        ballDeltaruneX[t] = 2;
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    //console.log("Pressed", key);
}

function UWIN(){
    if(kashoni == 0){
        brTopki = 0;
        ballDeltaruneX = 0;
        ballDeltaruneY = 0;
        console.log("You Win!");
    }
}

function ULOSE(){
    if(jivoti == 0){
        brTopki = 0;
        ballDeltaruneX = 0;
        ballDeltaruneY = 0;
        console.log("You Lose!");
    }
}
