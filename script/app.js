let menu = {
    crazy: {
        name: 'Crazy',
        price: 31000,
        amount: 0,
        img: 'images/products/burger-1.png',
        get totalSum() {
            return this.price * this.amount
        }
    },
    light: {
        name: 'light',
        price: 26000,
        amount: 0,
        img: 'images/products/burger-2.png',
        get totalSum() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        name: 'cheeseburger',
        price: 29000,
        amount: 0,
        img: 'images/products/burger-3.png',
        get totalSum() {
            return this.price * this.amount
        }
    },
    dburger: {
        name: 'dburger',
        price: 24000,
        amount: 0,
        img: 'images/products/burger-4.png',
        get totalSum() {
            return this.price * this.amount
        }
    },
}


let burgerBtns = document.querySelectorAll('.wrapper__list-btn'),
    cartBtn = document.querySelector('.wrapper__navbar-btn'),
    cartAmount = document.querySelector('.warapper__navbar-count'),
    cartList = document.querySelector('.wrapper__navbar-basket'),
    cartClose = document.querySelector('.wrapper__navbar-close'),
    cartCheckList = document.querySelector('.wrapper__navbar-checklist'),
    cartTotalPrice = document.querySelector('.wrapper__navbar-totalprice');
    
burgerBtns.forEach((burger) => {
    burger.addEventListener('click', function () {
        addAmount(this)
    })
});

function addAmount(btn) {
    //closest() - метод который позволяет подключистя к указанному ближайшему родителю
    //getAttribute() - метод который получать данный любого указанного атрибута
    let parent = btn.closest('.wrapper__list-card')
    let id = parent.getAttribute('id')
    menu[id].amount++
    cart()
}

cartBtn.addEventListener('click', () => cartList.classList.add('active'))
cartClose.addEventListener('click', () => cartList.classList.remove('active'))

function cart() {
    let korzinka = []
    for (let key in menu) {
        let burger = menu[key]
        let burgerItem = document.querySelector(`#${key}`);
        let burgerAmount = burgerItem.querySelector('.wrapper__list-count')
        if(burger.amount > 0){
            korzinka.push(burger)
            burgerAmount.classList.add('active')
            burgerAmount.innerHTML = burger.amount
        }else {
            burgerAmount.classList.remove('active')
            burgerAmount.innerHTML = ''
        }
    }
    let allAmount = totalAmountBurgers() 
    if (allAmount > 0) {
        cartAmount.classList.add('active')
        cartAmount.innerHTML = allAmount
    }else{
        cartAmount.classList.remove('active')
    }
    
    cartTotalPrice.innerHTML = totalSumBurgers()
    
    cartCheckList.innerHTML = ''
    korzinka.forEach((burger) => cartCheckList.innerHTML += createBurger(burger))
}

function totalSumBurgers() {
    let sum = 0;
    for (let key in menu) {
        sum += menu[key].totalSum
    }
    return sum + ' сумм'
}

function totalAmountBurgers() {
    let amount = 0;
    for (let key in menu) {
        amount += menu[key].amount
    }
    return amount
}

function createBurger(burger) {
    return `<div class="burger__item" id='${burger.name.toLowerCase()}-item'>
    <div class="burger__item_left">
        <img src="${burger.img}" alt="">
        <div class="burger__item_left_info">
            <h2>${burger.name}</h2>
            <p>${burger.price} сум</p>
        </div>
    </div>
    <div class="burger__item_right">
        <button data-symbol="-" class="btn burger__btn_minus">-</button>
        <output class="burger__btn_output">${burger.amount}</output>
        <button data-symbol="+" class="btn burger__btn_plus">+</button>
    </div>
</div>`
}

window.addEventListener('click', (event) =>{
    if(event.target.classList.contains('btn')){
        let dataValue = event.target.getAttribute('data-symbol')
        let parentBurger = event.target.closest('.burger__item')
        let id = parentBurger.getAttribute('id').split('-')[0]
        if (dataValue == '-') {
            menu[id].amount--
        }else if(dataValue == '+') {
            menu[id].amount++
        }
        cart()
    }
})


//================= DZ LVL100 ==================


let title = document.querySelector('.title'),
    body = document.querySelector('body');


function rek() {
    if(title.innerHTML < 100){
        title.innerHTML++

        setTimeout(() => rek(), 200);
        if (title.innerHTML == 10) {
            body.style.background = 'green'
        }else if(title.innerHTML == 20){
            body.style.background = 'blue'
        }else if(title.innerHTML == 30){
            body.style.background = 'purple'
        }else if(title.innerHTML == 40){
            body.style.background = 'pink'
        }else if(title.innerHTML == 50){
            body.style.background = 'red'
        }else if(title.innerHTML == 60){
            body.style.background = 'yellow'
        }else if(title.innerHTML == 70){
            body.style.background = 'aqua'
        }else if(title.innerHTML == 80){
            body.style.background = 'brown'
        }else if(title.innerHTML == 90){
            body.style.background = 'green'
        }else if(title.innerHTML == 100){
            body.style.background = 'white'
        }
    }
}

rek()




