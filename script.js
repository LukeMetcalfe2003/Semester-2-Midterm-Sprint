const prices = {
  biggary: 11.0,
  frenchtoast: 8.0,
  waffles: 7.0,
  eggsbacon: 8.0,
  oatmeal: 5.0,
  toutuns: 4.0,
  taters: 4.0,
  bagel: 5.0,
  soup: 5.0,
};

function submitOrder() {
  const order = {
    name: document.getElementById('userName').value,
    items: [],
    total: 0,
  };

  if (document.getElementById('biggary').checked) {
    const quantity = parseInt(document.getElementById('biggaryQuantity').value); 
    if (quantity) {
      order.items.push({
        item: 'Big Gary',
        quantity: quantity,
        price: prices.biggary * quantity,
      }); 
    }
  }

  if (document.getElementById('frenchtoast').checked) {
    const quantity = parseInt(
      document.getElementById('frenchtoastQuantity').value
    ); 
    if (quantity) {
      order.items.push({
        item: 'French Toast',
        quantity: quantity,
        price: prices.frenchtoast * quantity,
      });
    }
  }

  if (document.getElementById('waffles').checked) {
    const quantity = parseInt(document.getElementById('wafflesQuantity').value); 
    if (quantity) {
      order.items.push({
        item: 'Waffles',
        quantity: quantity,
        price: prices.waffles * quantity,
      });
    }
  }

  if (document.getElementById('eggsbacon').checked) {
    const quantity = parseInt(
      document.getElementById('eggsbaconQuantity').value
    ); 
    if (quantity) {
      order.items.push({
        item: 'Eggs & Bacon',
        quantity: quantity,
        price: prices.eggsbacon * quantity,
      });
    }
  }

  if (document.getElementById('oatmeal').checked) {
    const quantity = parseInt(document.getElementById('oatmealQuantity').value); 
    if (quantity) {
      order.items.push({
        item: 'Oatmeal',
        quantity: quantity,
        price: prices.oatmeal * quantity,
      });
    }
  }

  if (document.getElementById('toutuns').checked) {
    const quantity = parseInt(document.getElementById('toutunsQuantity').value); 
    if (quantity) {
      order.items.push({
        item: 'Tout Uns',
        quantity: quantity,
        price: prices.toutuns * quantity,
      });
    }
  }

  if (document.getElementById('taters').checked) {
    const quantity = parseInt(document.getElementById('tatersQuantity').value); 
    if (quantity) {
      order.items.push({
        item: 'Taters',
        quantity: quantity,
        price: prices.taters * quantity,
      });
    }
  }

  if (document.getElementById('bagel').checked) {
    const quantity = parseInt(document.getElementById('bagelQuantity').value); 
    if (quantity) {
      order.items.push({
        item: 'Bagel',
        quantity: quantity,
        price: prices.bagel * quantity,
      });
    }
  }

  if (document.getElementById('soup').checked) {
    const quantity = parseInt(document.getElementById('soupQuantity').value); 
    if (quantity) {
      order.items.push({
        item: 'Soup',
        quantity: quantity,
        price: prices.soup * quantity,
      });
    }
  }

   // Calculate total price
   let totalPrice = order.items.reduce((total, item) => total + item.price, 0);
   const tax = totalPrice * 0.15;
   order.tax = tax;  // Store tax in order object
   totalPrice += tax;
 
   if (document.getElementById('tip').checked) {
     const tip = totalPrice * 0.10;
     order.tip = tip;  // Store tip in order object
     totalPrice += tip;
   }
 
   order.total = totalPrice;
 
   // Save order in local storage
   localStorage.setItem('order', JSON.stringify(order));
   displayOrder();
 }
 
 function displayOrder() {
   const order = JSON.parse(localStorage.getItem('order'));
   if (!order) {
     console.log('No order found in localStorage.');
     return;
   }
 
   const orderSummary = document.getElementById('orderSummary');
   if (!orderSummary) {
     console.error('Element with id "orderSummary" not found in the DOM.');
     return;
   }
 
   orderSummary.innerHTML = `<p>Name: ${order.name}</p>`;
   order.items.forEach(item => {
     orderSummary.innerHTML += `<p>${item.item}: ${item.quantity} @ $${(item.price / item.quantity).toFixed(2)} each = $${item.price.toFixed(2)}</p>`;
   });
   orderSummary.innerHTML += `<p>Tax @ 15%: $${order.tax.toFixed(2)}</p>`;
   if (order.tip) {
     orderSummary.innerHTML += `<p>Tip @ 10%: $${order.tip.toFixed(2)}</p>`;
   }
   orderSummary.innerHTML += `<p>Total: $${order.total.toFixed(2)}</p>`;

   orderSummary.innerHTML += `<p> Thank You For chosing Gary Blue's <p>`;
 
   console.log('Order displayed:', order);
 }
 

 document.addEventListener('DOMContentLoaded', displayOrder);