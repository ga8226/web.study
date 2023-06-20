$(document).ready(function(){
    //좌우 슬라이드제작 css 수정 진행
    //위아래 슬라이드
    //{제이존}쌍따움표 써야하고 기호 뜯어내고(하이픈) 대문자써야함 
    // $("#slider ul").animate({ "marginTop": -300 },400)
    setInterval(function(){
        $("#slider ul").animate({"marginLeft": -1200 },400,function(){
            $("#slider li").eq(0).appendTo($("#slider ul"));
            $("#slider ul").css("margin-left",0)
        })
    },3000)
})