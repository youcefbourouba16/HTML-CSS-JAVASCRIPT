function droplist() {
    let check = document.getElementById("burger");
    let droplist = document.getElementById("drop");

    console.log("worked");

    if (window.innerWidth <= 767) {
        if (check.checked) {

            console.log("worked");
            droplist.classList.add("dropdown_menuRemover");
        }
        if (!check.checked) {
            droplist.classList.remove("dropdown_menuRemover");
        }

        droplist.style.display = "block";
    } else {
        droplist.style.display="none";
    }
}

// Event listener for screen width change
window.addEventListener("resize", droplist);


