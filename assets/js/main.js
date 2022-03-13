let isClikedOpen = false;

window.addEventListener("scroll", scrolling);

function scrolling(event)
{
  // scroll Top 값 구하기
  let scroll = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;
  document.querySelector(".scroll").textContent = `H : ${scroll}`;

  // pc, mobile nav메뉴 효과 
  if (window.innerWidth > 800) 
  {
    if(isClikedOpen == false) 
    {
      if( scroll > 0 )
      {
        document.querySelector(".gnbWrap").classList.add("gnbHide");
      }else
      {
        document.querySelector(".gnbWrap").classList.remove("gnbHide");
      }
    }
  } 
};

// 브라우저 width값 구하기 
window.addEventListener("resize", resizing);
function resizing(scrollBar)
{
  let resize = window.innerWidth;
  document.querySelector(".innerWidth").textContent = `W : ${resize}`;
}

// gnb메뉴
// 클릭 이벤트
const toggleBtnPc     = document.querySelector('.rightBtn');
const toggleBtnMobile = document.querySelector('.rightBtnMo');
const gnbWrap         = document.querySelector('.gnbWrap');
const showClose       = document.querySelector('.gnbWrap');
const btnClicked      = document.querySelectorAll('.btnClicked');
const clickRemove     = gnbWrap.classList.remove('active');
// console.log(btnClicked);

// * pc 
toggleBtnPc.addEventListener('click', () => 
{
  gnbWrap.classList.toggle('showClose');
  
  // 스크롤 뒤 nav메뉴를 펼쳤을때, 스크롤 하더라도 nav메뉴가 접히지 않도록!
  if(isClikedOpen == true)
  {
    isClikedOpen = false;
  }
  else
  {
    isClikedOpen = true;
  }
});

// pc >>animation - gallery 
const aniGalleryWrap = document.querySelector('.sec5Box');
let activeMob = document.querySelector('.activeMob');
let gallery = document.querySelector('.gallery');

aniGalleryWrap.addEventListener('mouseover', galleryMouseover);
aniGalleryWrap.addEventListener('mouseout', galleryMouseout);

function galleryMouseover(event){
  if(window.innerWidth > 800){
    event.target.parentNode.classList.add('active');
  } 
};
function galleryMouseout(event){
  if(window.innerWidth > 800){
    event.target.parentNode.classList.remove('active');
  } 
}

// * mobile
toggleBtnMobile.addEventListener('click', () => 
{
  gnbWrap.classList.toggle('active');
});

const nav = document.querySelector('.nav');
const navList = document.querySelector('.navList');
const list = document.querySelector('.list');
nav.addEventListener('click', mobHideList);

function mobHideList(){
  if(window.innerWidth < 800){
    // console.log('dd')
    gnbWrap.classList.remove('active');
  }
}
// mob >>animation - gallery 
const aniGallery = document.querySelectorAll('.aniGallery')
aniGalleryWrap.addEventListener('click', galleryClick);

function galleryClick(event){
  if(window.innerWidth < 800){
    for(var i = 0; i < aniGallery.length; i++){
      aniGallery[i].querySelector('.boxTxt').addEventListener('click', function(e){
        e.preventDefault();
        for(var j = 0; j < aniGallery.length; j++){
          aniGallery[j].classList.remove('activeMob');
        }
        this.parentNode.classList.add('activeMob');
      });
    }
  } 
}


