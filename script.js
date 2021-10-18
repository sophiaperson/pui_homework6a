// script.js
const cartItems = []

class CartItem {
  constructor(size, color, quantity, name, price) {
    this.size = size
    this.color = color
    this.quantity = Number(quantity)
    this.name = name
    this.price = Number(price)
  }
}

function addItemToCart() {
  let sizeSel = document.getElementsByName("size")
  var size = ""
  for (let i=0; i<4; i++) {
    if (sizeSel[i].checked) {
      size = sizeSel[i].value
    }
  }
  let colorSel = document.getElementsByName("color")
  var color = ""
  for (let i=0; i<4; i++) {
    if (colorSel[i].checked) {
      color = colorSel[i].value
    }
  }
  let quantSel = document.getElementById("quantity")
  var quantity = quantSel.options[quantSel.selectedIndex].value
  
  let name = document.getElementById("product-detail-title").innerHTML
  let price = document.getElementById("product-detail-price").innerHTML
  const cartItem = new CartItem(size, color, quantity, name, price)
  cartItems.push(cartItem)

  console.log("Size: " + size + ", Color: " + color + ", Quantity: " + quantity + ", Name: " + name + ", Price: " + price)
  return cartItem;
}

function displayCartPopUp(cartItem) {
  let popup = document.getElementById("cart-popup")
  popup.style.visibility = "visible"
  let size = capitalizeFirstLetter(cartItem.size)
  let color = capitalizeFirstLetter(cartItem.color)
  let quantity = cartItem.quantity
  let name = cartItem.name
  let price = cartItem.price 
  message = ""
  message = size + " " + color + " " + name + " x" + quantity.toString() + " added to cart!"
  document.getElementById("cart-popup-body").innerHTML = message
}

function displayCartNotification() {
  let numItems = cartItems.length
  let notification = document.getElementById("cart-notification")
  notification.innerHTML = numItems.toString()
  notification.style.visibility = "visible"
  document.getElementsByClassName('close')[0].style.visibility = "visible"
}

function addToCart() {
  let cartItem = addItemToCart()
  displayCartPopUp(cartItem)
  displayCartNotification()
}

function hoverSize(size){
  let selSize = document.getElementById("selected-size")
  selSize.innerHTML = size
}

function hoverColor(color) {
  let selColor = document.getElementById("selected-color")
  selColor.innerHTML = color
}

function mouseOutSize() {
  let sizeSel = document.getElementsByName("size")
  var size = ""
  for (let i=0; i<4; i++) {
    if (sizeSel[i].checked) {
      size = sizeSel[i].value
    }
  }
  size = capitalizeFirstLetter(size)
  document.getElementById("selected-size").innerHTML = size
}

function mouseOutColor() {
  let colorSel = document.getElementsByName("color")
  var color = ""
  for (let i=0; i<4; i++) {
    if (colorSel[i].checked) {
      color = colorSel[i].value
    }
  }
  color = color.charAt(0).toUpperCase() + color.slice(1)
  document.getElementById("selected-color").innerHTML = color
}

function closePopup() {
  document.getElementById("cart-popup").style.visibility = "hidden"
  document.getElementsByClassName("close")[0].style.visibility = "hidden"
}

function capitalizeFirstLetter(str) {
  str = str.charAt(0).toUpperCase() + str.slice(1)
  return str
}