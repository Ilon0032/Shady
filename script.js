window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");
    document.querySelector("#burgermenu").addEventListener("click", burger);
}

function burger() {
    console.log("burgermenu change");
    this.classList.toggle("burger");
    document.querySelector("#menu").classList.toggle("hide_nav");

}

/*js i script-tags i singleview.html og product_list.html*/
