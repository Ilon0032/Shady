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







/*sat ind fra babushkaopgave*/

/* js til produktlist*/

document.addEventListener("DOMContentLoaded", start);

const container = document.querySelector(".datacontainer");
const endpoint = "https://spreadsheets.google.com/feeds/list/17Dd7DvkPaFamNUdUKlrFgnH6POvBJXac7qyiS6zNRw0/od6/public/values?alt=json";
let solbriller = []
let filter = "alle";

function start() {
    loadData();
    clickButton();

}
async function loadData() {
    const response = await fetch(endpoint);
    console.log(response);
    solbriller = await response.json();
    console.log(solbriller);
    visSolbriller();
}

function visSolbriller() {

    container.innerHTML = "";
    const solbrillerTemplate = document.querySelector("template");
    solbriller.feed.entry.forEach(sol => {
        if (filter == "alle" || filter == sol.gsx$kategori.$t) {
            let klon = solbrillerTemplate.cloneNode(true).content;
            klon.querySelector("img").src = `imgs/small/${sol.gsx$billede.$t}-sm.jpg`;
            klon.querySelector("h1").textContent = sol.gsx$navn.$t;
            klon.querySelector("h2").textContent = sol.gsx$pris.$t + " Kr.";
            klon.querySelector("h3").textContent = sol.gsx$kategori.$t;

            klon.querySelector("h4").textContent = sol.gsx$kort.$t;
            klon.querySelector(".oprindelse").textContent = "Oprindelse: " + sol.gsx$oprindelse.$t


            klon.querySelector("div.solbriller").addEventListener("click", () => {
                location.href = "detalje.html?id=" + sol.gsx$id.$t;
            });

            container.appendChild(klon);
        }
    })
}

function clickButton() {
    //Tilføjer klik til alle classes ''filter''
    document.querySelectorAll(".filter").forEach(elm => {
        elm.addEventListener("click", filtering);
    })

}

function filtering() {
    //console logger dét der bliver trykket på af de varianter
    console.log("this", this.dataset.kategori);
    filter = this.dataset.kategori;
    //Viser den knaps h1, der trykkes på
    document.querySelector("h1").textContent = this.textContent;
    //Vælger alle knapper og fjerner den røde markering ved klik
    document.querySelectorAll(".filter").forEach(elm => {
        elm.classList.remove("valgt");
    })
    //Tilføjer den røde markering ved klik til den, der bliver klikket på
    this.classList.add("valgt");

    visSolbriller();

}



/*js til single view*/
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

document.addEventListener("DOMContentLoaded", start);
const detalje = document.querySelector("#detalje");
const endpoint = "https://spreadsheets.google.com/feeds/list/17Dd7DvkPaFamNUdUKlrFgnH6POvBJXac7qyiS6zNRw0/od6/public/values?alt=json";
let solbriller = []

function start() {
    loadData();

}
async function loadData() {
    const response = await fetch(endpoint);
    console.log(response);
    solbriller = await response.json();
    console.log(solbriller);
    visSol();
}

function visSol() {
    document.querySelector(".tilbage").addEventListener("click", () => {
        history.back();
    });

    solbriller.feed.entry.forEach(sol => {


        if (sol.gsx$id.$t == id) {
            detalje.querySelector("img").src = `imgs/large/${sol.gsx$billede.$t}.jpg`;
            detalje.querySelector("h1").textContent = sol.gsx$navn.$t;
            detalje.querySelector("h2").textContent = sol.gsx$pris.$t + " Kr.";
            detalje.querySelector("h3").textContent = sol.gsx$kategori.$t;
            detalje.querySelector("h4").textContent = sol.gsx$lang.$t;

            detalje.querySelector("h4").textContent = sol.gsx$kort.$t;
            detalje.querySelector(".oprindelse").textContent = "Oprindelse: " + sol.gsx$oprindelse.$t

        }
    });
}
