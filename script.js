document.addEventListener('DOMContentLoaded', () => {
    applyFilter('all'); 
    setTimeout(() => {
      showModal('subscriptionModal');
    }, 5000);
  });
  
  const data = [
    { id: 1, category: 'category1', description: 'Опис 1', image: 'C1.jpg', price: 100 },
    { id: 2, category: 'category2', description: 'Опис 2', image: 'C2.jpg', price: 110 },
    { id: 3, category: 'category1', description: 'Опис 3', image: 'C3.jpg', price: 120 },
    { id: 4, category: 'category2', description: 'Опис 4', image: 'C4.jpg', price: 130 },
    { id: 5, category: 'category1', description: 'Опис 5', image: 'C5.jpg', price: 140 },
    { id: 6, category: 'category2', description: 'Опис 6', image: 'C6.jpg', price: 150 },
    { id: 7, category: 'category1', description: 'Опис 7', image: 'C7.jpg', price: 160},
    { id: 8, category: 'category2', description: 'Опис 8', image: 'C8.jpg', price: 170},
    { id: 9, category: 'category1', description: 'Опис 9', image: 'C9.jpg', price: 180 },
    { id: 10, category: 'category2', description: 'Опис 10', image: 'C10.jpg', price: 190 },
  ];
  
  function applyFilter(category) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    
    const filteredData = category === 'all' ? data : data.filter(item => item.category === category);
    
    filteredData.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
          <img src="${item.image}" alt="Image ${item.id}" style="width:100%; height:auto;">
          <h4>Картка ${item.id}</h4>
          <p>${item.description}</p>
          <p class="price">Ціна: ${item.price} $</p>
          <button onclick="addToCart(${item.id})" class="button1">Додати в кошик</button>
      `;
      container.appendChild(card);
  });
  

}
  
  
  
  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    if (modalId === 'advertisementModal') {
      setTimeout(() => {
        document.getElementById('closeAdBtn').disabled = false;
      }, 5000); 
    }
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
  }
  
  function subscribe() {
    
    closeModal('subscriptionModal');
  }
  
  
  const cart = {};

function addToCart(itemId) {
    const item = data.find(item => item.id === itemId);
    if (cart[itemId]) {
        cart[itemId].quantity += 1;
    } else {
        cart[itemId] = { ...item, quantity: 1 }; 
    }
    updateCartModal();
}

function toggleCart() {
  const modal = document.getElementById('cartModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  updateCartModal();
}

function removeFromCart(itemId) {
    if (cart[itemId] && cart[itemId].quantity > 1) {
        cart[itemId].quantity -= 1; 
    } else {
        delete cart[itemId]; 
    }
    updateCartModal();
}

function updateCartModal() {
    const container = document.getElementById('cartItemsContainer');
    container.innerHTML = ''; 
    let total = 0;
    Object.values(cart).forEach(item => {
        const itemTotalPrice = item.price * item.quantity;
        total += itemTotalPrice;
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="Image ${item.id}" style="width:50px; height:auto;">
            <span style="backgound-color: red;">${item.description}</span>
            <span class="price">${item.price} грн</span>
            <span class="quantity">Кількість: 
                <button onclick="removeFromCart(${item.id})">-</button>
                ${item.quantity}
                <button onclick="addToCart(${item.id})">+</button>
            </span>
        `;
        container.appendChild(itemElement);
    });

    const totalElement = document.createElement('div');
    totalElement.innerHTML = `<strong>Загальна сума: ${total} грн</strong>`;
    totalElement.classList.add('total');
    container.appendChild(totalElement);
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > document.body.scrollHeight / 2) || (document.documentElement.scrollTop > document.documentElement.scrollHeight / 2)) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
  window.scrollTo({top: 0, behavior: 'smooth'});
}



function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'flex';

  if (modalId === 'advertisementModal' || modalId === 'advertisementSidebar') {
    setTimeout(() => {
      document.getElementById('closeAdSidebarBtn').disabled = false;
      document.getElementById('closeAdSidebarBtn').style.display = 'block'; 
    }, 5000); 
  }
}






