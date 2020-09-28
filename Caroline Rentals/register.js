function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var nama = document.getElementById('nama');
var email = document.getElementById('email');
var genderMale = document.getElementById('genderMale');
var genderFemale = document.getElementById('genderFemale');
var alamat = document.getElementById('alamat');
var city = document.getElementById('city');
var cityError = document.getElementById('cityError');
var namaError = document.getElementById('namaError');
var emailError = document.getElementById('emailError');
var alamatError = document.getElementById('alamatError');

document.getElementById('submitbtn').onclick = function(){
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(nama.value.length === 0){
        namaError.innerHTML = "Username tidak boleh kosong";
    }
    else{
        namaError.innerHTML = "";
    }

    if(email.value.length === 0){
        emailError.innerHTML = "Email tidak boleh kosong";
    }
    else if(!regexEmail.test(email.value) && email.value.length > 0){
        emailError.innerHTML = "Email tidak sesuai format";
    }
    else{
        emailError.innerHTML = "";
    }

       if(alamat.value.length === 0){
        alamatError.innerHTML = "Alamat tidak boleh kosong";
    }
    else if(!(alamat.value.substring(0, 6) === "Street" || alamat.value.substring(0, 6) === "street") && alamat.value.length > 0){
        alamatError.innerHTML = "Alamat tidak sesuai format";
    }
    else{
        alamatError.innerHTML = "";
    }
    
    if(!genderMale.checked && !genderFemale.checked){
        genderError.innerHTML = "Gender tidak boleh tidak dipilih"
    }
    else{
        genderError.innerHTML = "";
    }
    
    if (city.value = "0"){
        cityError.innerHTML = "City tidak boleh kosong";
    }

    else{
        cityError.innerHTML ="";
    }
    
    if( regexEmail.test(email.value) && 
        (genderMale.checked || genderFemale.checked) &&
        (alamat.value.substring(0, 6) === "Street" || alamat.value.substring(0, 6) === "street") && alamat.value.length > 0)
    {
        submitedNotice.innerHTML = "Submitted";
    }
    else{
        submitedNotice.innerHTML = "";
    }
}