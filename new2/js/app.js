if(confirm("Do you agree the terms?") === true) {
    alert("Welcome to the website")
   
}
else{
    alert("Thanks for all")
    document.body.style.display = "none"
}


var age = prompt("Enter your name")
if(age > 18){

}
else{
    alert("Age is invalid")
    // document.body.style.display = "none"
}

function darkwhite(){
    var body = document.body;
    var icon = document.getElementById("icon");

    if(body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white"
        body.style.color = "black"
        icon.className = "fa-solid fa-moon"
    }
    else{
        body.style.backgroundColor = "black"
        body.style.color = "white"
        icon.className = "fa-solid fa-sun"
   
    }

}

function AddUser() {
    var username = document.getElementById("input").value.slice(0);
    var span = document.getElementById("username");
    span.innerHTML =  username
    
   

    if(username < 100 && username <= 199){
        document.body.style.backgroundColor = "yellow"
    }
    else if (username < 200 && username <= 299){
        document.body.style.backgroundColor = "red"
    }

    else if (username < 300 && username <= 399){
        document.body.style.backgroundColor = "blue"
       
    
    }

}