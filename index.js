
let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll('.card');
for(let index = 0; index < cards.length; index++){
    const card = cards[index];
    // console.log(card);

    card.addEventListener('click', function(){
        // console.log("clicked");
        // get the title
        const title = card.querySelector('h3').innerText ;
        // console.log(title.innerText);
        // 1st const price= card.querySelector('span').innerText ;
        const price = parseFloat(
            card.querySelector("span").innerText.split(" ")[1]
            );
            console.log(price);
        
        // console.log(price.innerText);
        // console.log(title , price);

        const titleContainer = document.getElementById("title-container");
        // console.log(titleContainer);

        const p = document.createElement("p");

        p.innerText = titleCount + ". " + title;

        titleContainer.appendChild(p);
        titleCount++;

        // calculate Price 
        totalPrice += price ; 
        
        document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);

    });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function (){
    // get the value from input
    const couponElement = document.getElementById("input-field").value;
    // console.log(couponElement);
    const couponCod = couponElement.split(" ").join("").toUpperCase();
    console.log(couponCod);

    if ( totalPrice>= 200){
        if (couponCod === "SELL200"){
            const discountElement = document.getElementById("discountPrice");
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);
            // rest total calculation
            const restTotal = document.getElementById("total");
            restTotal.innerText = totalPrice - discountAmount.toFixed(2);
            document.getElementById("input-field").value = "";

        }else{
            alert("Invalid Coupon");
            document.getElementById("input-field").value = "";
        }

    }else{
        alert("Please Buy $200 or $ 200 over!");
        document.getElementById("input-field").value = "";
    }
})

