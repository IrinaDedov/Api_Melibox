function mobile() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className = "nav mobile";
    } else {
        x.className = "nav";
    }
}

function data() {
    var span;
    var date = new Date();

    an = date.getFullYear();

    span = document.getElementById("data");

    span.innerHTML = "<h5> Acest website a fost realizat în cadrul competiției ”Tekwill Junior Ambassadors” organizată de proiectul ”Tekwill în Fiecare Școală” și nu reflectă neapărat opinia proiectului ©️</h5>" + an;
}

data();