let login=document.querySelector("div>#login");
let datalogin=JSON.parse(localStorage.getItem("logindata"))||[];
login.style.cursor="pointer";
login.addEventListener("click", clicklogin);
let userInfo=JSON.parse(localStorage.getItem("Userdata")) || [];
function clicklogin(){

let email1=document.querySelector("#email").value;
    let pass=document.querySelector("#password").value;
    let x="No";
    userInfo.map(function(element){
        if(element.email===email1&&element.password===pass){
            x="Yes";
            
            window.location.href=""
            
        } else 
        {
            x="No";
        } 
        
    })
    if(x==="Yes"){
        alert("successfully login");
        let obj={email:email1, 
        password:pass}
        datalogin.push(obj);
        localStorage.setItem("logindata",JSON.stringify(datalogin));
        window.location.href="index.html";
    }
    else if(x==="No"){
        alert("wrong password or email");
    } 
    
}
let sign=document.querySelector("#signup");
sign.style.cursor="pointer";
sign.addEventListener("click",submit);
function submit (){
    window.location.href="signUpCW.html";
}