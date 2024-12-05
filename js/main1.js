// cart
const cartIcon = document.querySelector(".icon-bag")
const Cart = document.querySelector(".cart")
const closeCart = document.querySelector(".close-cart")

cartIcon.onclick = () =>{
    Cart.classList.remove("d-none")
}

closeCart .onclick = () =>{
    Cart.classList.add("d-none")
}

// Remove item function
function removerActivate() {

    let removeCartIcon = document.getElementsByClassName("cart-remove");
    for (let i = 0; i < removeCartIcon.length; i++) {
        removeCartIcon[i].addEventListener("click", (e) => {
            cartItems = cartItems.filter((v, j) => j!=i);
            updateCart();
        });

        
    }
}
let items = [
    {
        name: "شورت الاهلي",
        price: 10,
        img: 'img1.jpg'
    },
    {
        name: "نايك سويت شيرت",
        price: 20,
        img: 'img2.jpg'
    },
    {
        name: "نايك بدله رياضيه دراي بارك",
        price: 30,
        img: 'img3.jpg'
    },
    {
        name: "طقم كامل ",
        price: 50,
        img: 'img4.jpg'
    },
    {
        name: "  ترنج نايك احمر في اسود",
        price: 30,
        img: 'img5.jpg'
    },
    {
        name: "ترنج نايك بيج",
        price: 40,
        img: 'img6.jpg'
    },
];

let cartItems = [];

const itemsContainer = document.querySelector("#items");
const cartContainer = document.querySelector(".cart-content");

items.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card col-3';
    const cardImg = document.createElement('img');
    cardImg.src = `../img/${item.img}`;
    cardImg.className = 'card-img-top';
    const cardTitle = document.createElement('h5');
    cardTitle.textContent = item.name;
    cardTitle.className = 'card-title text-center';
    const cardBottom = document.createElement('div');
    cardBottom.className = 'd-flex justify-content-between';
    const cardBtn = document.createElement('button');
    cardBtn.innerHTML = '<i class="fa-solid fa-cart-shopping add-cart"></i>';
    const cardPrice = document.createElement('p');
    cardPrice.innerText = `${item.price}$`;
    cardBottom.appendChild(cardBtn);
    cardBottom.appendChild(cardPrice);
    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(cardBottom);
    itemsContainer.appendChild(card);

    cardBtn.addEventListener("click", () => {
        cartItems.push(item);
        updateCart();
    });
})

function updateCart() {
    cartContainer.innerHTML = '';
    cartItems.forEach((item) => {
        cartContainer.innerHTML += `<div class="cart-box">
                <img src="../img/${item.img}" alt="cart-img" class="cart-img">
                <div class="detail-box">
                    <div class="cart-product-title">${item.name}</div>
                    <div class="cart-price">${item.price}$</div>
                    <input type="number" value="1" class="cart-quantity">
                </div>
                <!-- cart remove -->
                <i class="fa-solid fa-trash cart-remove"></i>
            </div>
`;
    });
    removerActivate();
}