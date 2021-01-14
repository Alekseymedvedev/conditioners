const offset = 150;
const banner = document.querySelector('.banner');
const bannerTitle = document.querySelector('.banner__title-bold');
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// проверка на возможность скролла

window.addEventListener('scroll', function () {
  
  // if (getTop() > offset) {
    banner.classList.add('banner--active');
    bannerTitle.classList.add('banner__title-bold--active');
  // } else {
  //   banner.classList.remove('banner--active');
  //   bannerTitle.classList.remove('banner__title-bold--active');
  // }
})

// кнопка меню
let menuBtn = document.querySelectorAll('.menu__btn');

menuBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('menu__btn--active');
    document.querySelector('.menu').classList.toggle('menu__active');

  });
});


// кнопка "показать еще" в разделе наши услуги

const servicesBtn = document.querySelector('.services__item-link--more')
const servicesBox = document.querySelector('.services__box')

servicesBtn.addEventListener('click', function () {

  servicesBtn.classList.add('services__item-link--off')
  servicesBox.classList.add('services__inner')
});



$(function () {
  new WOW().init();

  $(function () {
    $('.popup-modal').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#username',
      modal: true,
      slidesPerView: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
      return false;
    });
  });
});