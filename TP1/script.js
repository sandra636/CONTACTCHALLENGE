/*recuper l'id de l'element selectionne*/
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const radio1 = document.getElementById('query1');
const radio2 = document.getElementById('query2');
const consent = document.getElementById('consent');
const mgs = document.getElementById('message');



document.getElementById("Form").addEventListener("submit", function (event) {

    if (firstname.value.trim() === "") {
        event.preventDefault();  /*prevenir les codes vides */
        firstname.style.border = "2px solid red";
        document.getElementById('firstname-error').style.display = "block";
    }
    if (lastname.value.trim() === "") {
        event.preventDefault();  /*prevenir les codes vides */
        lastname.style.border = "2px solid red";
        document.getElementById('lastname-error').style.display = "block";
    }

    if (email.value.trim() === "") {
        event.preventDefault();  /*prevenir les codes vides */
        email.style.border = "2px solid red";
        document.getElementById('email-error').style.display = "block";
    }
    if (mgs.value.trim() === "") {
        event.preventDefault();  /*prevenir les codes vides */
        mgs.style.border = "2px solid red";
        document.getElementById('message-error').style.display = "block";
    }
    if (!radio1.checked && !radio2.checked) {
        event.preventDefault();
        /*prevenir les codes vides */
        document.getElementById('query-error').style.display = "block";

        document.getElementById('radio1').style.border = "2px solid red";
        document.getElementById('radio2').style.border = "2px solid red";

    }
    if (consent.checked) {
        event.preventDefault();  /*prevenir les codes vides */
        consent.style.border = "2px solid red";

        document.getElementById('consent-error').style.border = "2px solid red";

    }
if(firstname.value.trim()!==""&& firstname.value.trim()!==""&& lastname.value.trim()!==""&& email.value.trim());




})


