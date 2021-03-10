$(function(){

   $("#gnb>ul#mainMenu>li").mouseover(function(){
        $(this).children("ul").stop().fadeIn(100);
        // $(this).children("ul").stop().slideDown(800);
        // 개별 서브메뉴 슬라이드

        // 전체 서브메뉴 슬라이드
        // $(".subMenu").stop().slideDown(800);
    });

    $("#gnb>ul#mainMenu>li").mouseout(function(){
        $(this).children("ul").stop().fadeOut(100);
        // $(this).children("ul").stop().slideUp(800);
    });

});

// .slideUp(), .slideDown() => 위아래로 사라지는 효과
// .fadeln(), .fadeOut() =>점차 나타나고 사라지는 효과
