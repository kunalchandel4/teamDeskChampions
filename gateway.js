let arr=[{
    cardno:"123456789",
           CVVnO:"234",
           date:"3",

           year:"15"
       },
       { 
        cardno:"222222222",
           CVVnO:"123",
           date:"3",
           year:"15"
       },

    ]


document.querySelector("#on").addEventListener("click",otp)
function otp(event){
// event.preventDefault()

let a=document.querySelector("#month").value
let b=document.querySelector("#cvvNo").value
let c=document.querySelector("#card").value
let d=document.querySelector("#year").value
// let d=document.querySelector("#name").value

let flag = "pakisthan" ;
for(let i=0 ; i<arr.length ; i++){
let el=arr[i] ;
if(el.cardno===c && el.CVVnO===b && el.date===a && el.year===d){
  flag="indian" ;
}
}

if(flag==="indian"){

 alert("PLS ENTER YOUR OTP")
    window.location.href="otp.html"
}else{
alert("Error")
}







}