// Suzdavame promenlivi
let centerX, centerY, thingX, thingY, angle, radius, otdalechavane, igra,
isClockwise, dA, updates, kufteX, kufteY, kufteRazmer, brKufteta, vzetiKufteta, k;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    centerX = 400;
    centerY = 40;
    angle = Math.PI/2;
    radius = 100;
    qk = tryToLoad("qk", "white");
    isClockwise = true;
    dA = 0.01;
    dAToggle = true;
    updates = 0;
    otdalechavane = false;
    igra = true;

    kufteX = [];
    kufteY = [];
    kufteRazmer = [];
    brKufteta = 15;
    vzetiKufteta = 0;

    for(k = 0; k < brKufteta; k++){
        kufteX[k] = randomInteger(600) + 100;
        kufteY[k] = randomInteger(400) + 150;
        kufteRazmer[k] = randomInteger(30) + 20;
    }
}
function update() {
    updates++
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
   if(igra){ 
    dA = Math.cos(updates/100)/100;

    if(dAToggle){
        thingX = centerX + Math.cos(angle)*radius;
        thingY = centerY + Math.sin(angle)*radius;
    }
    if(isClockwise){
        angle = angle + dA;
    }else{
        angle = angle - dA;
    }

    if(angle > Math.PI){
        isClockwise = false;
    }

    if(angle < Math.PI/10000){
        isClockwise = true;
    }

    if(otdalechavane){
        thingY++
        
    }
    for(k = 0; k < brKufteta; k++){
        if(areColliding(thingX, thingY, 10, 10, kufteX[k], kufteY[k], kufteRazmer[k], kufteRazmer[k])){
            kufteX[k] = 9999999;
            kufteY[k] = 9999999;
            vzetiKufteta++
            dAToggle = true;
        }
    }
}
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(qk, 0, 0, 800, 600);
    context.fillStyle = "white";
    context.fillRect(0, 130, 800, 20)
    drawImage(femaleAction, centerX - 50, centerY - 35, 60, 80);
    drawImage(arrowDown, thingX - 30, thingY - 30, 60, 60);
    drawLine(centerX, centerY, thingX, thingY);
    

    for(k = 0; k < brKufteta; k++){
        drawImage(kufte, kufteX[k], kufteY[k], kufteRazmer[k], kufteRazmer[k]);
    }

    context.fillStyle = "red";
    context.font = "30px Comic Sans MS";
    context.fillText("Kufteta:", 600, 0);
    context.fillText(vzetiKufteta, 725, 0);
    context.fillStyle = "blue";
    context.fillText("You need 8 Kufteta", 525, 60);

    if(vzetiKufteta >= 8){
        context.fillStyle = "lime";
    context.font = "90px Comic Sans MS";
    context.fillText("YOU WIN", 200, 200);
    igra = false;
    }
    

}

function keyup(key) {
    if(key == 32){
        dAToggle = false;
        otdalechavane = true;
    }

    if(key == 82){
        init();
    }
}