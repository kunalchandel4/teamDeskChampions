let cartData=JSON.parse(localStorage.getItem("display"))||{}

var trendData=[
{img:"https://static.zara.net/photos///2022/I/0/2/p/5602/494/710/2/w/386/5602494710_2_1_1.jpg?ts=1654673912698",
name:"SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"White"},

{img:"https://static.zara.net/photos///2022/I/0/2/p/5602/494/710/2/w/386/5602494710_1_1_1.jpg?ts=1654673912658",
name:"SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"White"},

{img:"https://static.zara.net/photos///2022/I/0/2/p/5603/494/710/2/w/386/5603494710_1_1_1.jpg?ts=1654673913312",
name:"SLIM FIT TAILORED SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"White"},
{img:"https://static.zara.net/photos///2022/I/0/2/p/5603/494/710/2/w/386/5603494710_2_1_1.jpg?ts=1654673913141",
name:"SLIM FIT TAILORED SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"White"},
]

var b=184
for(let i=0 ;i<trendData.length ; i++){
    let x=trendData[i]
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
// console.log(trendData)

function displayFirstSec(data){
    document.querySelector("#firstSec").innerHTML="";
data.map(function(el){
    let body = document.querySelector("#firstSec")
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
    price.innerText=`₹ ${el.price}.00 `
    div1.append(img)
    div2.append(p,price)
    div.append(div1,div2)
    body.append(div)
})

}

displayFirstSec(trendData)





var trendData1=[{img:"https://static.zara.net/photos///2022/V/0/2/p/4332/494/800/102/w/386/4332494800_2_1_1.jpg?ts=1650281472482",
name:"DOUBLE-BREASTED SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Black"},
{img:"https://static.zara.net/photos///2022/V/0/2/p/4332/494/800/102/w/386/4332494800_1_1_1.jpg?ts=1650281472414",
name:"DOUBLE-BREASTED SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Black"},
{img:"https://static.zara.net/photos///2022/V/0/2/p/4330/494/800/102/w/386/4330494800_2_3_1.jpg?ts=1649864523612",
name:"FLARED TROUSERS WITH BELT",
price:"4990",
productID:"BLAZER",
color:"Black"},
{img:"https://static.zara.net/photos///2022/V/0/2/p/4330/494/800/102/w/386/4330494800_1_1_1.jpg?ts=1649864536802",
name:"FLARED TROUSERS WITH BELT",
price:"4990",
productID:"BLAZER",
color:"Black"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4381/795/420/102/w/386/4381795420_2_1_1.jpg?ts=1649756595230",
name:"SUIT JACKET WITH POCKETS",
price:"6990",
productID:"JACKET",
color:"Blue"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4435/795/420/102/w/386/4435795420_1_1_1.jpg?ts=1649756597075",
name:"STRAIGHT SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Blue"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4433/795/500/102/w/386/4433795500_2_1_1.jpg?ts=1649756456480",
name:"DOUBLE-BREASTED SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Green"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4434/795/500/102/w/386/4434795500_1_1_1.jpg?ts=1649756456532",
name:"STRAIGHT SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Green"},


{img:"https://static.zara.net/photos///2022/V/0/2/p/4767/795/630/2/w/386/4767795630_2_1_1.jpg?ts=1653486674795",
name:"SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Pink"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4768/795/630/2/w/386/4768795630_1_1_1.jpg?ts=1653560402337",
name:"PLEATED SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Pink"},

{img:"https://static.zara.net/photos///2022/I/0/2/p/0340/303/420/2/w/386/0340303420_2_1_1.jpg?ts=1653910451271",
name:"DOUBLE-BREASTED SUIT BLAZER",
price:"9990",
productID:"BLAZER",
color:"Blue"},

{img:"https://static.zara.net/photos///2022/I/0/2/p/0340/303/420/2/w/386/0340303420_2_1_1.jpg?ts=1653910451271",
name:"PLEATED SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Blue"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4375/466/625/102/w/455/4375466625_2_1_1.jpg?ts=1650471032143",
name:"LINEN BLEND SUIT BLAZER",
price:"9990",
productID:"BLAZER",
color:"Pink"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4374/466/625/102/w/455/4374466625_1_1_1.jpg?ts=1650471026962",
name:"LINEN BLEND SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Pink"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4186/118/800/102/w/386/4186118800_2_1_1.jpg?ts=1649864553309",
name:"TUXEDO SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Black"},
{img:"https://static.zara.net/photos///2022/V/0/2/p/4187/118/800/102/w/386/4187118800_1_1_1.jpg?ts=1649864536525",
name:"TUXEDO SUIT TROUSERS",
price:"4590",
productID:"TROUSERS",
color:"Black"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4186/117/401/102/w/386/4186117401_2_1_1.jpg?ts=1649778816789",
name:"CONTRAST TUXEDO BLAZER",
price:"8990",
productID:"BLAZER",
color:"Black"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4187/117/401/102/w/386/4187117401_1_1_1.jpg?ts=1649864564474",
name:"CONTRAST TUXEDO TROUSERS",
price:"4590",
productID:"TROUSER",
color:"Black"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4627/076/401/2/w/386/4627076401_2_1_1.jpg?ts=1651829716165",
name:"COTTON POPLIN JACKET",
price:"7990",
productID:"JACKET",
color:"Blue"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4616/076/401/2/w/386/4616076401_1_1_1.jpg?ts=1651829696102",
name:"WIDE FIT POPLIN TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Blue"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4626/076/251/2/w/386/4626076251_2_1_1.jpg?ts=1651829801688",
name:"POPLIN SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"White"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4619/076/251/2/w/386/4619076251_1_1_1.jpg?ts=1651829697135",
name:"WIDE FIT POPLIN SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"White"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/0706/480/832/102/w/386/0706480832_2_1_1.jpg?ts=1649766104886",
name:"SUIT BLAZER",
price:"9990",
productID:"BLAZER",
color:"Grey"},


{img:"https://static.zara.net/photos///2022/V/0/1/p/0706/481/832/102/w/386/0706481832_1_1_1.jpg?ts=1649772397240",
name:"STRAIGHT SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Grey"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4193/117/401/102/w/386/4193117401_2_1_1.jpg?ts=1649864523958",
name:"RELAXED SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Black"}, 

{img:"https://static.zara.net/photos///2022/V/0/2/p/4225/117/401/102/w/386/4225117401_1_1_1.jpg?ts=1649864553346",
name:"RELAXED SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Black"}, 

{img:"https://static.zara.net/photos///2022/V/0/2/p/4151/419/800/102/w/386/4151419800_2_1_1.jpg?ts=1649777275467",
name:"SKINNY-FIT SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Black"}, 

{img:"https://static.zara.net/photos///2022/V/0/2/p/4152/419/800/102/w/386/4152419800_1_1_1.jpg?ts=1649777275022",
name:"SKINNY-FIT SUIT TROUSERS",
price:"4590",
productID:"TROUSER",
color:"Black"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4346/706/800/102/w/386/4346706800_2_1_1.jpg?ts=1649864548216",
name:"SUPER SKINNY SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Black"}, 


{img:"https://static.zara.net/photos///2022/V/0/2/p/4151/419/800/102/w/386/4151419800_2_1_1.jpg?ts=1649777275467",
name:"SUPER SKINNY SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Black"}, 


{img:"https://static.zara.net/photos///2022/V/0/2/p/4625/076/707/2/w/386/4625076707_2_1_1.jpg?ts=1651829721334",
name:"POPLIN DOUBLE-BREASTED SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Beige"}, 

{img:"https://static.zara.net/photos///2022/V/0/2/p/4620/076/707/2/w/386/4620076707_1_1_1.jpg?ts=1652083306623",
name:"POPLIN SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Beige"}, 

{img:"https://static.zara.net/photos///2022/V/0/1/p/4624/076/620/2/w/386/4624076620_2_1_1.jpg?ts=1652177100365",
name:"POPLIN SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"White"}, 

{img:"https://static.zara.net/photos///2022/V/0/1/p/4618/076/620/2/w/386/4618076620_1_1_1.jpg?ts=1652176675385",
name:"WIDE FIT POPLIN SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"White"}, 


{img:"https://static.zara.net/photos///2022/V/0/2/p/4438/494/512/102/w/386/4438494512_2_1_1.jpg?ts=1649756098472",
name:"SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Beige"}, 

{img:"https://static.zara.net/photos///2022/V/0/2/p/4439/494/512/102/w/386/4439494512_1_1_1.jpg?ts=1649756096115",
name:"SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Beige"}, 

{img:"https://static.zara.net/photos///2022/V/0/2/p/4254/437/704/102/w/386/4254437704_2_1_1.jpg?ts=1649755997312",
name:"WIDE LAPEL SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Brown"}, 

{img:"https://static.zara.net/photos///2022/V/0/1/p/4255/437/704/102/w/386/4255437704_1_1_1.jpg?ts=1649767532260",
name:"SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Brown"}, 

{img:"https://static.zara.net/photos///2022/V/0/2/p/4349/526/505/102/w/386/4349526505_2_1_1.jpg?ts=1649756099842",
name:"DOUBLE-BREASTED SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Brown"}, 


{img:"https://static.zara.net/photos///2022/V/0/2/p/4350/526/505/102/w/386/4350526505_1_1_1.jpg?ts=1649756110629",
name:"STRAIGHT SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Brown"},


{img:"https://static.zara.net/photos///2022/V/0/2/p/9621/490/431/102/w/386/9621490431_2_1_1.jpg?ts=1649775985930",
name:"TECHNICAL SUIT BLAZER",
price:"6990",
productID:"BLAZER",
color:"Blue"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/9621/491/431/102/w/386/9621491431_1_1_1.jpg?ts=1649775987679",
name:"TECHNICAL SUIT TROUSERS",
price:"2990",
productID:"TROUSER",
color:"Blue"},


{img:"https://static.zara.net/photos///2022/V/0/2/p/4332/494/800/103/w/386/4332494800_2_1_1.jpg?ts=1649778569118",
name:"DOUBLE-BREASTED SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Black"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4333/494/800/102/w/386/4333494800_1_1_1.jpg?ts=1649864556360",
name:"REGULAR FIT SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Black"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4193/274/802/102/w/386/4193274802_2_1_1.jpg?ts=1649864524409",
name:"RELAXED SUIT BLAZER",
price:"8990",
productID:"BLAZER",
color:"Grey"},

{img:"https://static.zara.net/photos///2022/V/0/2/p/4225/274/802/102/w/386/4225274802_1_1_1.jpg?ts=1649864529939",
name:"RELAXED SUIT TROUSERS",
price:"4990",
productID:"TROUSER",
color:"Grey"},













]

var b=188
for(let i=0 ;i<trendData1.length ; i++){
    let x=trendData1[i]
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

function displaySecondSec(data){
    document.querySelector("#secondSec").innerHTML="";
data.map(function(el){
    let body = document.querySelector("#secondSec")
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
displaySecondSec(trendData1)



console.log(trendData1);
function localSet(el){
  // console.log("kunal");
 
  localStorage.setItem("display",JSON.stringify(el))
  window.location.href="linkimage.html"
}


let logdata=JSON.parse(localStorage.getItem("Userdata"))

logdata.forEach(function(elem){
	document.querySelector("#lg").innerText=elem.name;
})