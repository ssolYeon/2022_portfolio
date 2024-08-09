/* smooth scrolling */
$('.navigation ul li a').click(function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 900);
  return false;
});

/* home scroll animation */
let bg = document.getElementById("bg");
let cloud = document.getElementById("cloud");
let backDesert = document.getElementById("backDesert");
let frontDesert = document.getElementById("frontDesert");
let homeTxt = document.getElementById("homeTxt");
let fish = document.getElementById("fish");

window.addEventListener('scroll', function(){
  var value = window.scrollY;

  bg.style.top = value * 0.5 + 'px';
  cloud.style.left = -value * 0.5 + 'px';
  backDesert.style.top = -value * 0.15 + 'px';
  frontDesert.style.top = value * 0.15 + 'px';
  homeTxt.style.top = value * 1 + 'px';
  fish.style.left = -value * 0.15 + 'px';
});

/* hamburder btn */
var $navigation = document.querySelector('.navigation'),
    $hamburger = document.querySelector('.btn-ham'),
    $wrapper = document.querySelector('#wrapper');

$hamburger.addEventListener('click', function(){
  this.classList.toggle('active');
  $navigation.classList.toggle('active');
});

$wrapper.addEventListener('click', function(){
  $hamburger.classList.remove('active');
  $navigation.classList.remove('active');
});

$(window).scroll(function(){
  /* menu scroll */
  var $navigation = $('.navigation');

  if($(this).scrollTop() > 0){
    $navigation.addClass('scroll');
  }else{
    $navigation.removeClass('scroll');
  }

  /* section animation */
  var $currentSct = $(this).scrollTop(),
      $aboutStl = $('.about .sub-title').offset().top - 900,
      $aboutImg = $('.about-images').offset().top - 900,
      $skillList = $('.skills-box li').offset().top - 900,
      $skillcircle = $('.progressbar-thumb').offset().top - 900,
      $worksStl = $('.works .sub-title').offset().top - 900,
      $worksSld = $('.works-slide').offset().top - 900,
      $popTtl = $('.pop-ttl').offset().top - 700;

  if($currentSct > $aboutStl){
    $('.about').find('.sub-title span').addClass('animate');
  }
  if($currentSct > $aboutImg){
    $('.about-images img').addClass('animate');
  }
  if($currentSct > $skillList){
    $('.skills-box li').addClass('animate');
  }
  if($currentSct > $skillcircle){
    $('.progressbar-thumb').addClass('circleAni');
  }
  if($currentSct > $worksStl){
    $('.works').find('.sub-title span').addClass('animate');
  }
  if($currentSct > $worksSld){
    $('.works-slide').addClass('animate');
  }
  if($currentSct > $popTtl){
    $('.pop-ttl span').addClass('popAni');
  }
});

/* works swiper */
const swiper = new Swiper('.mySwiper', {
  slidesPerView: "auto",
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  }
});

/* popUp btn click  */
$('.btn-pop').on('click', function (){
  $('.layer-wrap').fadeIn();
  $('body').css("overflow", "hidden");
});
$('.layer-top a, .layer-dimm').on('click', function (){
  $('.layer-wrap').fadeOut();
  $('body').css("overflow", "hidden scroll");
});

/* popUp accodian */
$('.list1 .acco-btn').on('click', function(){
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.list1 .acco-text').stop().slideUp();
  } else {
    $('.list1 .acco-btn').removeClass('active');
    $(this).addClass('active');
    $('.list1 .acco-text').stop().slideUp();
    $(this).next('.list1 .acco-text').stop().slideDown();
  }
});

$('.list2 .acco-btn').on('click', function(){
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.list2 .acco-text').stop().slideUp();
  } else {
    $('.list2 .acco-btn').removeClass('active');
    $(this).addClass('active');
    $('.list2 .acco-text').stop().slideUp();
    $(this).next('.list2 .acco-text').stop().slideDown();
  }
});

$('.list3 .acco-btn').on('click', function(){
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.list3 .acco-text').stop().slideUp();
  } else {
    $('.list3 .acco-btn').removeClass('active');
    $(this).addClass('active');
    $('.list3 .acco-text').stop().slideUp();
    $(this).next('.list3 .acco-text').stop().slideDown();
  }
});

/* popUp tab menu */
var targetLink = document.querySelectorAll('.tab-menu a'),
    tabContent = document.querySelectorAll('#tab-content > div');

for(var i = 0;i < targetLink.length;i++){

  targetLink[i].addEventListener('click', function(e){
    e.preventDefault();
    var orgTarget = e.target.getAttribute('href');
    var tabTarget = orgTarget.replace('#','');

    for(var x = 0; x < tabContent.length; x++){
      tabContent[x].style.display = 'none';
    }

    document.getElementById(tabTarget).style.display='block';

    for(var j = 0;j < targetLink.length;j++){
      targetLink[j].classList.remove('active');
      e.target.classList.add('active');
    }
  });
}
document.getElementById('tab1').style.display='block';











