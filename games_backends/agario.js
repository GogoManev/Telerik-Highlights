// chovek
let myX = 350, myY = 250, myRazmer = 80, mySpeed = 40;

//kiftenca XD
let kufteX = [], kufteY = [], kufteRazmer = 30, brKufteta = 1000, k;

//mashtab
let mashtab = 1, mashtabMinimap = 0.05;

//vragove
let vragX = [], vragY = [], brVragove = 16, vragRazmer = randomInteger(100) + 60, tipVrag = [], kartina = [], vragSpeed = 1, v;

for(k = 0; k < brKufteta; k++){
    kufteX[k] = randomInteger(4000) / mashtab;
    kufteY[k] = randomInteger(4000) / mashtab;
}

for(v = 0; v < brVragove; v++){
    vragX[v] = randomInteger(4000);
    vragY[v] = randomInteger(4000);
    tipVrag[v] = randomInteger(3);
}

//kartoni na vragovete
kartina[0] = ballOrTree
kartina[1] = lollipopFruitYellow
kartina[2] = circle
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    console.log("Welcome to my version of Agar.io");
    console.log("You control the player with the mouse");
    console.log("Eat the kufteta to become bigger but also slower");
    console.log("There also also other players and you can eat them too but if they are bigger than you - you lose");
    console.log("Good Luck!")
}
function update() {
    if(myRazmer > 0){
        // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
        myX = myX + (mouseX - 400) / mySpeed;
        myY = myY + (mouseY - 300) / mySpeed;

        if(isKeyPressed[81]){ //Q (uvelichavane)
            mashtab = mashtab + 0.07;
        }

        if(isKeyPressed[69]){ //E (namalqvane)
            mashtab = mashtab - 0.07;
        }

        if(myX < 0){
            myX = 0
        }

        if(myY < 0){
            myY = 0
        }

        if(myY > 4000){
            myY = 4000
        }

        if(myX > 4000){
            myX = 4000
        }

        if(mashtab > 4){
            mashtab = 4
        }

        if(mashtab < 0.2){
            mashtab = 0.2
        }

        if(myRazmer > 1200){
            console.log("WOW! YOU EXPLODED");
        }

        for(k = 0; k < brKufteta; k++){
            let A = myX - kufteX[k], B = myY - kufteY[k], CKvadrat = A*A + B*B, sborRasiusi = (myRazmer/2 + kufteRazmer/2);

            if(sborRasiusi*sborRasiusi > CKvadrat){
                kufteX[k] = kufteX[brKufteta--];
                kufteY[k] = kufteY[brKufteta--];
                myRazmer++
                mySpeed = mySpeed + 0.1;
            }
        }

        for(v = 0; v < brVragove; v++){
            let A = myX - vragX[v], B = myY - vragY[v], C = A*A + B*B, sB = myRazmer/2 + vragRazmer / 2;
            if(myRazmer > vragRazmer){
                if(sB*sB > C){
                    vragX[v] = vragX[brVragove-1];
                    vragY[v] = vragY[brVragove-1];
                    myRazmer = myRazmer + vragRazmer;
                }
            }

                if(myRazmer < vragRazmer){
                    if(sB*sB > C){
                    vragRazmer = vragRazmer + myRazmer;
                    myRazmer = 0;
                    console.log("YOU DIED!")
                    }
                }
        }

        if(brKufteta <= 180 && brKufteta > 0 && myRazmer < 1200){
            context.font = "30px Courier New";
            context.fillText("YOU WIN", (400 - myX - 30/2) * mashtab, (300 - myX - 30/2) * mashtab);
            console.log("YOU WIN!!")
        }

        if(brKufteta == 0 && myRazmer < 1200){
            console.log("YOU REALLY WIN NOW!")
        }
    }
}
function draw() {
    // kufteta

    for(k = 0; k < brKufteta; k++){
        drawImage(kufte, (kufteX[k]-myX-kufteRazmer/2) * mashtab+350, (kufteY[k]-myY-kufteRazmer/2) * mashtab+250, kufteRazmer * mashtab, kufteRazmer * mashtab);
    }
    drawImage(ballOrTarget, (myX-myX-myRazmer/2) * mashtab +350 , (myY-myY-myRazmer/2) * mashtab +250, myRazmer * mashtab, myRazmer * mashtab);
    //vragove
    for(v = 0; v < brVragove; v++){
        drawImage(kartina[tipVrag[v]], (vragX[v]-myX-vragRazmer/2) * mashtab+350, (vragY[v]-myY-vragRazmer/2) * mashtab+250, vragRazmer * mashtab, vragRazmer * mashtab);
    }
    //minimap
    for(k = 0; k < brKufteta; k++){
        drawImage(kufte, (kufteX[k]-kufteRazmer/2) * mashtabMinimap + 600, (kufteY[k]-kufteRazmer/2) * mashtabMinimap, 2, 2);
    }
    drawImage(ballOrTarget, (myX-myRazmer/2) * mashtabMinimap+ 600 , (myY-myRazmer/2) * mashtabMinimap, myRazmer / 15, myRazmer / 15);

    drawImage(paddle, 595, 0, 4, 205);
    drawImage(paddle, 595, 205, 210, 5);

    for(v = 0; v < brVragove; v++){
        drawImage(kartina[tipVrag[v]], (vragX[v]-vragRazmer/2) * mashtabMinimap + 600, (vragY[v]-vragRazmer/2) * mashtabMinimap, vragRazmer / 15 , vragRazmer /15);
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}