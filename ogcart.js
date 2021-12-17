var lc = JSON.parse(localStorage.getItem("cartData"));
var total = 0;
    lc.map(function(elem){
        var row = document.createElement("tr")
        var col1 = document.createElement("td")
        var col2 = document.createElement("td")
        var col3 = document.createElement("td")
        var col4 = document.createElement("td")
        var img = document.createElement("img");
        var name = document.createElement("p");
        var div = document.createElement("div");
        var info = document.createElement("p");
        var size = document.createElement("p");
        var color = document.createElement("p");
        var sizeSpan = document.createElement("span");
        var colorSpan = document.createElement("span");

        img.setAttribute("src",elem.imgLink)
        img.setAttribute("height","120px")
        img.setAttribute("width","100px")
        col1.style.display="flex"
        col1.style.lineHeight="0px"
        div.style.marginLeft="2%"
        info.setAttribute("id","lin")
        size.setAttribute("id","lsc")
        color.setAttribute("id","lsc")
        col2.setAttribute("id","lcol2")
        col4.setAttribute("id","lcol4")

        col2.textContent = elem.price 
        col4.style.textAlign="center"
        name.textContent = elem.name
        info.textContent = elem.info
        size.textContent="Size: "
        color.textContent = "Color: "
        colorSpan.textContent = elem.color
        sizeSpan.textContent = elem.size

        div.append(name,info,size,color)
        col1.append(img,div);
        color.append(colorSpan)
        size.append(sizeSpan)

        var qntDiv = document.createElement("div");
        var pDiv = document.createElement("div");
        pDiv.textContent="+";
        pDiv.style.fontWeight="bold";
        var mDiv = document.createElement("div");
        mDiv.textContent="-";
        mDiv.style.fontWeight="bold";
        var cDiv = document.createElement("div");
        cDiv.textContent=1;
        
        qntDiv.setAttribute("id","lqntDiv");
        qntDiv.append(mDiv,cDiv,pDiv)
        col3.append(qntDiv);

        row.append(col1,col2,col3,col4)
        document.querySelector("tbody").append(row)

        mDiv.addEventListener("click",myminusFunc);
        pDiv.addEventListener("click",myplusFunc);

        var count = 1;
        var p = elem.price.trim().split("₹")
        col4.textContent="₹"+p[1]*count;
        total += p[1]*count;
        function myplusFunc(){
            count++;
            cDiv.innerHTML=count;
            total += +p[1];
            col4.textContent="₹"+p[1]*count;
            totalPrice()
        }
        function myminusFunc(){
            if(cDiv.textContent==0){
                mDiv.removeEventListener("click",myminusFunc)
            }
            else{
                count--;
                cDiv.innerHTML=count;
                total -= +p[1];
                col4.textContent="₹"+p[1]*count;
                totalPrice()
            }
        }
    })
    totalPrice()
    function totalPrice(){
        document.querySelector("#lbag").textContent=total;
        localStorage.setItem("bagPrice",JSON.stringify(total))
    }
    