
function openPopup() {
    let v = document.getElementById("test");
    v.classList.add("open-login-html")

}
function closePopup() {
    let v = document.getElementById("test");
    v.classList.remove("open-login-html");
}





//////change back ground when hovering
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit1");
    const submitButton1 = document.getElementById("logUp");
    const loginHtml = document.getElementById("test");

    submitButton.addEventListener("mouseover", function() {
        loginHtml.style.boxShadow = "0 12px 15px 0 rgb(0, 255, 40), 0 17px 50px 0 rgba(0, 0, 0, 0.78)";
    });

    submitButton.addEventListener("mouseout", function() {
        loginHtml.style.boxShadow = "";
    });
    submitButton1.addEventListener("mouseover", function() {
        loginHtml.style.boxShadow = "0 12px 15px 0 rgb(0, 255, 40), 0 17px 50px 0 rgba(0, 0, 0, 0.78)";
    });

    submitButton1.addEventListener("mouseout", function() {
        loginHtml.style.boxShadow = "";
    });
});


function emailvalidation(){
    var email_error = document.getElementById("email-error");
    var user_signin = document.getElementById("user-signin");

    if (!user_signin.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        email_error.innerHTML = "Please enter a valid email address.";
        return false;
    }else email_error.innerHTML = "";

}
function passwordvalidation() {
    var password_error = document.getElementById("password-error");
    var input = document.getElementById("pass-signup").value;
    password_error.innerHTML = "";
    input=input.trim();
    if (input.length < 6) {
        password_error.innerHTML = "The password must contain at least 6 characters.";
        return false;
    } else password_error.innerHTML = "";
    if (!input.match(/[a-z]/)) {
        password_error.innerHTML = "The password must contain at least one lowercase letter.";
        return false;
    } else password_error.innerHTML = "";
    if (!input.match(/[A-Z]/)) {
        password_error.innerHTML = "The password must contain at least one lowercase letter.";
        return false;
    } else password_error.innerHTML = "";
    if (!input.match(/\d/)) {
        password_error.innerHTML = "The password must contain at least one digit.";
        return false;
    } else

        password_error.innerHTML = "";
        return true;

}
function passwordVerfication(){
    let input1 = document.getElementById("pass-signup").value;
    let input2=document.getElementById("pass-repeat").value;
    let error=document.getElementById("password-repeat-error");
    if (!input1.match(input2)){
        error.innerHTML="These passwords do not match. Please try again.";
    }else error.innerHTML = "";
}
function eyee() {
    let img = document.getElementById("eye");

    if (img.src.includes("eye.svg")) {
        img.src = "eye-password-hide-svgrepo-com.svg";
    } else {
        img.src = "eye.svg";
    }

    var x = document.getElementById("pass-signin");

    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

/*
+++++++++++++++ calculatrice+++++++++++++++++++++++++++++++++++++++++++++++++++
 */
function openCal(){
    let d=document.getElementById("d1");
    d.classList.add("calculator2");

}
function closeCal(){
    let d=document.getElementById("d1");
    d.classList.remove("calculator2");
}
var display = document.querySelectorAll(".display");
var operator = "";
var x = 0;

function operations(symbol) {
    if (x == "1") {
        if (symbol == "+" || symbol == "-" || symbol == "*" || symbol == "/") {
            operator = "";
            operator = display[1].value;
            x = 0;
        } else {
            operator = "";
            x = 2;
        }
    }
    if (symbol == "=") {

        if (operator != "") {
            let operation = operator.replace(")(", ")*(");
            try {
                eval(operation);
                res = eval(operation);
                display[1].value = res;
            } catch (error) {
                display[0].value = "Syntax Error";
                display[1].value = "";
                operator = "";
            }
            x = 1;
        }

    } else if (symbol == "C") {
        display[0].value = "";
        display[1].value = "0";
        operator = "";
    } else if (symbol == "<") {
        operator = operator.substring(0, operator.length - 1);
        display[0].value = operator;
    }

    else {
        operator += symbol;
        display[0].value = operator;
    }
}

var div = document.getElementById('d1');


var startX = 0;
var startY = 0;


function startDrag(event) {
    startX = event.clientX;
    startY = event.clientY;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(event) {
    var deltaX = event.clientX - startX;
    var deltaY = event.clientY - startY;
    var newPosX = div.offsetLeft + deltaX;
    var newPosY = div.offsetTop + deltaY;
    div.style.left = newPosX + 'px';
    div.style.top = newPosY + 'px';
    startX = event.clientX;
    startY = event.clientY;
}


function stopDrag() {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}

div.addEventListener('mousedown', startDrag);

function showMenu(item) {
    var popupMenu = document.getElementById('popupMenu');
    popupMenu.style.display = 'block';
    popupMenu.style.left = item.offsetLeft + 'px';
    popupMenu.style.top = (item.offsetTop + item.offsetHeight) + 'px';
    console.log("worked")
}

document.addEventListener('click', function(event) {
    var popupMenu = document.getElementById('popupMenu');
    if (!popupMenu.contains(event.target)) {
        popupMenu.style.display = 'none';
    }
});
