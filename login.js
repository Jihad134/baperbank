document.getElementById("btn").addEventListener("click",function(){
    const userEmail=document.getElementById("userEmail");
    const email=userEmail.value;

    const userPasssword=document.getElementById("userPasswor");
    const password=userPasssword.value;
    if(email ==="learnerJiihad@gmail.com" && password === "learner@1122"){
        window.location.href="indes.html"
    }
    else{
       alert("this my mistake")
    }
})


