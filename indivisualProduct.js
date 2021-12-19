var arr = JSON.parse(localStorage.getItem("item"));
document.querySelector("#lproName").textContent=arr[0].info;
document.querySelector("title").textContent=arr[0].info;
var image = document.createElement("img");
image.setAttribute("src",arr[0].imgLink);
image.setAttribute("width","100%");
image.setAttribute("height","100%");
document.querySelector("#limgContainer").appendChild(image);
document.querySelector("#lname").textContent=arr[0].name;
document.querySelector("#lin").textContent=arr[0].info;
document.querySelector("#lprice").textContent=arr[0].price;
document.querySelector("#lorgPrice").textContent=arr[0].orgPrice;
document.querySelector("#loff").textContent=arr[0].offer;

document.getElementById("lcart").addEventListener("click",addItemToCart);
function addItemToCart(){
    var cart = JSON.parse(localStorage.getItem("cartData"));
    if(localStorage.getItem("cartData")==null){
        localStorage.setItem("cartData",JSON.stringify(arr))
    }
    else{
        var imgL = !!cart.find((item)=>item.imgLink==arr[0].imgLink)
        if(!imgL){
            cart.push(arr[0]);
            localStorage.setItem("cartData",JSON.stringify(cart))
        }
    }
}
document.getElementById("lbuy").addEventListener("click",buyNow);
function buyNow(){
    window.location.href="ogcart.html";
    var cart = JSON.parse(localStorage.getItem("cartData"));
    if(localStorage.getItem("cartData")==null){
        localStorage.setItem("cartData",JSON.stringify(arr))
    }
    else{
        var imgL = !!cart.find((item)=>item.imgLink==arr[0].imgLink)
        if(!imgL){
            cart.push(arr[0]);
            localStorage.setItem("cartData",JSON.stringify(cart))
        }
    }
}
document.querySelector(".s24").addEventListener("click",myFunc1);
function myFunc1(){
    var value = document.querySelector(".s24").value;
    document.querySelector("#lno_size").textContent=value;
    arr[0].size = 24;
}
document.querySelector(".s26").addEventListener("click",myFunc2);
function myFunc2(){
    var value = document.querySelector(".s26").value;
    document.querySelector("#lno_size").textContent=value;
    arr[0].size = 26;
}
document.querySelector(".s28").addEventListener("click",myFunc3);
function myFunc3(){
    var value = document.querySelector(".s28").value;
    document.querySelector("#lno_size").textContent=value;
    arr[0].size = 28;
}
document.querySelector(".s30").addEventListener("click",myFunc4);
function myFunc4(){
    var value = document.querySelector(".s30").value;
    document.querySelector("#lno_size").textContent=value;
    arr[0].size = 30;
}
document.querySelector(".s32").addEventListener("click",myFunc5);
function myFunc5(){
    var value = document.querySelector(".s32").value;
    document.querySelector("#lno_size").textContent=value;
    arr[0].size = 32;
}
document.querySelector(".s34").addEventListener("click",myFunc6);
function myFunc6(){
    var value = document.querySelector(".s34").value;
    document.querySelector("#lno_size").textContent=value;
    arr[0].size = 34;
}
document.querySelector("#lno_col").textContent=arr[0].color;
var colo = document.querySelector("#lcol");
colo.style.background=arr[0].color;

document.querySelector("#laddFav").addEventListener("click",addFunction);
function addFunction(){
    var wlist = document.querySelector("#laddFav");
    wlist.style.color="red"
}

var footData = [{
    name:"KOOVS",
    info:"KOOVS Men's Casual Wear Basic Black Graphic Pride Vest",
    price:"₹559 ",
    orgPrice:"₹799",
    gender:"Man",
    offer:" 30% OFF",
    imgLink:"https://images.bewakoof.com/t540/white-round-neck-varsity-h-s-t-shirt-315159-1637855604-1.jpg",
    color: "white"
},
{
    name:"Blue Saint",
    info:"Scratch Stripe Black Dye Casual Sleevless Tee",
    price:"₹489 ",
    orgPrice:"₹699",
    gender:"Man",
    offer:" 31% OFF",
    imgLink:"https://images.bewakoof.com/t320/not-so-wine-doctor-sleeve-t-shirt-449154-1638261994-1.jpg",
    color: "black"
},
{
    name:"OFFICIAL DISNEY MERCHANDISE",
    info:"Mickey All Over Printed Half Sleeves T-Shirt",
    price:"₹349 ",
    orgPrice:"₹999",
    gender:"Woman",
    offer:" 69% OFF",
    imgLink:"https://images.bewakoof.com/t540/mickey-all-over-printed-half-sleeves-t-shirt-339657-1638711636-1.jpg",
    color: "orange"
},
{
    name:"KOOVS",
    info:"Old Gold Fashion Sweatshirt Hoodie Dress AW 21",
    price:"₹1149 ",
    orgPrice:"₹1899",
    gender:"Woman",
    offer:" 47% OFF",
    imgLink:"https://images.bewakoof.com/t540/old-gold-fashion-sweatshirt-hoodie-dress-aw-21-366303-1638453471-1.jpg",
    color: "yellow"
},
{
    name:"Blue Saint",
    info:"Scratched Dye Casual Wear Basic Tee",
    price:"₹489 ",
    orgPrice:"₹699",
    gender:"Man",
    offer:" 31% OFF",
    imgLink:"https://images.bewakoof.com/t320/verdant-green-apple-cut-raglan-half-sleeve-t-shirt-360879-1639137548-1.jpg",
    color: "#1e6e79"
}]
var foot = document.querySelector(".lfoot");
footData.map(function(ele){
    var div = document.createElement("div");
    var footImg = document.createElement("div");
    var img = document.createElement("img");
    var imgInfo = document.createElement("div");
    div.setAttribute("id","ldiv");
    footImg.setAttribute("id","limgFoot")
    img.setAttribute("src",ele.imgLink)
    img.setAttribute("height","100%")
    img.setAttribute("width","100%")
    imgInfo.setAttribute("id","limgInfo");

    foot.append(div);
    footImg.appendChild(img)
    div.append(footImg,imgInfo);

    var name = document.createElement("p");
    var p = document.createElement("p");
    var info = document.createElement("span")
    var price = document.createElement("span");
    var orgPrice = document.createElement("span");
    var offer = document.createElement("span");
    var br = document.createElement("br");
    var span = document.createElement("p");
    var colo = document.createElement("div");
    var color = document.createElement("div");

    name.textContent=ele.name;
    info.textContent=ele.info;
    price.textContent=ele.price;
    orgPrice.textContent=ele.orgPrice;
    offer.textContent=ele.offer;
    color.style.background=ele.color;

    colo.setAttribute("id","lco")
    color.setAttribute("id","lcolo")
    colo.appendChild(color);

    name.setAttribute("id","lnam");
    info.setAttribute("id","linf")
    price.setAttribute("id","lpric")
    orgPrice.setAttribute("id","lorgPric");
    offer.setAttribute("id","loffe");
    span.append(price,orgPrice,offer);
    p.appendChild(info);

    imgInfo.append(name,p,span,colo);

    var arr = [];
    arr.push(ele);

    div.addEventListener("click",inproFunc);
    function inproFunc(){
        localStorage.setItem("item",JSON.stringify(arr));
        window.location.href="indivisualProduct.html"
    }

})