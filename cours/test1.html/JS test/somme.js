function somme(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    let s=n1+n2;

    document.getElementById("result").innerHTML = "-la somme de "+n1+" et "+n2+" est = " + s;


}
function subst(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    let s=n1-n2;

    document.getElementById("result").innerHTML = "-la soustraction de "+n1+" a "+n2+" est = " + s;

}
function produit(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    let s=n1*n2;

    document.getElementById("result").innerHTML = "-le Produit de "+n1+" et "+n2+" est = " + s;

}

function div() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    if (n2!=0) {
        let s=n1/n2;
        document.getElementById("result").innerHTML = "-le Produit de "+n1+" et "+n2+" est = " + s;
    }else alert("num 2 doit etre diferent a ZERO. !")



}
