const cart = document.querySelector("nav .cart")
const cartsidebar = document.querySelector(" .cart-sidebar")
const closecart = document.querySelector(".close-cart")
const burger = document.querySelector(".burger")
const menusidebar= document.querySelector(".menu-sidebar")
const closemenu = document.querySelector(".close-menu")
const cartItemsTotal = document.querySelector(".noi")
const cartPriceTotal = document.querySelector(".total-amount")
const cartUi = document.querySelector(".cart-sidebar .cart")
const totalDiv = document.querySelector(".total-sum")
const clearbutton = document.querySelector(".clear-cart-btn")
const cartcontent = document.querySelector(".cart-content")

let Cart=[]

let buttonsDom=[]

cart.addEventListener("click",function(){
    cartsidebar.style.transform="translate(0%)"
    const bodyoverlay=document.createElement("div")
    bodyoverlay.classList.add("overlay");
    setTimeout(function(){
        document.querySelector("body").append(bodyoverlay)
    },300)
})

closecart.addEventListener("click", function(){
    cartsidebar.style.transform="translate(100%)"
    const bodyoverlay=document.querySelector(".overlay")
    document.querySelector("body").removeChild(bodyoverlay)
})

burger.addEventListener("click", function(){
    menusidebar.style.transform="translate(0%)"
})

closemenu.addEventListener("click",function(){
    menusidebar.style.transform="translate(-100%)"
})

class Product{
    async getproduct(){
        const response = await fetch("products.json")
        const data = await response.json
        let products = data.items;
        products=products.map(item=>{
            const{title,price}=item.fields
            const{id}=item.sys
            const image=item.fields.image.fields.file.url
            return{title,price,id,image}
        })
        return products
    }
}

class UI{
    displayProducts(products){
        let  result="";
        products.forEach(product => {
            const productDiv = document.createElement("div")
            productDiv.innerHTML=`<div class="product-card">
                                           <img src="${product.image}" alt="product">
                                            <span class="add-to-cart" data-id="${product.id}">
                                            <i class="fa fa-cart--plus fa-1x" style="margin-right:1.0em; font-size:1em"></i>
                                            Add to cart
                                            </span>
                                            </div>`
        });
    }
}