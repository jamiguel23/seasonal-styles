$(function () {

  $("document").ready(function () {
    $('.seasons a').click(function (e) {//find all a tags inside class of seasons
      e.preventDefault();//stop default submission
      let season = $(this).attr("href");//contents of href attribute of this element
      // alert(season);

      season = season.toLowerCase();
      console.log(season);

      switch(season){
        case "spring":
          console.log('this is the working season', season)
          $('#logo').attr("src", 'images/spring.gif')
          $('#wear').attr("src", 'images/spring-wear.jpg')
          $('html').css('background-color', '#2B7129');
          $('#myHeader').text('This is spring');
        break;

        case "fall":
          console.log('this is the working season', season)
          $('#logo').attr("src", 'images/fall.gif')
          $('#wear').attr("src", 'images/fall-wear.jpg')
          $('html').css('background-color', '#A81124');
          $('#myHeader').text('This is fall!');
        break;

        default:
          alert('no season matches')
      }
    });
  });



});

// document.querySelector('div#myDiv').innerHTML= 'new text'

