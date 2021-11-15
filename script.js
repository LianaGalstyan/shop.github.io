
let product1 = {
    tit:"Marc New York",
    price:50,
};
let product2 = {
    tit:"Barbour",
    price:40,
};
let product3 = {
    tit:"Levi's",
    price:50,
};
let product4 = {
    tit:"Marc New York",
    price:80,
};

let desc1 = document.querySelector(".desc1");
let desc2 = document.querySelector(".desc2");
let desc3 = document.querySelector(".desc3");
let desc4 = document.querySelector(".desc4");

let title1 = document.querySelector(".title1");
let title2 = document.querySelector(".title2");
let title3 = document.querySelector(".title3");
let title4 = document.querySelector(".title4");

let price1 = document.querySelector(".price1");
let price2 = document.querySelector(".price2");
let price3 = document.querySelector(".price3");
let price4 = document.querySelector(".price4");


title1.innerHTML=product1.tit;
title2.innerHTML=product2.tit;
title3.innerHTML=product3.tit;
title4.innerHTML=product4.tit;

price1.innerHTML=product1.price;
price2.innerHTML=product2.price;
price3.innerHTML=product3.price;
price4.innerHTML=product4.price;

//--

let sizeBtn1L = document.querySelector(".sizeBtn1L");
let sizeBtn1M = document.querySelector(".sizeBtn1M");
let sizeBtn1S = document.querySelector(".sizeBtn1S");
let sizeBtn2L = document.querySelector(".sizeBtn2L");
let sizeBtn2M = document.querySelector(".sizeBtn2M");
let sizeBtn2S = document.querySelector(".sizeBtn2S");
let sizeBtn3L = document.querySelector(".sizeBtn3L");
let sizeBtn3M = document.querySelector(".sizeBtn3M");
let sizeBtn3S = document.querySelector(".sizeBtn3S");
let sizeBtn4L = document.querySelector(".sizeBtn4L");
let sizeBtn4M = document.querySelector(".sizeBtn4M");
let sizeBtn4S = document.querySelector(".sizeBtn4S");

sizeBtn1L.addEventListener("click", () => {
    sizeBtn1L.classList.toggle("active")
})


let i = 0;
let cost = document.querySelector(".cost");

let buy1 = document.querySelector(".buy1");
let buy2 = document.querySelector(".buy2");
let buy3 = document.querySelector(".buy3");
let buy4 = document.querySelector(".buy4");
buy1.addEventListener("click", () => {
    
    i = i + product1.price;
    cost.innerHTML = i + "$";
});
buy2.addEventListener("click", () => {
    i = i + product2.price;
    cost.innerHTML = i + "$";
});
buy3.addEventListener("click", () => {
    i = i + product3.price;
    cost.innerHTML = i + "$";
});
buy4.addEventListener("click", () => {
    i= i + product4.price;
    cost.innerHTML = i + "$";
});