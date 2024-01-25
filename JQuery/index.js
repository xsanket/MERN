
// manupulating dom using plain js
// let dom1 = document.querySelector(".head");
// dom1.style.color = "blue";

//------------------------------------------------------------
// .css:
//manupulating dom using JQuery
// $("h1.head").css("color","red");

//--------------------------------------------------------------------------------
// .addClass:
// using addClass method of jQuery to change css class(which has actual font change )
//$("h1.head").addClass("change-class");
$("h1.head").addClass("change-class change-location");


//-----------------------------------------------------------------------------------------
// .text
//$("h1.head").text("Hello World")

//.html
//to change inner HTML
$("h1.head").html("hello from jquery .html method");


//----------------------------------------------------------------
//.attr
// to change attribute as well as set new attribute using Jquery
$("a").attr("href", "http://www.google.com");


//--------------------------------------------------------------------------
//.click
//to work on eventListner(click)
$("button").click(function(){
    $("h1.head").css("color", "black");
});


//.keypress
//to work on eventListner(keyPress)
$("body").keypress( function(){
   //$("h1.head").html(event.key);
   //or
   $("h1.head").text(event.key);
});


//------------------------------------------------
// .on
// basically to change any of the javascript method 
// $("h1.head").on("mouseover" ,function(){
//     $("h1.head").css("color", "pink");
// });

$("h1.head").on("click", function(){
    $("h1.head").css("color", "green");
});


//minified version
//$("h1.head").addClass("change-class change-location");$("h1.head").html("hello from jquery .html method");$("a").attr("href","http://www.google.com");$("button").click(function(){$("h1.head").css("color","black")});$("body").keypress(function(){$("h1.head").text(event.key)});$("h1.head").on("click",function(){$("h1.head").css("color","green")})