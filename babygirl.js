let cartData=JSON.parse(localStorage.getItem("display"))||{}


let scrollData1=[{img:"https://static.zara.net/photos///2022/I/0/3/p/0485/515/052/2/w/297/0485515052_6_1_1.jpg?ts=1653902245076",
name:"FLORAL TEXTURED DRESS",
price:1490,
ProductID:"picture1"},
{img:"https://static.zara.net/photos///2022/I/1/3/p/6639/030/002/2/w/297/6639030002_6_1_1.jpg?ts=1652961637296",
name:"BABY/ FLORAL SANDALS",
price:2590,
ProductID:"picture2"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/2211/502/075/2/w/297/2211502075_6_1_1.jpg?ts=1653919540774",
name:"RUSTIC T-SHIRT WITH TIED DETAILS",
price:990,
ProductID:"picture11"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/0485/518/712/2/w/297/0485518712_6_1_1.jpg?ts=1653902169868",
name:"TEXTURE FLORAL CULOTTES",
price:1290,
ProductID:"picture3"},
{img:"https://static.zara.net/photos///2022/I/1/3/p/6659/030/002/2/w/297/6659030002_6_4_1.jpg?ts=1652189276713",
name:"BABY/ LEATHER SANDALS",
price:3590,
ProductID:"picture4"},
{img:"https://static.zara.net/photos///2022/I/1/3/p/8017/930/090/2/w/297/8017930090_6_4_1.jpg?ts=1655284074619",
name:"BABY/ WELLIES",
price:2490,
ProductID:"picture5"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/5767/506/658/2/w/297/5767506658_6_1_1.jpg?ts=1653490205137",
name:"CONTRAST STRIPED TEXTURED TOP",
price:990,
ProductID:"picture6"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6061/510/251/2/w/297/6061510251_15_2_1.jpg?ts=1654863366520",
name:"© DISNEY T-SHIRT",
price:990,
ProductID:"picture7"},
{img:"https://static.zara.net/photos///2022/I/1/3/p/6639/030/002/2/w/297/6639030002_6_4_1.jpg?ts=1655218801232",
name:"BABY/ FLORAL SANDALS",
price:990,
ProductID:"picture8"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6129/476/600/2/w/297/6129476600_6_1_1.jpg?ts=1653463015559",
name:"FLORAL DETAIL CUT-OUT DRESS",
price:2290,
ProductID:"picture9"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6157/446/526/2/w/297/6157446526_6_1_1.jpg?ts=1655221178011",
name:"SCALLOPED DRESS",
price:1990,
ProductID:"picture10"},
]
var b=23
for(let i=0 ;i<scrollData1.length ; i++){
    let x=scrollData1[i]
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
// console.log(scrollData1)
function displays(data){
    document.querySelector("#going").innerHTML="";
data.map(function(el){
    let body = document.querySelector("#going")
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
displays(scrollData1)

let noise=[{img:"https://static.zara.net/photos///2022/V/0/3/p/5770/500/250/203/w/613/5770500250_1_1_1.jpg?ts=1654160118137",
name:"EMBROIDERED DRESS",
price:2290,
ProductID:"picture12"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/5770/500/250/202/w/613/5770500250_1_1_1.jpg?ts=1654263095223",
name:"EMBROIDERED DRESS",
price:2290,
ProductID:"picture13"},]
var b=34
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

let scrollData2=[{img:"https://static.zara.net/photos///2022/I/0/3/p/6142/492/600/2/w/301/6142492600_6_1_1.jpg?ts=1653402201461",
name:"EMBROIDERED LACE JUMPSUIT",
price:1990,
ProductID:"picture14"},
{img:"https://static.zara.net/photos///2022/V/1/3/p/6527/930/107/2/w/301/6527930107_6_2_1.jpg?ts=1655219053190",
name:"BABY/ LEATHER CLOGS",
price:2990,
ProductID:"picture15"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6068/492/250/2/w/301/6068492250_6_1_1.jpg?ts=1653393434919",
name:"EMBROIDERED DRESS",
price:2490,
ProductID:"picture16"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6117/131/620/2/w/297/6117131620_6_1_1.jpg?ts=1653464104974",
name:"POPLIN PANELLED DRESS",
price:1990,
ProductID:"picture17"},
{img:"https://static.zara.net/photos///2022/V/0/3/p/8574/514/712/2/w/297/8574514712_6_1_1.jpg?ts=1644936802584",
name:"EMBROIDERED TOP",
price:1290,
ProductID:"picture18"},
{img:"https://static.zara.net/photos///2022/I/1/3/p/8017/930/090/2/w/297/8017930090_6_4_1.jpg?ts=1655284074619",
name:"BABY/ WELLIES",
price:2490,
ProductID:"picture19"},
{img:"https://static.zara.net/photos///2022/V/0/3/p/1215/398/710/2/w/297/1215398710_6_1_1.jpg?ts=1645520008922",
name:"EMBROIDERED SHIRT",
price:1590,
ProductID:"picture20"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6063/108/620/2/w/297/6063108620_6_1_1.jpg?ts=1652717694187",
name:"PRINTED BERMUDA SHORTS",
price:1590,
ProductID:"picture21"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6067/108/620/2/w/297/6067108620_6_1_1.jpg?ts=1652717704653",
name:"PRINTED SHIRT",
price:1590,
ProductID:"picture22"},
{img:"https://static.zara.net/photos///2022/I/1/3/p/6651/030/030/2/w/297/6651030030_6_2_1.jpg?ts=1652969488143",
name:"BABY/ LEATHER SANDALS",
price:2990,
ProductID:"picture23"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6071/109/620/2/w/297/6071109620_6_1_1.jpg?ts=1652861807217",
name:"FLORAL DRESS",
price:2990,
ProductID:"picture24"},
]
var b=36
for(let i=0 ;i<scrollData2.length ; i++){
    let x=scrollData2[i]
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
// console.log(scrollData2)
function display2(data){
    document.querySelector("#going2").innerHTML="";
    data.map(function(el){
        let body = document.querySelector("#going2")
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
display2(scrollData2)


function localSet(el){
  // console.log("kunal");
 
  localStorage.setItem("display",JSON.stringify(el))
  window.location.href="linkimage.html"
}