const btnBurger = document.querySelector('.burger_btn');
const burger = document.querySelector('.burger');
btnBurger.addEventListener('click', () => {
    if(!burger.classList.contains('burger_active')){
        burger.classList.add('burger_active');
    } else {
        burger.classList.remove('burger_active')
    }
});

//contacts
const btnContacts = document.querySelector('.btnContacts');
const popup = document.querySelector('.popup');
btnContacts.addEventListener('click', () => {
    if(!popup.classList.contains('activePopup')){
        popup.classList.add('activePopup');
    } else {
        popup.classList.remove('activePopup');
    }
})



const guitarsContainer = document.querySelector('.guitar-list');
const guitars = [
    {title: 'Rockson', desc: 'Rockson ST Electric', price: '400$', img: './images/guitars/guitar-item1.jpg'},
    {title: 'Fender', desc: 'Fender Squier Bullet Strat HT IL', price: '150$', img: './images/guitars/guitar-item2.jpg'},
    {title: 'Fender', desc: 'Fender Squier Bullet Strat HT IL', price: '160$', img: './images/guitars/guitar-item3.jpg'},
    {title: 'Fender', desc: 'Fender Squier FSR Bullet Strat HT IL', price: '165$', img: './images/guitars/guitar-item4.jpg'},
    {title: 'Kramer', desc: 'Kramer Guitars Baretta Purple', price: '200$', img: './images/guitars/guitar-item5.jpg'},
    {title: 'Kramer', desc: 'Kramer Guitars Baretta Purple', price: '223$', img: './images/guitars/guitar-item6.jpg'},
    {title: 'Fender', desc: 'Fender FA-125 Dreadnought Black', price: '300$', img: './images/guitars/guitar-item7.jpg'},
    {title: 'Ibanez', desc: 'Ibanez PF12MHCE-OPN', price: '250$', img: './images/guitars/guitar-item8.jpg'},
    {title: 'Ibanez', desc: 'Ibanez PF15ECE-TBS Transparent Blue Sunburst', price: '190$', img: './images/guitars/guitar-item9.jpg'},
    {title: 'Fender', desc: 'Fender Redondo Player Jetty Black', price: '250$', img: './images/guitars/guitar-item10.jpg'},
];

guitars.map(item => {
    return guitarsContainer.innerHTML +=
        `
            <li class="guitar-item" >
             <h1>${item.title}</h1>
             <img src=${item.img} />
             <p>${item.desc}</p>
             <hr />
             <span>${item.price}</span> 
             <button class="guitar__button" >Buy</button>
           </li>
        `
})

const guitarBtns = document.querySelectorAll('.guitar__button');
guitarBtns.forEach(item => {
    item.addEventListener('click', () => {
        if(!item.classList.contains('active')){
            item.classList.add('active');
            item.textContent = 'Remove from basket'
        } else{
            item.classList.remove('active')
            item.textContent = 'Buy';
        }
    });

});


