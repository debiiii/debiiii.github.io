$(document).ready(function(){
  var current = "";
  var $grid = $('.portfolio-item').isotope({
  });
  //----------all------------
  $("#all").hover(function(){
    $("#all").removeClass("hover");
    $("#all").removeClass("clicked");
    $("#game").addClass("hover");
    $("#installation").addClass("hover");
    $("#photography").addClass("hover");
    $("#wearable").addClass("hover");
  }, function(){
    if(current == "all"){

    }
    else if(current == "game"){
      $("#all").addClass("hover");
      $("#game").removeClass("hover");
      $("#installation").addClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "installation"){
      $("#all").addClass("hover");
      $("#game").addClass("hover");
      $("#installation").removeClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "photography"){
      $("#all").addClass("hover");
      $("#game").addClass("hover");
      $("#installation").addClass("hover");
      $("#photography").removeClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "wearable"){
      $("#all").addClass("hover");
      $("#game").addClass("hover");
      $("#installation").addClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").removeClass("hover");
    }
    else{
      $("#game").removeClass("hover");
      $("#installation").removeClass("hover");
      $("#photography").removeClass("hover");
      $("#wearable").removeClass("hover");
    }

  });
  $("#all").click(function(){
    current = "all";
    $("#game.clicked").removeClass("clicked");
    $("#game").removeClass("hover");
    $("#game").addClass("clicked");
    $("#installation.clicked").removeClass("clicked");
    $("#installation").removeClass("hover");
    $("#installation").addClass("clicked");
    $("#photography.clicked").removeClass("clicked");
    $("#photography").removeClass("hover");
    $("#photography").addClass("clicked");
    $("#wearable.clicked").removeClass("clicked");
    $("#wearable").removeClass("hover");
    $("#wearable").addClass("clicked");
    $grid.isotope({filter: '*'});
  });
  //----------game------------
  $("#game").hover(function(){
    $("#all").addClass("hover");
    $("#game").removeClass("hover");
    $("#game").removeClass("clicked");
    $("#installation").addClass("hover");
    $("#photography").addClass("hover");
    $("#wearable").addClass("hover");
  }, function(){
    if(current == "all"){
      $("#all").removeClass("hover");
      $("#game").addClass("hover");
      $("#installation").addClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "game"){

    }
    else if(current == "installation"){
      $("#all").addClass("hover");
      $("#game").addClass("hover");
      $("#installation").removeClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "photography"){
      $("#all").addClass("hover");
      $("#game").addClass("hover");
      $("#installation").addClass("hover");
      $("#photography").removeClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "wearable"){
      $("#all").addClass("hover");
      $("#game").addClass("hover");
      $("#installation").addClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").removeClass("hover");
    }
    else {
      $("#all").removeClass("hover");
      $("#installation").removeClass("hover");
      $("#photography").removeClass("hover");
      $("#wearable").removeClass("hover");
    }
  });
  $("#game").click(function(){
    current = "game";
    $("#all.clicked").removeClass("clicked");
    $("#all").removeClass("hover");
    $("#all").addClass("clicked");
    $("#installation.clicked").removeClass("clicked");
    $("#installation").removeClass("hover");
    $("#installation").addClass("clicked");
    $("#photography.clicked").removeClass("clicked");
    $("#photography").removeClass("hover");
    $("#photography").addClass("clicked");
    $("#wearable.clicked").removeClass("clicked");
    $("#wearable").removeClass("hover");
    $("#wearable").addClass("clicked");
    $grid.isotope({filter: '.game'});
  });
  //----------installation------------
  $("#installation").hover(function(){
    $("#all").addClass("hover");
    $("#game").addClass("hover");
    $("#installation").removeClass("clicked");
    $("#installation").removeClass("hover");
    $("#photography").addClass("hover");
    $("#wearable").addClass("hover");
  }, function(){
    if(current == "all"){
      $("#all").removeClass("hover");
      $("#game").addClass("hover");
      $("#installation").addClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "game"){
      $("#all").addClass("hover");
      $("#game").removeClass("hover");
      $("#installation").addClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "installation"){

    }
    else if(current == "photography"){
      $("#all").addClass("hover");
      $("#game").addClass("hover");
      $("#installation").addClass("hover");
      $("#photography").removeClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "wearable"){
      $("#all").addClass("hover");
      $("#game").addClass("hover");
      $("#installation").addClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").removeClass("hover");
    }
    else {
      $("#all").removeClass("hover");
      $("#game").removeClass("hover");
      $("#photography").removeClass("hover");
      $("#wearable").removeClass("hover");
    }
  });
  $("#installation").click(function(){
    current = "installation";
    $("#all.clicked").removeClass("clicked");
    $("#all").removeClass("hover");
    $("#all").addClass("clicked");
    $("#game.clicked").removeClass("clicked");
    $("#game").removeClass("hover");
    $("#game").addClass("clicked");
    $("#photography.clicked").removeClass("clicked");
    $("#photography").removeClass("hover");
    $("#photography").addClass("clicked");
    $("#wearable.clicked").removeClass("clicked");
    $("#wearable").removeClass("hover");
    $("#wearable").addClass("clicked");
    $grid.isotope({filter: '.installation'});
  });
  //----------photography------------
  $("#photography").hover(function(){
    $("#all").addClass("hover");
    $("#game").addClass("hover");
    $("#installation").addClass("hover");
    $("#photography").removeClass("clicked");
    $("#photography").removeClass("hover");
    $("#wearable").addClass("hover");
  }, function(){
    if(current == "all"){
      $("#all").removeClass("hover");
      $("#game").addClass("hover");
      $("#installation").addClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "game"){
      $("#all").addClass("hover");
      $("#game").removeClass("hover");
      $("#installation").addClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "installation"){
      $("#all").addClass("hover");
      $("#game").addClass("hover");
      $("#installation").removeClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "photography"){

    }
    else if(current == "wearable"){
      $("#all").addClass("hover");
      $("#game").addClass("hover");
      $("#installation").addClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").removeClass("hover");
    }
    else {
      $("#all").removeClass("hover");
      $("#game").removeClass("hover");
      $("#installation").removeClass("hover");
      $("#wearable").removeClass("hover");
    }
  });
  $("#photography").click(function(){
    current = "photography";
    $("#all.clicked").removeClass("clicked");
    $("#all").removeClass("hover");
    $("#all").addClass("clicked");
    $("#game.clicked").removeClass("clicked");
    $("#game").removeClass("hover");
    $("#game").addClass("clicked");
    $("#installation.clicked").removeClass("clicked");
    $("#installation").removeClass("hover");
    $("#installation").addClass("clicked");
    $("#wearable.clicked").removeClass("clicked");
    $("#wearable").removeClass("hover");
    $("#wearable").addClass("clicked");
    $grid.isotope({filter: '.photography'});
  });
  //----------wearable------------
  $("#wearable").hover(function(){
    $("#all").addClass("hover");
    $("#game").addClass("hover");
    $("#installation").addClass("hover");
    $("#photography").addClass("hover");
    $("#wearable").removeClass("clicked");
    $("#wearable").removeClass("hover");
  }, function(){
    if(current == "all"){
      $("#all").removeClass("hover");
      $("#game").addClass("hover");
      $("#installation").addClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "game"){
      $("#all").addClass("hover");
      $("#game").removeClass("hover");
      $("#installation").addClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "installation"){
      $("#all").addClass("hover");
      $("#game").addClass("hover");
      $("#installation").removeClass("hover");
      $("#photography").addClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "photography"){
      $("#all").addClass("hover");
      $("#game").addClass("hover");
      $("#installation").addClass("hover");
      $("#photography").removeClass("hover");
      $("#wearable").addClass("hover");
    }
    else if(current == "wearable"){

    }
    else {
      $("#all").removeClass("hover");
      $("#game").removeClass("hover");
      $("#installation").removeClass("hover");
      $("#photography").removeClass("hover");
    }
  });
  $("#wearable").click(function(){
    current = "wearable";
    $("#all.clicked").removeClass("clicked");
    $("#all").removeClass("hover");
    $("#all").addClass("clicked");
    $("#game.clicked").removeClass("clicked");
    $("#game").removeClass("hover");
    $("#game").addClass("clicked");
    $("#installation.clicked").removeClass("clicked");
    $("#installation").removeClass("hover");
    $("#installation").addClass("clicked");
    $("#photography.clicked").removeClass("clicked");
    $("#photography").removeClass("hover");
    $("#photography").addClass("clicked");
    $grid.isotope({filter: '.wearable'});
  });


});
