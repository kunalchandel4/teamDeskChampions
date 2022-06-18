let cartData=JSON.parse(localStorage.getItem("display"))||{}

let data=[{img:"https://static.zara.net/photos///2022/I/0/3/p/4493/702/330/102/w/613/4493702330_1_1_1.jpg?ts=1654242619081",
name:"CONTRAST CROCHET DRESS",
price:2490,
productID:"CROCHET"
}]
var b=108
for(let i=0 ;i<data.length ; i++){
    let x=data[i]
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
// console.log(data);

function displayCont(data){
    document.querySelector("#cont").innerHTML="" ;

    data.forEach(function(el){
    
     let div1=document.createElement("div")
     let div2=document.createElement("div")
     let div3=document.createElement("div")
     let div4=document.createElement("div")
     let div5=document.createElement("div")
     let img=document.createElement("img")
     img.src=el.img ;
     img.addEventListener("click",function(){
        localSet(el)
      })
     let name=document.createElement("p")
     name.innerText=el.name ;
     name.addEventListener("click",function(){
        localSet(el)
      })

     let price=document.createElement("p")
     price.innerText="₹ "+el.price+".00" ;
     let h1=document.createElement("h1")
     h1.innerText="GRASS HOPPER"
     let p=document.createElement("p")
     p.innerText="A SHORT HOLIDAY IN THE COUNTRYSIDE EXPLORING THE OUTDOORS"
     div2.append(h1,p)
     div4.append(name,price)
     div3.append(img)
     div1.append(div3,div4)
     document.querySelector("#cont").append(div1,div2)

    })
        
    }
    displayCont(data)

    let scrollData=[{img:"https://static.zara.net/photos///2022/V/0/3/p/1362/261/306/2/w/386/1362261306_6_1_1.jpg?ts=1647275736222",
name:"CONTRAST CROCHET DRESS",
price:2490,
productID:"CROCHET"},

{img:"https://static.zara.net/photos///2022/V/0/3/p/1362/261/306/2/w/386/1362261306_6_1_1.jpg?ts=1647275736222",
name:"CROPPED LINEN BLOUSE",
price:1790,
productID:"BLOUSE"},
{img:"https://static.zara.net/photos///2022/V/0/3/p/1340/072/612/2/w/386/1340072612_6_1_1.jpg?ts=1651659798477",
name:"CUT-OUT LINEN DRESS",
price:2490,
productID:"BLOUSE"},
{img:"https://static.zara.net/photos///2022/I/1/3/p/2602/030/203/2/w/386/2602030203_6_4_1.jpg?ts=1654010900902",
name:"KIDS/ STRAPPY BEADED SANDALS",
price:2590,
productID:"CROCHET"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/5770/700/620/2/w/402/5770700620_6_1_1.jpg?ts=1654007906986",
name:"EMBROIDERED TOP",
price:1590,
productID:"TOP"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/5770/701/620/2/w/402/5770701620_6_1_1.jpg?ts=1654182211137",
name:"EMBROIDERED TROUSERS",
price:1990,
productID:"TROUSERS"},
{img:"https://static.zara.net/photos///2022/I/1/3/p/2601/030/097/2/w/402/2601030097_6_1_1.jpg?ts=1651758631235",
name:"KIDS/ MONOCHROME SANDALS",
price:2590,
productID:"SANDALS"},  

{img:"https://static.zara.net/photos///2022/V/0/3/p/1437/214/520/2/w/402/1437214520_6_1_1.jpg?ts=1651076583161",
name:"LINEN JUMPSUIT WITH CUT-OUT DETAIL.",
price:2490,
productID:"JUMSUIT"},  
{img:"https://static.zara.net/photos///2022/I/0/3/p/7200/701/620/2/w/386/7200701620_6_1_1.jpg?ts=1654007897804",
name:"CROCHET TOP",
price:1590,
productID:"CROCHET"},  
{img:"https://static.zara.net/photos///2022/I/0/3/p/7200/750/620/2/w/386/7200750620_6_1_1.jpg?ts=1654007892221",
name:"CROCHET BERMUDA SHORTS",
price:1790,
productID:"CROCHET"},  



 ]


 var b=109
for(let i=0 ;i<scrollData.length ; i++){
    let x=scrollData[i]
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
// console.log(scrollData)
// console.log(scrollData.length)
displayScroll(scrollData)
function displayScroll(data){
    document.querySelector("#main").innerHTML="";
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
    document.querySelector("#main").append(div3)




})

}
let data2=[{
    img:"https://static.zara.net/photos///2022/I/0/3/p/7521/705/520/102/w/772/7521705520_1_1_1.jpg?ts=1654242619917",
    name:"SCALLOPED DRESS",
    price:2290,
    productid:"SCALLOPED"
}]
var b=119
for(let i=0 ;i<data2.length ; i++){
    let x=data2[i]
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
// console.log(data2);
function displayLarge(data){
    document.querySelector("#disp").innerHTML="" ;
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
        document.querySelector("#disp").append(div3)
    })
}
displayLarge(data2)

let dataScroll2=[{
    img:"https://static.zara.net/photos///2022/I/0/3/p/7901/611/615/2/w/402/7901611615_6_1_1.jpg?ts=1652199815362",
    name:"KNIT DRESS WITH DIAMONDS",
    price:1990,
    productID:"KNIT DRESS"
},
{
    img:"https://static.zara.net/photos///2022/I/1/3/p/2601/030/070/2/w/402/2601030070_6_1_1.jpg?ts=1651767220490",
    name:"KIDS/ MONOCHROME SANDALS",
    price:2590,
    productID:"SANDALS"
},
{
    img:"https://static.zara.net/photos///2022/V/1/3/p/1251/930/070/2/w/402/1251930070_6_1_1.jpg?ts=1648454444669",
    name:"KIDS/ TANGERINE RAFFIA CROSSBODY BAG",
    price:1990,
    productID:"BAG"
},
{
    img:"https://static.zara.net/photos///2022/I/0/3/p/3991/702/300/102/w/468/3991702300_15_1_1.jpg?ts=1655121343578",
    name:"CROCHET HALTER NECK TOP",
    price:1590,
    productID:"TOP"
},

{
    img:"https://static.zara.net/photos///2022/I/0/3/p/3991/702/712/102/w/468/3991702712_15_1_1.jpg?ts=1655121343047",
    name:"CROCHET HALTER NECK TOP",
    price:1590,
    productID:"TOP"
},

{
    img:"https://static.zara.net/photos///2022/I/0/3/p/1681/746/064/2/w/297/1681746064_6_1_1.jpg?ts=1654787238743",
    name:"FLORAL TEXTURED DRESS",
    price:1790,
    productID:"FLORAL"
},
{
    img:"https://static.zara.net/photos///2022/I/0/3/p/2725/704/250/2/w/297/2725704250_6_1_1.jpg?ts=1654615609447",
    name:"CROCHET TOP",
    price:990,
    productID:"TOP"
},
{
    img:"https://static.zara.net/photos///2022/I/0/3/p/6201/700/401/102/w/613/6201700401_15_1_1.jpg?ts=1653929030517",
    name:"PLEATED TROUSERS",
    price:1490,
    productID:"TROUSERS"
},
{
    img:"https://static.zara.net/photos///2022/I/0/3/p/6050/700/520/2/w/297/6050700520_6_1_1.jpg?ts=1654615610773",
    name:"TIE-DYE JUMPSUIT",
    price:1590,
    productID:"JUMPSIT"
},
{
    img:"https://static.zara.net/photos///2022/V/0/3/p/9006/063/406/2/w/297/9006063406_6_1_1.jpg?ts=1649863667178",
    name:"LOS ANGELES DRESS",
    price:1790,
    productID:"SHORT_DRESS"
},
]

var b=120
for(let i=0 ;i<dataScroll2.length ; i++){
    let x=dataScroll2[i]
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


console.log(dataScroll2);

// console.log(dataScroll2.length);

displayScroll2(dataScroll2)
function displayScroll2(data){
    document.querySelector("#sec").innerHTML="";
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
    document.querySelector("#sec").append(div3)




})

}

function localSet(el){
    // console.log("kunal");
   
    localStorage.setItem("display",JSON.stringify(el))
    window.location.href="linkimage.html"
}