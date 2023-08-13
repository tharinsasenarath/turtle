$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault(); // Prevent form submission
        
        localStorage.setItem("fullname", $('#fullname').val());
        localStorage.setItem("mobilenumber", $('#mobnumber').val());
        localStorage.setItem("email", $('#emailadress').val());
        localStorage.setItem("cemail", $('#ceadress').val());
        localStorage.setItem("gender", $('#gender').val());

        // Display values in the table
        document.getElementById("nameview").innerHTML = localStorage.getItem("fullname");
        document.getElementById("mobilenumberview").innerHTML = localStorage.getItem("mobilenumber");
        document.getElementById("emailadressview").innerHTML = localStorage.getItem("email");
        document.getElementById("cemailadress").innerHTML = localStorage.getItem("cemail");
        document.getElementById("genderview").innerHTML = localStorage.getItem("gender");
    });

    // Display values on page load
    document.getElementById("nameview").innerHTML = localStorage.getItem("fullname");
    document.getElementById("mobilenumberview").innerHTML = localStorage.getItem("mobilenumber");
    document.getElementById("emailadressview").innerHTML = localStorage.getItem("email");
    document.getElementById("cemailadress").innerHTML = localStorage.getItem("cemail");
    document.getElementById("genderview").innerHTML = localStorage.getItem("gender");

document.getElementById("dateview").innerHTML = localStorage.getItem("date");
document.getElementById("fchildview").innerHTML = localStorage.getItem("fChild");
document.getElementById("fadultview").innerHTML = localStorage.getItem("fAdults");
document.getElementById("infantsview").innerHTML = localStorage.getItem("infants");
document.getElementById("sladultview").innerHTML = localStorage.getItem("slAdults");
document.getElementById("slchildview").innerHTML = localStorage.getItem("slChild");
document.getElementById("durationview").innerHTML = localStorage.getItem("duration");


});