var email = document.getElementById('email');
            var password = document.getElementById('password');
            var emailError = document.getElementById('emailError');
            var passwordError = document.getElementById('passwordError');

             document.getElementById('submitbtn').onclick = function(){
               
                if(email.value.length === 0){
                    emailError.innerHTML = "Email tidak boleh kosong";
                }
                else{
                    emailError.innerHTML = "";
                }
                if(password.value.length === 0){
                    passwordError.innerHTML = "Password tidak boleh kosong";
                }
                else{
                    passwordError.innerHTML = "";
                }
            }

            function myFunction() {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            }           