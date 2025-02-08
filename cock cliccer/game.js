let brTochki = 0, kartinka, broqchElement, updButton, refresh, autoClickButton, brUpdate = 1, isAutoClick = 0;
        function onBodyLoad() {
            //kartina
            kartinka = document.getElementById("kartinka1");
            kartinka.onclick = onKartinkaClick;
            //refresh
            refresh = document.getElementById("refreshId") 
            refresh.onclick = refresvane;
            //tochki
            brTochki = localStorage.getItem("brTochki");
            broqchElement = document.getElementById("broqchId");
            broqchElement.innerHTML = brTochki
            //upgrade
            brUpdate = localStorage.getItem("brUpdates");
            updButton = document.getElementById("butonNzId");
            updButton.onclick = updateClick;
            //autoclicker
            isAutoClick = localStorage.getItem("Autoclick");
            autoClickButton = document.getElementById("autoclickerId");
            autoClickButton.onclick = autoClickEnable;
        }
        function onKartinkaClick() {
            brTochki = Number(brTochki) + Number(brUpdate);
            broqchElement.innerHTML = brTochki;
            localStorage.setItem("brTochki", brTochki);
        }

        function updateClick(){
            if(brTochki >= 20 * brUpdate * brUpdate){
                brTochki = Number(brTochki) - Number(20 * brUpdate * brUpdate)
                brUpdate++;
                localStorage.setItem("brUpdates", brUpdate);
            }
        }

        function refresvane(){
            brTochki = 0;
            brUpdate = 1;
            isAutoClick = 0;
            autoClickButton.innerHTML = " AutoClicker (-200 points) ";
            localStorage.setItem("brTochki", brTochki);
            localStorage.setItem("brUpdates", brUpdate);
            localStorage.setItem("Autoclick", isAutoClick);
        }

        function autoClickEnable(){
            if(brTochki >= 200){
                brTochki = Number(brTochki) - Number(200)
                isAutoClick = 1;
                autoClickButton.innerHTML = "Autoclicker Enabled";
                localStorage.setItem("Autoclick", isAutoClick);
            }
        }

        function update(){
            broqchElement.innerHTML = brTochki;
            updButton.innerHTML = "+1 Point (-" + 20*brUpdate*brUpdate + " points)";
        }

        function autoClicking(){
            if(isAutoClick == 1){
                brTochki++;
                autoClickButton.innerHTML = "Autoclicker Enabled";
                localStorage.setItem("brTochki", brTochki);
            }
        }

        setInterval(autoClicking, 750);
        setInterval(update, 100);
        