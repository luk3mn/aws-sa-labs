let btnActived = false;

if (window.screen.width < 1020) {

    document.querySelector("#btn-slide-bar").addEventListener("click", () => {
        if (btnActived == false) {
            document.querySelector("#slide-bar").style.height = "0";
            document.querySelector("#btn-slide-bar").style.rotate = "0deg";
            btnActived = true;
        } else {
            document.querySelector("#slide-bar").style.height = "auto";
            document.querySelector("#btn-slide-bar").style.rotate = "180deg";
            btnActived = false;
        }
    });

} else {

    document.querySelector("#btn-slide-bar").addEventListener("click", () => {
        if (btnActived == false) {
            document.querySelector("#slide-bar").style.width = "0";
            document.querySelector("#btn-slide-bar").style.rotate = "-90deg";
            btnActived = true;
        } else {
            document.querySelector("#slide-bar").style.width = "250px";
            document.querySelector("#btn-slide-bar").style.rotate = "90deg";
            btnActived = false;
        }
    });

}
