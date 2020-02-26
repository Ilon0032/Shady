window.addEventListener("load", sidenVises);
/*siden loaded*/


function sidenVises() {
    /* siden vises skrevet ud i consolen når siden er loaded*/
    console.log("siden vises");
    document.querySelector("#burgermenu").addEventListener("click", burger);
    /*ID burgermenu lytter efter klik og når der klikkes sendes den til funtionen burger*/
}

function burger() {
    /*burgermenu change skrevet ud i consolen*/
    console.log("burgermenu change");
    /*Denne class burger slåes til og fra når der klikkes på #burgermenu*/
    this.classList.toggle("burger");
    /*Når der klikkes på #burgermenu slår den class "hide_nav" til og fra på id'et menu*/
    document.querySelector("#menu").classList.toggle("hide_nav");

}



/*js i script-tags i singleview.html og product_list.html*/
