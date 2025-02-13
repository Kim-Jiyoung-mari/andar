// const aClick = document.querySelectorAll('nav a');
// console.log(aClick)
// aClick.addEventListener('click',(e) => {
//     
// })

const mainSwiper = new Swiper('.main_swiper',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    pagination:{
        el:'.main_swiper .swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets:true,
    },
});

// 2행 에어쿨링
const contentSwiper = new Swiper('.c_swiper',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row2 .progress .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row2 .s_btn .next",
        prevEl: ".row2 .s_btn .prev",
    }
});

// =====================================================  3행 신상
const allSwiper = new Swiper('.all .c_swiper2',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row3 .progress .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row3 .s_btn .next",
        prevEl: ".row3 .s_btn .prev",
    }
});
const womanSwiper = new Swiper('.womanz .c_swiper2',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row3 .woman .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row3 .s_btn .next",
        prevEl: ".row3 .s_btn .prev",
    }
});

const manSwiper = new Swiper('.manz .c_swiper2',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row3 .man .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row3 .s_btn .next",
        prevEl: ".row3 .s_btn .prev",
    }
});

const underSwiper = new Swiper('.under .c_swiper2',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row3 .wear .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row3 .s_btn .next",
        prevEl: ".row3 .s_btn .prev",
    }
});

// 3행스크롤 탭 내용 바뀌기

// [1]. 초기세팅
//  1. "tapC" 탭내용 모두 숨기기 => 함수생성 "tabCHide"
//  2. 탭내용 1 보이기
//  3. 탭제목 클래스 초기화 => 함수생성 "tabClsReset"
//  4. 탭제목 1 클래스 적용
const tabC = document.querySelectorAll('.row3 .tab_container > div');
const tabT = document.querySelectorAll('.row3 .t_btm .item_tab a');
console.log(tabC, tabT);
for(let i of tabC){
    function tabCHide (){ /* 탭내용 모두 숨기기용 함수 : 생성 */
        for(let i of tabC) i.style.display = 'none';
    }
}
function tabClsReset(){/* 클래스 초기화 함수 : 생성 */
    for(let i of tabT) i.classList.remove('active');
}
tabCHide();
tabClsReset();

tabC[0].style.display = 'block';
tabT[0].classList.add('active');

//[2]. "tabT" 탭 제목을 클릭했을 때(1,2,3,4 모두 가능)    
//  1. 탭제목 클래스 초기화 
//  2. 탭제목 클래스 적용(현재 이벤트 대상) 
//  3. 탭내용 모두 숨기기 
//  4. 탭내용 보이기 (탭제목 현재 이벤트 대상의 내용의 인덱스)
tabT.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        // console.log(target);
        tabClsReset(); // 호출하기만 하면 됨
        target.classList.add('active');
        //누를 때 클래스를 옮기기
        tabCHide();//탭 내용 숨기기 함수 호출
        tabC[index].style.display = 'block';
        //탭제목 현재 이벤트 대상의 내용의 인덱스
        e.preventDefault();
    })
})




// =====================================================  4행 베스트셀러
const beallSwiper = new Swiper('.best_all .c_swiper3',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row4 .be_all .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row4 .s_btn .next",
        prevEl: ".row4 .s_btn .prev",
    }
});

const bewomanSwiper = new Swiper('.best_woman .c_swiper3',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row4 .be_woman .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row4 .s_btn .next",
        prevEl: ".row4 .s_btn .prev",
    }
});

const bemanSwiper = new Swiper('.best_man .c_swiper3',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row4 .be_man .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row4 .s_btn .next",
        prevEl: ".row4 .s_btn .prev",
    }
});

const bejuSwiper = new Swiper('.best_juni .c_swiper3',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row4 .be_juni .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row4 .s_btn .next",
        prevEl: ".row4 .s_btn .prev",
    }
});

const beaccSwiper = new Swiper('.best_acc .c_swiper3',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: " .row4 .be_acc .swiper-scrollbar",
    },
    navigation: {
        nextEl: ".row4 .s_btn .next",
        prevEl: ".row4 .s_btn .prev",
    }
});

// 4행스크롤 탭 내용 바뀌기

// [1]. 초기세팅
//  1. "tapC" 탭내용 모두 숨기기 => 함수생성 "tabCHide"
//  2. 탭내용 1 보이기
//  3. 탭제목 클래스 초기화 => 함수생성 "tabClsReset"
//  4. 탭제목 1 클래스 적용
const tabC2 = document.querySelectorAll('.row4 .best_container > div');
const tabT2 = document.querySelectorAll('.row4 .t_btm .item_tab a');
console.log(tabC2, tabT2);
for(let i of tabC2){
    function tabCHide2 (){ /* 탭내용 모두 숨기기용 함수 : 생성 */
        for(let i of tabC2) i.style.display = 'none';
    }
}
function tabClsReset2(){/* 클래스 초기화 함수 : 생성 */
    for(let i of tabT2) i.classList.remove('active');
}
tabCHide2();
tabClsReset2();

tabC2[0].style.display = 'block';
tabT2[0].classList.add('active');

//[2]. "tabT" 탭 제목을 클릭했을 때(1,2,3,4 모두 가능)    
//  1. 탭제목 클래스 초기화 
//  2. 탭제목 클래스 적용(현재 이벤트 대상) 
//  3. 탭내용 모두 숨기기 
//  4. 탭내용 보이기 (탭제목 현재 이벤트 대상의 내용의 인덱스)
tabT2.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        // console.log(target);
        tabClsReset2(); // 호출하기만 하면 됨
        target.classList.add('active');
        //누를 때 클래스를 옮기기
        tabCHide2();//탭 내용 숨기기 함수 호출
        tabC2[index].style.display = 'block';
        //탭제목 현재 이벤트 대상의 내용의 인덱스
        e.preventDefault();
    })
})