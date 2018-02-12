$(document).ready(function(){

$(".menu_b").click(function(){
    $(".swipe").css({"left":"0px","transition":"0.5s"})   
})
$(".close").click(function(){
    $(".swipe").css({"left":"-285px","transition":"0.5s"})   
})
$(window).scroll(function(){
    if ($(this).scrollTop() > 130) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
        return false;
    }
});
$('.scrollup').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    $(this).css({"color":"white"})
    return false;
});


 images=document.querySelectorAll('#slider .slider_in')
 var index=0;
function reset(){
    for( i=0;i<images.length;i++){
        images[i].style.display="none"
    }
}
function startslide(){
    reset();
    images[0].style.display="block"
    $("#slider .text p").css({"animation-name":"lightSpeedIn","animation-duration":"1s",})

}
setInterval(function(){ 
    if(index==images.length-1){
        index=-1;
    }
    reset();
    images[index+1].style.display="block";
    index++;
   
} ,8500);
startslide();
$(".right_icon").click(function(){
    if(index==images.length-1){
        index=-1;
    };
    reset();
    images[(index+1)].style.display="block"
    index++;  
    
});
$(".left_icon").click(function(){
    
    if(index==0){
        index=images.length;
    }
    reset();
    images[index-1].style.display="block"
    index--;
    });
    
    
// Accord
$(".registr_c").click(function(){
    
    $(".registr_page").fadeIn(400);

})
$(".login_c").click(function(){
    
    $(".login_page").fadeIn(400);
})
$(".question").click(function(){
    $(".login_page").fadeOut();
    $(".reset_page").fadeIn(400);
})
$(".close_r").click(function(){  
    $(".registr_page").fadeOut(400);
    $(".login_page").fadeOut(400);
    $(".reset_page").fadeOut(400);
    $(".search_page").fadeOut(400);
})
$(".log").click(function(){  
    $(".reset_page").fadeOut();
    $(".login_page").fadeIn(400);
})
$(".reg_p").click(function(){  
    $(".reset_page").fadeOut();
    $(".registr_page").fadeIn(400);
})
$(".f_login").click(function(){  
    $(".registr_page").fadeOut();
    $(".login_page").fadeIn(400);
})
$(".signin").click(function(){  
    $(".login_page").fadeIn(400);
})
$(".f_register").click(function(){  
    $(".login_page").fadeOut();
    $(".registr_page").fadeIn(400);
})
$(".pencile").click(function(){  
    $(".registr_page").fadeIn(400);
})
$(".sres_hide").click(function(){  
    $(".search_page").fadeIn(400);
})
$(".s_search").click(function(){  
    $(".search_page").fadeIn(400);
})

$(window).click(function(event) {
    if(event.target.className=="registr_page"||event.target.className=="login_page"||event.target.className=="reset_page"||event.target.className=="search_page"){
        $(".registr_page").fadeOut(500);
        $(".login_page").fadeOut(500);
        $(".reset_page").fadeOut(500);
        $(".search_page").fadeOut(500);
    }
    
});
// ----------------------------compare----------------------------------
$(".fCompare").click(function(){
$(".compare").fadeIn();
return false;
})
$(window).click(function(event) {
    if(event.target.className=="compare"){
        $(".compare").fadeOut(500);
    }
    
});
$(".close_r").click(function(){
$(".compare").fadeOut();

})

//---------------------------------------- resize function--------------------------------
function sliderInit() {
    slideC=$(".slide_c img").width($(".slider").width());  
    newwidth=$(".slide_c").width();  
    slideC=newwidth; 
    smallwidth=$(".slide_s").width(); 
    length= $(".slide_in").children().length;  
    smallength=$(".slide_small").children().length;
    prev=0;margin=0;
    small=0;swipe=0;prev_b=0;
    slideB=$(".slide_b img").width($(".hide_b").width()); 
    bwidth=$(".slide_b").width();
    slideB=bwidth;
    blength=$(".res_b").children().length;
   
}
sliderInit();
$(window).on('resize', function() {
    
    sliderInit();
})
//---------------------------------------- resize function--------------------------------
//--------------------------------next click function----------------------------------
$("#next").click(function(){
    prev++; 
    margin+=newwidth;
    small+=smallwidth; 
    if(prev>=length){   
        margin=newwidth*(length-1);
        small=smallwidth*(smallength-1);
      $(".big_box").css({"visibility":"visible"});
      $("html").css({"overflow":"hidden"}); }
    $(".slide_c img").css({"margin-left":-margin,"transition":"0.3s ease"})
    $(".slide_small").css({"margin-left":-small,"transition":"0.3s ease"})
    $(".slide_s.actives").removeClass("actives").next(".slide_s").addClass("actives");
    return false;  
}) 
 //----------------------------next click function----------------------------------
 $(window).click(function(event) {
    if(event.target.className=="big_box"){
        $(".big_box").css({"visibility":"hidden"});
        $("html").css({"overflow":"scroll"});}
});
//------------------next_click function-------------------------
function nextb_click(){
    prev_b++;
    swipe+=bwidth;
    if(prev_b>=blength){
       swipe=0;
       prev_b=0
   }
    $(".slide_b img").css({"margin-left":-swipe})
    return false;
 }
 function prevb_click(){
    prev_b--;
    swipe-=bwidth;
     if(prev_b<=0){
        swipe=bwidth*(blength-1);   
        prev_b=blength;   
    }
     $(".slide_b img").css({"margin-left":-swipe})
     return false;
 }
//-------------------------- b slide--------------------------
$("#next_b").click(function(){
    nextb_click();
    return false;      
 })    
 $(".slide_b img").click(function(){
    nextb_click();
    return false;
 })
 $("#prev_b").click(function(){
    prevb_click()
    return false;
 })
//------------------------ b slide--------------------------------

//---------------------------- prev click-----------------------------
$("#prev").click(function(){
     prev--;
     margin-=newwidth;
     small-=smallwidth;
     if (prev <= 0) {
        margin=0;
        small=0;
        prev=margin;
        $(".big_box").css({"visibility":"visible"});
        $("html").css({"overflow":"hidden"}); 
       
 }
     $(".slide_c img").css({"marginLeft" :-margin,"transition" : "0.3s ease"})
     $(".slide_small").css({"margin-left":-small,"transition":"0.3s ease"})
     $(".slide_s.actives").removeClass("actives").prev(".slide_s").addClass("actives");
     
     return false;
  })
//---------------------------- prev click-----------------------------
//window click function
 $(window).click(function(event) {
    if(event.target.className=="big_box"){
        $(".big_box").css({"visibility":"hidden"});
        $("html").css({"overflow":"scroll"});   
      }
});
eq=$(".slide_s").eq();
//slide_s click function
 $(".slide_s").click(function() {
    prev++; 
    margin+=newwidth;
    small+=smallwidth;
    if(prev>=length){
     margin=newwidth*4;
     small=smallwidth*4;    
    }
     $(".slide_c img").css({"marginLeft" :-margin,"transition" : "0.3s ease"});
     $(".slide_small").css({"margin-left":-small,"transition":"0.3s ease"});
     $(".slide_s.actives").removeClass("actives").next(this).addClass("actives");
});
$('.foldable .sec_li').click(function () {
    if ($('.sec_act').css({ 'display':'none' })) {
        $(this).css({ 'border-top': '1px solid #993816' })
        $(".foldable .active_li").css({"border-top":"none"})
        $('.active').slideUp();
        $('.sec_act').slideDown();
    }
    else {
        $(".foldable .active_li").css({"border-top":"1px solid #993816"})
        $('.active').slideDown();      
        $('.sec_act').slideUp();      
    }
})
$('.foldable .sec_li').click(function () {
    if ($('.sec_act').css({ 'display':'none' })) {
        $(this).css({ 'border-top': '1px solid #993816' })
        $(".foldable .active_li").css({"border-top":"none"})
        $('.active').slideUp();
        $('.sec_act').slideDown();
    }
    else {
        $(".foldable .active_li").css({"border-top":"1px solid #993816"})
        $('.active').slideDown();      
        $('.sec_act').slideUp();      
    }
})
$('.foldable .active_li').click(function () {
    if ($('.active').css({ 'display':'none' })) {
        $(this).css({ 'border-top': '1px solid #993816' })
        $(".foldable .sec_li").css({"border-top":"none"})
        $('.active').slideDown();
        $('.sec_act').slideUp();
    }
    else {
        $(".foldable .sec_li").css({"border-top":"1px solid #993816"})
        $('.sec_act').slideDown();      
        $('.active').slideUp();      
    }
})

 
        $(".sech").click(function(){ 
            $(".sech.active").removeClass("active");
            $(this).addClass("active").siblings().removeClass("active")
             return false;})

        $(".sechb").click(function(){ 
            $(".sechb.active").removeClass("active");
            $(this).addClass("active").siblings().removeClass("active")
            return false;})

           $("#all").click(function(){
            $(".paddg").css({"display":"none"});
            $(".paddg.all").css({"display":"block"});
            $(".sech").css({"overflow":"visible"})
            $(this).css({"overflow":"hidden"})
          }) 
          $("#vase").click(function(){
            $(".paddg").css({"display":"none"});
              $(".paddg.vase").css({"display":"block"}); 
              $(".sech").css({"overflow":"visible"})
              $(this).css({"overflow":"hidden"})
          })
          $("#clock").click(function(){   
            $(".paddg").css({"display":"none"});
            $(".paddg.clock").css({"display":"block"});
            $(".sech").css({"overflow":"visible"})
            $(this).css({"overflow":"hidden"})
          })
          $("#tableware").click(function(){
            $(".paddg").css({"display":"none"});
            $(".paddg.tableware").css({"display":"block"});
            $(".sech").css({"overflow":"visible"})
            $(this).css({"overflow":"hidden"})
          })
          $("#paintings").click(function(){
            $(".paddg").css({"display":"none"});
            $(".paddg.paintings").css({"display":"block"});
            $(".sech").css({"overflow":"visible"})
            $(this).css({"overflow":"hidden"})
          })   

           $("#allb").click(function(){
            $(".paddgb").css({"display":"none"});
            $(".paddgb.allb").css({"display":"block"});
            $(".sechb").css({"overflow":"visible"})
            $(this).css({"overflow":"hidden"})
          })
          $("#vaseb").click(function(){
            $(".paddgb").css({"display":"none"});
              $(".paddgb.vaseb").css({"display":"block"}); 
              $(".sechb").css({"overflow":"visible"})
              $(this).css({"overflow":"hidden"})
          })
          $("#clockb").click(function(){   
            $(".paddgb").css({"display":"none"});
            $(".paddgb.clockb").css({"display":"block"});
            $(".sechb").css({"overflow":"visible"})
            $(this).css({"overflow":"hidden"})
          })
          $("#tablewareb").click(function(){
            $(".paddgb").css({"display":"none"});
            $(".paddgb.tablewareb").css({"display":"block"});
            $(".sechb").css({"overflow":"visible"})
            $(this).css({"overflow":"hidden"})
          })
          $("#paintingsb").click(function(){
            $(".paddgb").css({"display":"none"});
            $(".paddgb.paintingsb").css({"display":"block"});
            $(".sechb").css({"overflow":"visible"})
            $(this).css({"overflow":"hidden"})
          })   

    


 
$("#plus").click( function () {
    var value = $("#number").val();
    value++;
    $("#number").val(value);
});

$("#minus").click( function () {
    var value = $("#number").val();
    value--;
    $("#number").val(value);
    if($("#number").val()<=1){

       $("#number").val(1);
       
    }
});




});
var btn=document.getElementsByClassName("click_btn");
var a;
var up=document.getElementsByClassName("up");
var down_i=document.getElementsByClassName("down");
for (a = 0; a < btn.length; a++) {
    btn[a].addEventListener("click", function() {
        var down = this.nextElementSibling;
        if (down.style.display == "block") {
            down.style.display = "none";
            down_i.style.display="none"
            up.style.display="block"       
        } else {
            down.style.display = "block";
            up.style.display="block"
            down_i.style.display="none"
        }
    });
}
var range_value = document.getElementById("f_range");
var range_value1 = document.getElementById("f_range1");
var result = document.getElementById("from");
var result1 = document.getElementById("to");
result.innerHTML = range_value.value;
result1.innerHTML = range_value1.value;

range_value.oninput = function() {
  result.innerHTML = this.value;
}
range_value1.oninput = function() {
  result1.innerHTML = this.value;
}



