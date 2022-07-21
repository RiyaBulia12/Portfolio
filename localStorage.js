const contactInfo = document.getElementById('conatct-form');

const contactDetails = {
   fullname: String,
   email: String,
   message: String,
}

window.onload = () => {
   const contactData = JSON.parse(localStorage.getItem('contactDetails'));

   //populate the local storage info into the form
   document.getElementById('fullname').value = contactData.fullname;
   document.getElementById('email').value = contactData.email;
   document.getElementById('message').value = contactData.message;

}

contactInfo.onchange = function () {

}
