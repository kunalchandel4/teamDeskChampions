let data=[{img:"https://static.zara.net/photos///2022/I/0/3/p/7878/767/400/302/w/613/7878767400_1_1_1.jpg?ts=1655285444145",
name:"POKÉMON © NINTENDO BERMUDA SHORTS",
price:1590,
productID:"T-SHIRT"

},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6208/665/250/302/w/613/6208665250_1_1_1.jpg?ts=1655285430112",
name:"EMBOSSED BUZZ LIGHTYEAR © DISNEY SWEATSHIRT",
price:1990,
productID:"T-SHIRT"

},
]
var b=47
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
function displayLarge(data){
    document.querySelector("#grid").innerHTML="" ;
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
        document.querySelector("#grid").append(div3)
    })
}
displayLarge(data)

let Datascroll=[{
    img:"https://static.zara.net/photos///2022/I/0/3/p/6208/700/427/2/w/297/6208700427_6_1_1.jpg?ts=1653551348221",
    name:"POKÉMON © NINTENDO T-SHIRT",
    price:1290,
    productID:"T-SHIRT",

},{img:"https://static.zara.net/photos///2022/I/0/3/p/7878/767/400/2/w/297/7878767400_6_1_1.jpg?ts=1653577179486",
name:"POKÉMON © NINTENDO BERMUDA SHORTS",
price:1590,
productID:"SHORTS"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6224/709/427/2/w/297/6224709427_6_1_1.jpg?ts=1652688137228",
name:"SNOOPY ®PEANUTS T-SHIRT",
price:1090,
ProductID:"T-SHIRT",},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6224/708/611/2/w/297/6224708611_6_1_1.jpg?ts=1654255003270",
name:"SNOOPY ®PEANUTS T-SHIRT",
price:1090,
ProductID:"T-SHIRT",},

{img:"https://static.zara.net/photos///2022/I/0/3/p/6208/698/700/2/w/386/6208698700_6_2_1.jpg?ts=1653551329832",
name:"HOMER SIMPSON ™ T-SHIRT",
price:1290,
ProductID:"T-SHIRT",},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6208/698/700/2/w/386/6208698700_6_1_1.jpg?ts=1653551342624",
name:"HOMER SIMPSON ™ T-SHIRT",
price:1290,
ProductID:"T-SHIRT",},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6887/760/485/2/w/301/6887760485_6_1_1.jpg?ts=1654773979245",
name:"POPLIN CARGO TROUSERS",
price:1790,
ProductID:"TROUSER",},
{img:"https://static.zara.net/photos///2022/V/0/3/p/6887/621/250/2/w/301/6887621250_6_1_1.jpg?ts=1643373916735",
name:"LINEN BLEND SHIRT",
price:1590,
ProductID:"SHIRT",},

{img:"https://static.zara.net/photos///2022/V/0/3/p/0895/679/250/2/w/301/0895679250_6_1_1.jpg?ts=1645017968226",
name:"BASIC POLO SHIRT",
price:690,
ProductID:"SHIRT",},

{img:"https://static.zara.net/photos///2022/V/0/3/p/3182/687/600/2/w/301/3182687600_6_1_1.jpg?ts=1645520019805",
name:"STRIPED SHIRT",
price:1590,
ProductID:"SHIRT",},
 ]

 var b=49
for(let i=0 ;i<Datascroll.length ; i++){
    let x=Datascroll[i]
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


//  console.log(Datascroll);
function displaySecondSec(data){
    document.querySelector("#item").innerHTML="";
data.map(function(el){
    let body = document.querySelector("#item")
    let div = document.createElement("div")
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
       
    let img=document.createElement("img")
      img.src=el.img
      img.addEventListener("click",function(){
        localSet(el)
      })
    let p = document.createElement("p")
  p.innerText=el.name
  p.addEventListener("click",function(){
    localSet(el)
  })
    let price = document.createElement("p")
    price.innerText="₹ "+el.price+".00" ;
    div1.append(img)
    div2.append(p,price)
    div.append(div1,div2)
    body.append(div)    
})

}
displaySecondSec(Datascroll)

let Datascroll2=[{
    img:"https://static.zara.net/photos///2022/I/0/3/p/7878/701/250/2/w/297/7878701250_6_1_1.jpg?ts=1655307299097",
    name:"MICKEY MOUSE © DISNEY T-SHIRT",
    price:1090,
    productID:"T-SHIRT",

},{img:"https://static.zara.net/photos///2022/V/0/3/p/4873/712/802/2/w/297/4873712802_6_1_1.jpg?ts=1651591802005",
name:"SPORTY NEON SPRAY HOODIE",
price:2290,
productID:"HOODIE"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/4873/775/250/2/w/297/4873775250_6_2_1.jpg?ts=1654614473764",
name:"SPORTY TECHNICAL T-SHIRT",
price:1290,
ProductID:"T-SHIRT",},
{img:"https://static.zara.net/photos///2022/I/0/3/p/4873/775/250/2/w/297/4873775250_6_1_1.jpg?ts=1654614477515",
name:"SPORTY TECHNICAL T-SHIRT",
price:1290,
ProductID:"T-SHIRT",},

{img:"https://static.zara.net/photos///2022/I/0/3/p/5319/760/322/2/w/301/5319760322_6_1_1.jpg?ts=1653920693833",
name:"SPORTY T-SHIRT",
price:1090,
ProductID:"T-SHIRT",},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6208/698/700/2/w/386/6208698700_6_1_1.jpg?ts=1653551342624",
name:"SPORTY T-SHIRT",
price:1090,
ProductID:"T-SHIRT",},
{img:"https://static.zara.net/photos///2022/V/0/3/p/4873/710/250/2/w/297/4873710250_6_1_1.jpg?ts=1650888633073",
name:"SPORTY GRAFFITI T-SHIRT",
price:1090,
ProductID:"T-SHIRT",},
{img:"https://static.zara.net/photos///2022/V/0/3/p/5319/661/250/2/w/301/5319661250_6_1_1.jpg?ts=1649087990547",
name:"SPORTY GRAFFITI T-SHIRT",
price:1090,
ProductID:"T-SHIRT",},

{img:"https://static.zara.net/photos///2022/V/0/3/p/4873/687/250/2/w/301/4873687250_6_1_1.jpg?ts=1646909548368",
name:"SPORTY HOODED T-SHIRT",
price:1290,
ProductID:"T-SHIRT",},

{img:"https://static.zara.net/photos///2022/V/0/3/p/4873/705/800/2/w/301/4873705800_6_1_1.jpg?ts=1651140739406",
name:"PLUSH CARGO BERMUDAS",
price:1590,
ProductID:"SHORT",},
 ]


 var b=59
for(let i=0 ;i<Datascroll2.length ; i++){
    let x=Datascroll2[i]
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

// console.log(Datascroll2)
 function displays(data){
    document.querySelector("#scroll").innerHTML="";
data.map(function(el){
    let body = document.querySelector("#scroll")
    let div = document.createElement("div")
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
       
    let img=document.createElement("img")
      img.src=el.img
      img.addEventListener("click",function(){
        localSet(el)
      })
    let p = document.createElement("p")
  p.innerText=el.name
  p.addEventListener("click",function(){
    localSet(el)
  })
    let price = document.createElement("p")
    price.innerText="₹ "+el.price+".00" ;
    div1.append(img)
    div2.append(p,price)
    div.append(div1,div2)
    body.append(div)    
})

}
displays(Datascroll2)


function localSet(el){
  // console.log("kunal");
 
  localStorage.setItem("display",JSON.stringify(el))
  window.location.href="linkimage.html"
}

let logdata=JSON.parse(localStorage.getItem("Userdata"))

logdata.forEach(function(elem){
	document.querySelector("#lg").innerText=elem.name;
})