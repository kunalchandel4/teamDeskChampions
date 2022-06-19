
let cartData=JSON.parse(localStorage.getItem("display"))||{}





let noise=[{img:"https://static.zara.net/photos///2022/I/0/3/p/6048/566/712/402/w/613/6048566712_1_1_1.jpg?ts=1654154307042",
name:"TEXTURED STRIPED TOP",
price:1490,
ProductID:"TOP"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/7545/531/712/402/w/613/7545531712_1_1_1.jpg?ts=1654154307653",
name:"TEXTURED STRIPED TOP",
price:1490,
ProductID:"TOP"},]
var b=11
for(let i=0 ;i<noise.length ; i++){
    let x=noise[i]
    if(x.quantity===undefined){
        x.quantity=1
    } if(x.category===undefined){
        x.category=b
      b++
    }
    if(x.cartePrice===undefined){
           x.cartePrice=x.price 
    }
    
}
// console.log(noise);
// console.log(noise)

function display(data){
    document.querySelector("#noise").innerHTML="" ;
    data.forEach(function(el){
        let div3 =  document.createElement("div")
        let div =  document.createElement("div")
        let div1 =  document.createElement("div")
        let img =document.createElement("img")
        img.src=el.img ;
        img.addEventListener("click",function(){
          localSet(el)
        })
        let name= document.createElement("p")
        name.innerText=el.name ;
        name.addEventListener("click",function(){
            localSet(el)
          })
        let price =  document.createElement("p")
        price.innerText="₹ "+el.price+".00" ;
      
        div.append(img)
        div1.append(name,price)
        div3.append(div,div1)
        document.querySelector("#noise").append(div3)
    })
}
display(noise)

let baby=[{img:"https://static.zara.net/photos///2022/I/0/3/p/6048/563/712/2/w/297/6048563712_6_1_1.jpg?ts=1652370563860",
name:"SPECKLED TEXTURED SHIRT",
price:1490,
ProductID:"SHIRT"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/7545/531/712/2/w/297/7545531712_6_1_1.jpg?ts=1653490628926",
name:"TEXTURED STRIPED TOP",
price:1490,
ProductID:"TOP"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6048/566/712/405/w/613/6048566712_1_1_1.jpg?ts=1654154459243",
name:"SMOOTH TEXTURE SHIRT",
price:1490,
ProductID:"SHIRT"},
{img:"https://static.zara.net/photos///2022/I/1/3/p/6651/030/030/2/w/297/6651030030_6_1_1.jpg?ts=1652969488170",
name:"BABY/ LEATHER SANDALS",
price:2290,
ProductID:"SANDALS"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/5643/505/712/403/w/1247/5643505712_15_1_1.jpg?ts=1654689048766",
name:"PALM TREE T-SHIRT",
price:790,
ProductID:"SHIRT"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/5643/505/712/2/w/297/5643505712_6_1_1.jpg?ts=1654180636640",
name:"PALM TREE T-SHIRT",
price:790,
ProductID:"SHIRT"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/7878/559/250/402/w/1247/7878559250_15_1_1.jpg?ts=1654689051402",
name:"TECHNICAL PALM TREE T-SHIRT",
price:890,
ProductID:"SHIRT"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/7878/559/250/2/w/297/7878559250_6_1_1.jpg?ts=1653402201520",
name:"TECHNICAL PALM TREE T-SHIRT",
price:890,
ProductID:"SHIRT"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/7878/559/250/2/w/297/7878559250_6_2_1.jpg?ts=1653402203689",
name:"TECHNICAL PALM TREE T-SHIRT",
price:890,
ProductID:"SHIRT"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/0377/558/500/402/w/613/0377558500_1_1_1.jpg?ts=1654689051981",
name:"PALM TREE BERMUDA SHORTS",
price:890,
ProductID:"SHORT"},
]


var a=1
for(let i=0 ;i<baby.length ; i++){
    let x=baby[i]
    if(x.quantity===undefined){
        x.quantity=1
    } if(x.category===undefined){
        x.category=a
      a++
    }
    if(x.cartePrice===undefined){
           x.cartePrice=x.price 
    }
    
}

// console.log(baby)
// console.log(baby.length);
function baby1(data){
    document.querySelector("#img").innerHTML="" ;
    data.forEach(function(el){
        let div3 =  document.createElement("div")
        let div =  document.createElement("div")
        let div1 =  document.createElement("div")
        let img =document.createElement("img")
        img.src=el.img ;
        img.addEventListener("click",function(){
          localSet(el)
        })
        let name= document.createElement("p")
        name.innerText=el.name ;
       
         name.addEventListener("click",function(){
            localSet(el)
          })
        let price =  document.createElement("p")

        price.innerText="₹ "+el.price+".00" ;
       
        div.append(img)
        div1.append(name,price)
        div3.append(div,div1)
        document.querySelector("#img").append(div3)
    })
}
baby1(baby)


let baby2=[{img:"https://static.zara.net/photos///2022/I/0/3/p/0722/508/500/2/w/297/0722508500_6_1_1.jpg?ts=1653986212859",
name:"HENLEY T-SHIRT",
price:590,
ProductID:"SHIRT"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6264/553/300/2/w/297/6264553300_6_1_1.jpg?ts=1654597749606",
name:"TIE-DYE BERMUDA SHORTS",
price:890,
ProductID:"SHORT"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6264/552/306/2/w/297/6264552306_6_1_1.jpg?ts=1654243882694",
name:"PASSION FRUIT PRINT T-SHIRT",
price:790,
ProductID:"SHIRT"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6264/554/306/2/w/297/6264554306_6_1_1.jpg?ts=1654243894445",
name:"PASSION FRUIT PRINT BERMUDA SHORTS",
price:890,
ProductID:"SHORT"},

{img:"https://static.zara.net/photos///2022/V/0/3/p/5048/507/526/2/w/297/5048507526_6_1_1.jpg?ts=1652957762429",
name:"3-PACK OF STRIPED T-SHIRTS",
price:1290,
ProductID:"SHIRT"},

{img:"https://static.zara.net/photos///2022/V/0/3/p/3337/583/712/2/w/297/3337583712_6_1_1.jpg?ts=1651066419517",
name:"COLOURED DENIM DUNGAREES",
price:1590,
ProductID:"DENIM"},

{img:"https://static.zara.net/photos///2022/V/1/3/p/8613/930/030/2/w/297/8613930030_6_1_1.jpg?ts=1648549176373",
name:"BABY/ QUILTED SANDALS",
price:2490,
ProductID:"SANDAL"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/2209/551/402/2/w/297/2209551402_6_1_1.jpg?ts=1654605622926",
name:"LINK KNIT SWEATER",
price:1090,
ProductID:"SWEATER"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/6048/550/712/2/w/297/6048550712_6_1_1.jpg?ts=1654851003850",
name:"FALSE PLAIN SHIRT",
price:1290,
ProductID:"SHIRT"},

{img:"https://static.zara.net/photos///2022/I/1/3/p/8639/930/107/2/w/297/8639930107_6_4_1.jpg?ts=1653410458623",
name:"BABY/ LEATHER SANDALS",
price:2290,
ProductID:"SANDALS"},
]


var b=13
for(let i=0 ;i<baby2.length ; i++){
    let x=baby2[i]
    if(x.quantity===undefined){
        x.quantity=1
    } if(x.category===undefined){
        x.category=b
      b++
    }
    if(x.cartePrice===undefined){
           x.cartePrice=x.price 
    }
    
}
console.log(baby2)

function baby3(data){
    document.querySelector("#img2").innerHTML="" ;
    data.forEach(function(el){
        let div3 =  document.createElement("div")
        let div =  document.createElement("div")
        let div1 =  document.createElement("div")
        let img =document.createElement("img")
        img.src=el.img ;
        img.addEventListener("click",function(){
          localSet(el)
        })
        let name= document.createElement("p")
        name.innerText=el.name ;
         name.addEventListener("click",function(){
            localSet(el)
          })
        let price =  document.createElement("p")
        price.innerText="₹ "+el.price+".00" ;
  
        div.append(img)
        div1.append(name,price)
        div3.append(div,div1)
        document.querySelector("#img2").append(div3)
    })
}
baby3(baby2)

// console.log(bab);
function localSet(el){
    // console.log("kunal");
   
    localStorage.setItem("display",JSON.stringify(el))
    window.location.href="linkimage.html"
}

let logdata=JSON.parse(localStorage.getItem("Userdata"))

logdata.forEach(function(elem){
	document.querySelector("#lg").innerText=elem.name;
})