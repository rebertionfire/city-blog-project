/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function ClearFields() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

function hello(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    document.getElementById('nome').innerText = `${name}` 
    document.getElementById('mail').innerText = `${email}`
    document.getElementById('opacity').style.display='block'
    document.getElementById('popup').style.display = 'block'

}

function exitPopUp() {
    document.getElementById('popup').style.display = 'none'
    document.getElementById('opacity').style.display='none'
}
