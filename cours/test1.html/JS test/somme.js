
function clear(){
    var m = document.getElementById("m");
    m.value = "";


}

function somme() {
    if ((document.getElementById("n1").value || document.getElementById("n1").value)==
    "")
    {
        alert("Donner votre num .")
    }
else{
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        let s = n1 + n2;

        document.getElementById("result").innerHTML = "-la somme de " + n1 + " et " + n2 + " est = " + s;
    }



}
function subst(){
    if ((document.getElementById("n1").value || document.getElementById("n1").value)==
        "")
    {
        alert("Donner votre num .")
    }
    else {
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        let s = n1 - n2;

        document.getElementById("result").innerHTML = "-la soustraction de " + n1 + " a " + n2 + " est = " + s;
    }

}
function produit(){
    if ((document.getElementById("n1").value || document.getElementById("n1").value)==
        "")
    {
        alert("Donner votre num .")
    }
    else {
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        let s = n1 * n2;
    }
    document.getElementById("result").innerHTML = "-le Produit de "+n1+" et "+n2+" est = " + s;

}

function div() {
    if ((document.getElementById("n1").value || document.getElementById("n1").value)==
        "")
    {
        alert("Donner votre num .")
    }
    else {
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        if (n2 != 0) {
            let s = n1 / n2;
            document.getElementById("result").innerHTML = "-le Produit de " + n1 + " et " + n2 + " est = " + s;
        } else alert("num 2 doit etre diferent a ZERO. !")
    }



}


function cleanIN() {
    var inputElement = document.getElementById("n1");
    var inputElement1 = document.getElementById("n2");
    inputElement.value = "";
    inputElement1.value = "";
}
