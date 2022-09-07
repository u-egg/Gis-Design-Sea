//kakao map api
var container = document.getElementById('map');             //지도를 담을 영역의 DOM 레퍼런스
var options = {                                             //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(36.6424341, 127.4890319),   //지도의 중심좌표.
    level: 11                                                //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options);           //지도 생성 및 객체 리턴

// 마커 생성
var markerPosition = new kakao.maps.LatLng(36.6424341, 127.4890319);


// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 상단 네비 버튼 이벤트
function btn_swap_1(){
    $("#nav_btn_1").attr("class", "btn_on")
    $("#nav_btn_2").attr("class", "btn")
}

function btn_swap_2(){
    $("#nav_btn_2").attr("class", "btn_on")
    $("#nav_btn_1").attr("class", "btn")
}

function search_btn_1(){
    $(".search_btn_on").css("display","none");
    $(".search_btn_off").css("display","block");
    $(".search_frame").css("display","block");
}

function search_btn_2(){
    $(".search_btn_off").css("display","none");
    $(".search_btn_on").css("display","block");
    $(".search_frame").css("display","none");
}


//사이드 네비 버튼 이벤트
function left_nav_btn_1(){
    $("#left_nav_btn_1").attr("class","on");

    $("#left_nav_btn_2").attr("class","");
    $("#left_nav_btn_3").attr("class","");
    $("#left_nav_btn_4").attr("class","");
    $("#left_nav_btn_5").attr("class","");

    if($('#side_bar').css('width') == '0px'){

        $("#side_bar").css("width","250px");
        $(".top").css("display", "block")
        $(".body").css("display", "block")
        $("#map_frame").css("width", "calc(100vw - 310px)")
        $(".side_nav_open").css("display", "none")
        $(".side_nav_close").css("left", "310px")
        $(".side_nav_open").css("left", "310px")
        setTimeout(function() {
            $(".side_nav_close").css("display", "block")
          }, 290);
    
        $("#side_bar_part_1").css("display","block");
        $("#side_bar_part_2").css("display","none");
        $("#side_bar_part_3").css("display","none");
        $("#side_bar_part_4").css("display","none");
        $("#side_bar_part_5").css("display","none");

    }
    else if($("#side_bar_part_1").css("display") == 'block'){
        $("#side_bar").css("display","none");
        $("#side_bar_part_1").css("display","none");
        $("#left_nav_btn_1").attr("class","");
    }
    else{
    $("#side_bar").css("display","block");
    $("#side_bar_part_1").css("display","block");
    $("#side_bar_part_2").css("display","none");
    $("#side_bar_part_3").css("display","none");
    $("#side_bar_part_4").css("display","none");
    $("#side_bar_part_5").css("display","none");
    }
}

function left_nav_btn_2(){
    $("#left_nav_btn_2").attr("class","on");

    $("#left_nav_btn_1").attr("class","");
    $("#left_nav_btn_3").attr("class","");
    $("#left_nav_btn_4").attr("class","");
    $("#left_nav_btn_5").attr("class","");

    if($('#side_bar').css('width') == '0px'){

        $("#side_bar").css("width","250px");
        $(".top").css("display", "block")
        $(".body").css("display", "block")
        $("#map_frame").css("width", "calc(100vw - 310px)")
        $(".side_nav_open").css("display", "none")
        $(".side_nav_close").css("left", "310px")
        $(".side_nav_open").css("left", "310px")
        setTimeout(function() {
            $(".side_nav_close").css("display", "block")
          }, 290);
    
        $("#side_bar_part_2").css("display","block");
        $("#side_bar_part_1").css("display","none");
        $("#side_bar_part_3").css("display","none");
        $("#side_bar_part_4").css("display","none");
        $("#side_bar_part_5").css("display","none");

    }

    else if($("#side_bar_part_2").css("display") == 'block'){
        $("#side_bar").css("display","none");
        $("#side_bar_part_2").css("display","none");
        $("#left_nav_btn_2").attr("class","");
    }
    else{
    $("#side_bar").css("display","block");
    $("#side_bar_part_2").css("display","block");
    $("#side_bar_part_1").css("display","none");
    $("#side_bar_part_3").css("display","none");
    $("#side_bar_part_4").css("display","none");
    $("#side_bar_part_5").css("display","none");
    }
}

function left_nav_btn_3(){
    $("#left_nav_btn_3").attr("class","on");

    $("#left_nav_btn_1").attr("class","");
    $("#left_nav_btn_2").attr("class","");
    $("#left_nav_btn_4").attr("class","");
    $("#left_nav_btn_5").attr("class","");
    
    if($('#side_bar').css('width') == '0px'){

        $("#side_bar").css("width","250px");
        $(".top").css("display", "block")
        $(".body").css("display", "block")
        $("#map_frame").css("width", "calc(100vw - 310px)")
        $(".side_nav_open").css("display", "none")
        $(".side_nav_close").css("left", "310px")
        $(".side_nav_open").css("left", "310px")
        setTimeout(function() {
            $(".side_nav_close").css("display", "block")
          }, 290);
    
        $("#side_bar_part_3").css("display","block");
        $("#side_bar_part_1").css("display","none");
        $("#side_bar_part_2").css("display","none");
        $("#side_bar_part_4").css("display","none");
        $("#side_bar_part_5").css("display","none");

    }

    else if($("#side_bar_part_3").css("display") == 'block'){
        $("#side_bar").css("display","none");
        $("#side_bar_part_3").css("display","none");
        $("#left_nav_btn_3").attr("class","");
    }
    else{
    $("#side_bar").css("display","block");
    $("#side_bar_part_3").css("display","block");
    $("#side_bar_part_1").css("display","none");
    $("#side_bar_part_2").css("display","none");
    $("#side_bar_part_4").css("display","none");
    $("#side_bar_part_5").css("display","none");
    }
}

function left_nav_btn_4(){
    $("#left_nav_btn_4").attr("class","on");

    $("#left_nav_btn_1").attr("class","");
    $("#left_nav_btn_2").attr("class","");
    $("#left_nav_btn_3").attr("class","");
    $("#left_nav_btn_5").attr("class","");

    if($('#side_bar').css('width') == '0px'){

        $("#side_bar").css("width","250px");
        $(".top").css("display", "block")
        $(".body").css("display", "block")
        $("#map_frame").css("width", "calc(100vw - 310px)")
        $(".side_nav_open").css("display", "none")
        $(".side_nav_close").css("left", "310px")
        $(".side_nav_open").css("left", "310px")
        setTimeout(function() {
            $(".side_nav_close").css("display", "block")
          }, 290);
    
        $("#side_bar_part_4").css("display","block");
        $("#side_bar_part_1").css("display","none");
        $("#side_bar_part_3").css("display","none");
        $("#side_bar_part_2").css("display","none");
        $("#side_bar_part_5").css("display","none");

    }

    else if($("#side_bar_part_4").css("display") == 'block'){
        $("#side_bar").css("display","none");
        $("#side_bar_part_4").css("display","none");
        $("#left_nav_btn_4").attr("class","");
    }
    else{
    $("#side_bar").css("display","block");
    $("#side_bar_part_4").css("display","block");
    $("#side_bar_part_1").css("display","none");
    $("#side_bar_part_2").css("display","none");
    $("#side_bar_part_3").css("display","none");
    $("#side_bar_part_5").css("display","none");
    }
}

function left_nav_btn_5(){
    $("#left_nav_btn_5").attr("class","on");

    $("#left_nav_btn_1").attr("class","");
    $("#left_nav_btn_2").attr("class","");
    $("#left_nav_btn_3").attr("class","");
    $("#left_nav_btn_4").attr("class","");

    if($('#side_bar').css('width') == '0px'){

        $("#side_bar").css("width","250px");
        $(".top").css("display", "block")
        $(".body").css("display", "block")
        $("#map_frame").css("width", "calc(100vw - 310px)")
        $(".side_nav_open").css("display", "none")
        $(".side_nav_close").css("left", "310px")
        $(".side_nav_open").css("left", "310px")
        setTimeout(function() {
            $(".side_nav_close").css("display", "block")
          }, 290);
    
        $("#side_bar_part_5").css("display","block");
        $("#side_bar_part_1").css("display","none");
        $("#side_bar_part_3").css("display","none");
        $("#side_bar_part_4").css("display","none");
        $("#side_bar_part_2").css("display","none");

    }

    else if($("#side_bar_part_5").css("display") == 'block'){
        $("#side_bar").css("display","none");
        $("#side_bar_part_5").css("display","none");
        $("#left_nav_btn_5").attr("class","");
    }
    else{
    $("#side_bar").css("display","block");
    $("#side_bar_part_5").css("display","block");
    $("#side_bar_part_1").css("display","none");
    $("#side_bar_part_2").css("display","none");
    $("#side_bar_part_3").css("display","none");
    $("#side_bar_part_4").css("display","none");
    }
}


//사이드바 아코디언 메뉴
$(".que").click(function() {
    $(this).next(".anw").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
});

//사이드 버튼 슬라이드 이벤트
function sied_section_slide(){
    if ($('#side_bar').css('width') == '250px') {
        $("#side_bar").css("width", "0")

        $("#map_frame").css("width", "calc(100vw - 60px)")
        $(".top").css("display", "none")
        $(".body").css("display", "none")

        $(".side_nav_close").css("display", "none")
        $(".side_nav_close").css("left", "60px")
        $(".side_nav_open").css("left", "60px")
        setTimeout(function() {
            $(".side_nav_open").css("display", "block")
          }, 290);
    }

    else {
        $("#side_bar").css("width", "250px")

        $("#map_frame").css("width", "calc(100vw - 310px)")

        setTimeout(function() {
            $(".top").css("display", "block")
            $(".body").css("display", "block")
          }, 200);

        $(".side_nav_open").css("display", "none")
        $(".side_nav_close").css("left", "310px")
        $(".side_nav_open").css("left", "310px")

        setTimeout(function() {
            $(".side_nav_close").css("display", "block")
          }, 290);
    }

}
