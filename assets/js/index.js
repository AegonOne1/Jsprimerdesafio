price = 400000
priceSpan = document.querySelector(".precio-inicial");
priceSpan.innerHTML = price

item = 0
itemSpan = document.querySelector(".item")
itemSpan.innerHTML = item

function add() {
    item++
    itemSpan.innerHTML = item
    total()
}

function remove() {
    if (item > 0){
        item--
        itemSpan.innerHTML = item
        total()
    }
}

function total(){
    const totalPrice = price * item
    totalPriceSpan = document.querySelector(".valor-total")
    totalPriceSpan.innerHTML = totalPrice
}

// innerHTML accede a elementos del html

// querySelector accede al dom usando selectores de CSS