
function showUsers () {

    var user1 = {
        userName : "user1",
        password : "password1"
    };
    
    var user2 = {
        userName : "user2",
        password : "password2"
    };
    
    var user3 = {
        userName : "user3",
        password : "password3"
    };
    
    localStorage.setItem("user1",JSON.stringify(user1));
    localStorage.setItem("user2",JSON.stringify(user2));
    localStorage.setItem("user3",JSON.stringify(user3));
    
}

showUsers();


function formulario(){


    var userName=document.getElementsByTagName("input")[0].value;
    var password=document.getElementsByTagName("input")[1].value;

    document.getElementById("userInput").classList.remove("borderColorDanger");
    document.getElementById("passwordInput").classList.remove("borderColorDanger");
    document.getElementById("userInput").classList.remove("borderColorAlert");
    document.getElementById("passwordInput").classList.remove("borderColorAlert");

    danger.style.display = 'none';


    if(userName.length == 0 || password.length == 0){
        //alert("Has dejado un campo obliatorio vacio , favor de llenar y volver a enviar");

        danger.style.display = 'block';
        if(userName.length == 0){
            document.getElementById("userInput").classList.add("borderColorDanger");
        }
        if(password.length == 0){
            document.getElementById("passwordInput").classList.add("borderColorDanger");
        }
    }
    else{
        if (userName == "pau" && password == "123"){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Welcome',
                showConfirmButton: false,
                timer: 1500
            })
            
            document.getElementsByTagName("input")[0].value = "";
            document.getElementsByTagName("input")[1].value = "";
            
        }
        else{
            document.getElementById("userInput").classList.add("borderColorDanger");
            document.getElementById("passwordInput").classList.add("borderColorDanger");
            wrong.style.display = 'block';
        }
    }
}