let tab = ["Papier", "Kamień", "Nożyce"];

var los;
function losuj() {
    los = Math.floor(Math.random() * tab.length);
}

var wybor = 10;

function papier() {
    wybor = 0;
    losuj();
    sprawdz();

}
function kamien() {
    wybor = 1;
    losuj();
    sprawdz();


}
function nozyce() {
    wybor = 2;

    losuj();
    sprawdz();
}

var my = 0;
var komputer = 0;

function sprawdz() {
    if (wybor == los) {
        alert("REMIS - komputer wybrał: " + tab[los]);
        my++;
        komputer++;
    }
    else if (wybor == 0 && los == 1) {
        my++;
        alert("WYGRAŁEŚ - komputer wybrał: " + tab[los]);
    }
    else if (wybor == 0 && los == 2) {
        komputer++;
        alert("PRZEGRAŁEŚ - komputer wybrał: " + tab[los]);
    }
    else if (wybor == 1 && los == 2) {
        my++;
        alert("WYGRAŁEŚ - komputer wybrał: " + tab[los]);
    }
    else if (wybor == 1 && los == 0) {
        komputer++;
        alert("PRZEGRAŁEŚ - komputer wybrał: " + tab[los]);
    }
    else if (wybor == 2 && los == 0) {
        my++;
        alert("WYGRAŁEŚ - komputer wybrał: " + tab[los]);
    }
    else if (wybor == 2 && los == 1) {
        komputer++;
        alert("PRZEGRAŁEŚ - komputer wybrał: " + tab[los]);
    }
    odswież();
}
function odswież(){
var wynik = document.getElementById("wynik").innerHTML = my + ":" + komputer;

}