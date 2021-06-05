$(document).ready(function() {

  $('.collapse').collapse()
  $("#circle1").on("click", function() {
    if ($("#circle1").attr('class') == 'fa fa-minus-circle activate') {
      $("#circle1").attr('class', 'fa fa-plus-circle');

    }else{
      $("#circle1").attr('class', 'fa fa-minus-circle activate');
    }

  });
  $("#circle2").on("click", function() {
    if ($("#circle2").attr('class') == 'fa fa-minus-circle activate') {
      $("#circle2").attr('class', 'fa fa-plus-circle');

    }else{
      $("#circle2").attr('class', 'fa fa-minus-circle activate');
    }

  });
  $("#circle3").on("click", function() {
    for (var i = 4; i < 7; i++) {
      if ($("#circle"+(i)).attr('class') == 'fa fa-minus-circle activate') {
        $("#circle"+(i)).trigger('click');
        $("#circle"+(i)).attr('class', 'fa fa-plus-circle');
      }
    }

    if ($("#circle3").attr('class') == 'fa fa-minus-circle activate') {
      $("#circle3").attr('class', 'fa fa-plus-circle');
      $(".vl").css('height','450px')
      $(".vl22").css('margin-top','448px')
      $(".vl23").css('margin-top','313px')
      $(".vl24").css('margin-top','188px')

    }else{
      $("#circle3").attr('class', 'fa fa-minus-circle activate');
      $(".vl").css('height','720px')
      $(".vl22").css('margin-top','719px')
      $(".vl23").css('margin-top','602px')
      $(".vl24").css('margin-top','471px')
    }

  });
  $("#circle4").on("click", function() {
    for (var i = 3; i < 7; i++) {
      if (i!=4) {
        if ($("#circle"+(i)).attr('class') == 'fa fa-minus-circle activate') {
          $("#circle"+(i)).trigger('click');
          $("#circle"+(i)).attr('class', 'fa fa-plus-circle');
        }
      }
    }

    if ($("#circle4").attr('class') == 'fa fa-minus-circle activate') {
      $("#circle4").attr('class', 'fa fa-plus-circle');
      $(".vl").css('height','450px')
      $(".vl22").css('margin-top','448px')
      $(".vl23").css('margin-top','313px')

    }else{
      $("#circle4").attr('class', 'fa fa-minus-circle activate');
      $(".vl").css('height','720px')
      $(".vl22").css('margin-top','719px')
      $(".vl23").css('margin-top','602px')
    }

  });
  $("#circle5").on("click", function() {
    for (var i = 3; i < 7; i++) {
      if (i!=5) {
        if ($("#circle"+(i)).attr('class') == 'fa fa-minus-circle activate') {
          $("#circle"+(i)).trigger('click');
          $("#circle"+(i)).attr('class', 'fa fa-plus-circle');
        }
      }
    }
    if ($("#circle5").attr('class') == 'fa fa-minus-circle activate') {
      $("#circle5").attr('class', 'fa fa-plus-circle');
      $(".vl").css('height','450px')
      $(".vl22").css('margin-top','448px')
      $(".vl23").css('margin-top','313px')

    }else{
      $("#circle5").attr('class', 'fa fa-minus-circle activate');
      $(".vl").css('height','720px')
      $(".vl22").css('margin-top','719px')
    }

  });
  $("#circle6").on("click", function() {
    for (var i = 3; i < 7; i++) {
      if (i!=6) {
        if ($("#circle"+(i)).attr('class') == 'fa fa-minus-circle activate') {
          $("#circle"+(i)).trigger('click');
          $("#circle"+(i)).attr('class', 'fa fa-plus-circle');
        }
      }
    }
    if ($("#circle6").attr('class') == 'fa fa-minus-circle activate') {
      $("#circle6").attr('class', 'fa fa-plus-circle');
    }else{
      $("#circle6").attr('class', 'fa fa-minus-circle activate');
    }

  });


});
