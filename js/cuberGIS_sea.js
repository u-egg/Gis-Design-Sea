// //kakao map api
// var container = document.getElementById('map');             //지도를 담을 영역의 DOM 레퍼런스
// var options = {                                             //지도를 생성할 때 필요한 기본 옵션
//     center: new kakao.maps.LatLng(36.6424341, 127.4890319),   //지도의 중심좌표.
//     level: 11                                                //지도의 레벨(확대, 축소 정도)
// };

// var map = new kakao.maps.Map(container, options);           //지도 생성 및 객체 리턴

// // 마커 생성
// var markerPosition = new kakao.maps.LatLng(36.6424341, 127.4890319);


// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     position: markerPosition
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);

// 상단 네비 버튼 이벤트
function btn_swap_1(){
    $("#nav_btn_1").attr("class", "btn_on")
    $("#nav_btn_2").attr("class", "btn")
}

function btn_swap_2(){
    $("#nav_btn_2").attr("class", "btn_on")
    $("#nav_btn_1").attr("class", "btn")
}

function search_btn_1(){ // 검색창 추가 필요
    $(".search_btn_on").css("display","none");
    $(".search_btn_off").css("display","block");
}

function search_btn_2(){
    $(".search_btn_off").css("display","none");
    $(".search_btn_on").css("display","block");
}


//사이드 네비 버튼 이벤트
function left_nav_btn_1(){
    $("#left_nav_btn_1").attr("class","on");

    $("#left_nav_btn_2").attr("class","");
    $("#left_nav_btn_3").attr("class","");
    $("#left_nav_btn_4").attr("class","");
    $("#left_nav_btn_5").attr("class","");

    $("#side_bar").css("display","block");
    $("#side_bar_part_1").css("display","block");
}


//사이드바 아코디언 메뉴
$(".que").click(function() {
    $(this).next(".anw").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
});