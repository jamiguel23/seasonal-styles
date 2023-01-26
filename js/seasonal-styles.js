$(function () {

    //start hidden
    $("div#yetAnotherDiv li").hide();


    //reveal li items
    $("div#yetAnotherDiv")
    .hide()
    .fadeIn(2000,function(){
        $("div#yetAnotherDiv li").each(function(){
            $(this).slideDown(1000);
        });
    });


});

// document.querySelector('div#myDiv').innerHTML= 'new text'

