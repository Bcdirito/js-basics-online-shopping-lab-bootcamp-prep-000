var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var price = Math.floor(Math.random() * Math.floor(100));
 
 var inCart = new Object({'itemName': itemName, 'itemPrice': price});
 
 console.log(cart.push(inCart));
 
return itemName + ' has been added to your cart.';
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
      return 'In your cart, you have ' + cart.itemName + ' at $' + cart.itemPrice + '.';
      } else {
        for (let i = 1; i < cart.length; i++) {
          return 'In your cart you have ' + cart.itemName[i] + ' at $' + cart.itemPrice[i] + '.';
        }
      }
}

function total() {
  var totalCart = 0;
  
  for (let i = 0; i < cart.length; i++) {
    totalCart + cart[i].itemPrice;
  }
  return totalCart;
}

function removeFromCart(itemName) {
  if (console.log(cart.includes(itemName))) {
    cart = cart.splice(itemName);
  } else {
    return 'That item is not in your cart.';
  }
}


function placeOrder(cardNumber) {
  var cartTotal = total();
  
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    while (cart.length > 0) {
      cart.pop();
    } 
  }
  return 'Your total cost is $' + cartTotal + ', which will be charged to the card ' + cardNumber + '.';
}


