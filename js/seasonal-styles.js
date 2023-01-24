$(function(){

  let counter = 0;
  $("div#myDiv p").each(function(){
    counter++;
    $(this).prepend(counter + ') ').fadeOut(5000);
});

});

// document.querySelector('div#myDiv').innerHTML= 'new text'

