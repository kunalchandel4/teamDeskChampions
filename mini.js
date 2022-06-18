let cartData=JSON.parse(localStorage.getItem("display"))||{}


let mini=[{img:"https://static.zara.net/photos///2022/I/0/3/p/2582/550/706/2/w/297/2582550706_6_1_1.jpg?ts=1654763285262",
name:"TEXTURED KNIT SWEATER",
price:1490,
ProductID:"SWEATER"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/2582/550/706/2/w/297/2582550706_6_1_1.jpg?ts=1654763285262",
name:"KNIT FOOTED LEGGINGS",
price:1090,
ProductID:"LEGGING"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/2582/555/706/2/w/297/2582555706_6_1_1.jpg?ts=1654013809440",
name:"TEXTURED KNIT BONNET",
price:990,
ProductID:"BONNET"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/2582/567/959/2/w/297/2582567959_6_1_1.jpg?ts=1652371598300",
name:"CABLE-KNIT CARDIGAN",
price:1590,
ProductID:"CARDIGAN"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/2582/557/081/2/w/297/2582557081_6_1_1.jpg?ts=1653986370780",
name:"RIB KNIT LEGGINGS",
price:990,
ProductID:"LEGGING"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/2582/559/959/2/w/297/2582559959_6_1_1.jpg?ts=1652423951032",
name:"CABLE-KNIT BONNET",
price:990,
ProductID:"BONNET"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/2582/541/959/2/w/297/2582541959_6_1_1.jpg?ts=1653469608300",
name:"TEXTURED KNIT SWEATER",
price:990,
ProductID:"BONNET"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/2582/501/959/2/w/297/2582501959_6_1_1.jpg?ts=1653463015162",
name:"LINK KNIT SWEATER",
price:1490,
ProductID:"SWEATER"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/2582/559/982/2/w/297/2582559982_6_1_1.jpg?ts=1654013818647",
name:"CABLE-KNIT BONNET",
price:990,
ProductID:"BONNET"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/2582/567/982/2/w/297/2582567982_6_1_1.jpg?ts=1654686991679",
name:"CABLE-KNIT CARDIGAN",
price:1590,
ProductID:"CARDIGAN"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/2582/557/982/2/w/297/2582557982_6_1_1.jpg?ts=1653986358426",
name:"RIB KNIT LEGGINGS",
price:990,
ProductID:"LEGGING"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/2582/554/620/2/w/297/2582554620_6_1_1.jpg?ts=1654763279063",
name:"TEXTURED KNIT SWEATER",
price:1490,
ProductID:"SWEATER"},
]

var b=130
for(let i=0 ;i<mini.length ; i++){
    let x=mini[i]
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
// console.log(mini)
function baby1(data){
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
baby1(mini)


let noise=[{img:"https://static.zara.net/photos///2022/I/0/3/p/6061/561/639/504/w/613/6061561639_15_1_1.jpg?ts=1655289516152",
name:"PLUSH HOODIE",
price:1090,
ProductID:"HOODIE"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6061/561/639/505/w/613/6061561639_15_1_1.jpg?ts=1655289516083",
name:"PLUSH HOODIE",
price:1090,
ProductID:"HOODIE"},]


var b=142
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

let baby=[{img:"https://static.zara.net/photos///2022/V/0/3/p/6224/557/400/2/w/301/6224557400_6_1_1.jpg?ts=1638440783166",
name:"STRIPED T-SHIRT WITH LABEL",
price:790,
ProductID:"SHIRT"},
{img:"https://static.zara.net/photos///2022/V/0/3/p/3905/591/251/2/w/301/3905591251_6_1_1.jpg?ts=1651587461228",
name:"VEGETABLES T-SHIRT",
price:790,
ProductID:"SHIRT"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6224/615/920/2/w/301/6224615920_6_1_1.jpg?ts=1654255572726",
name:"RIBBED LEGGINGS",
price:690,
ProductID:"LEGGINGS"},
{img:"https://static.zara.net/photos///2022/V/0/3/p/4805/627/251/2/w/297/4805627251_6_1_1.jpg?ts=1652082809114",
name:"NEON PRINT SET",
price:1590,
ProductID:"BABY SHIRT"},

{img:"https://static.zara.net/photos///2022/V/0/3/p/5767/595/624/2/w/297/5767595624_6_1_1.jpg?ts=1652082809559",
name:"TEXTURED FLORAL SET",
price:1990,
ProductID:"BABY SHIRT"},

{img:"https://static.zara.net/photos///2022/V/1/3/p/6875/930/070/2/w/297/6875930070_6_1_1.jpg?ts=1642090336417",
name:"MINI/ COTTON BOOTIES",
price:1690,
ProductID:"BOOTIE"},

{img:"https://static.zara.net/photos///2022/V/0/3/p/6061/671/620/2/w/297/6061671620_6_1_1.jpg?ts=1652105553504",
name:"RUFFLED T-SHIRT",
price:790,
ProductID:"SHIRT"},

{img:"https://static.zara.net/photos///2022/V/0/3/p/5350/581/624/2/w/297/5350581624_6_1_1.jpg?ts=1649676823465",
name:"BERMUDA SHORTS WITH BOW",
price:690,
ProductID:"SHORT"},

{img:"https://static.zara.net/photos///2022/I/0/3/p/5507/502/959/2/w/297/5507502959_6_1_1.jpg?ts=1654098688253",
name:"TEXTURED HAT",
price:990,
ProductID:"HAT"},

{img:"https://static.zara.net/photos///2022/V/0/3/p/5767/596/251/2/w/297/5767596251_6_1_1.jpg?ts=1651742901208",
name:"WATERMELON DUNGAREES",
price:1590,
ProductID:"DUNGREES"},
{img:"https://static.zara.net/photos///2022/I/0/3/p/6224/615/920/2/w/301/6224615920_6_1_1.jpg?ts=1654255572726",
name:"RIBBED LEGGINGS",
price:690,
ProductID:"DUNGREES"},
]


var b=144
for(let i=0 ;i<baby.length ; i++){
    let x=baby[i]
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

function display2(data){
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
display2(baby)
// console.log(baby);
function localSet(el){
    // console.log("kunal");
   
    localStorage.setItem("display",JSON.stringify(el))
    window.location.href="linkimage.html"
}