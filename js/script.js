// Проверка форм ввода пароля и добавление рамки
const userPassFirstEl = document.querySelector('#password1');
const userPassSecondEl = document.querySelector('#password2');

function inputCheck() {
    userPassFirstEl.addEventListener('input', function (e) {
        let userPassFirst = e.target.value;
        userPassSecondEl.addEventListener('input', function (e) {
            let userPassSecond = e.target.value;
            if (userPassFirst != userPassSecond) {
                userPassFirstEl.style = "border: 1px solid red";
                userPassSecondEl.style = "border: 1px solid red";
            } else {
                userPassFirstEl.style = "border: 1px solid green";
                userPassSecondEl.style = "border: 1px solid green";
            }
        });
    });
}
inputCheck();

// Оценка пользователя по рейтингу
const ratingItemsList = document.querySelectorAll('.rating__item');

ratingItemsList.forEach(item => {
    item.addEventListener('click', function (e) {
        item.parentNode.dataset.totalValue = item.dataset.itemValue;
    })
});

// "Гамбургер-меню"
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu__list');
const body = document.querySelector('body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    body.classList.toggle('hide__scroll');
})


