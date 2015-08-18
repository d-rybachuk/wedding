/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

    $("body").scrollspy({target: ".navbar"});
/*
    $('.navbar').on('activate.bs.scrollspy', function () {
      console.log($(this));

      var myVideo = document.getElementById("invitevideo");
      myVideo.play();
    })
*/
   $('#mileDate').datepicker({
     changeMonth: true,
     changeYear: true,
     dateFormat: 'MM yy',
     yearRange: "1986:2015",
     
     onClose: function(dateText, inst) {  
            var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val(); 
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val(); 
            var selected = $(this).val($.datepicker.formatDate('yy-mm', new Date(year, month, 1)));
            var miles = calculate( new Date(year, month, 1), new Date() );
            $("#milesTotal").html(miles);
            $("#calcResults").css({'display': 'block'});
     }
  
  });
  $("#mileDate").focus(function () {
        $(".ui-datepicker-calendar").hide();
        $("#ui-datepicker-div").position({
            my: "center top",
            at: "center bottom",
            of: $(this)
        });    
  });

  function calculate( selected, today )
  {
    var milliseconds = today.getTime() - selected.getTime();
    return (milliseconds / (24*60*60*1000)).toFixed(0);
  }
