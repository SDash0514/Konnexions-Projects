
$(function(){
  var galleryImage = $(".gallery").find("img").first();
  var images = [

    "NYC images/american musuem of natural-history-museum.jpg",
    "NYC images/central park attractions.jpg",
    "NYC images/empire-state-building-3-1000x1000.jpg",
    "NYC images/statue of liberty.jpg",
    "NYC images/times square.jpg",
    "NYC images/xConey-Island.jpg.pagespeed.ic.BtMPJcyJaD.jpg"
  ];
  var i = 0;
  setInterval(function(){
    i = (i+1) % images.length;
    galleryImage.fadeOut(function(){
        $(this).attr('src', images[i]);
        $(this).fadeIn();
    });
  }, 3500);

});
  

$(document).ready(function(){
  $("#1").mouseover(function(){
    $("#1").css("background-color","LightSeaGreen");
  });
  $("#1").mouseout(function(){
    $("#1").css("background-color","white");
  });
});

$(document).ready(function(){
  $("#2").mouseover(function(){
    $("#2").css("background-color","LightSeaGreen");
  });
  $("#2").mouseout(function(){
    $("#2").css("background-color","white");
  });
});

$(document).ready(function(){
  $("#3").mouseover(function(){
    $("#3").css("background-color","LightSeaGreen");
  });
  $("#3").mouseout(function(){
    $("#3").css("background-color","white");
  });
});

$(document).ready(function(){
  $("#4").mouseover(function(){
    $("#4").css("background-color","LightSeaGreen");
  });
  $("#4").mouseout(function(){
    $("#4").css("background-color","white");
  });
});
$(document).ready(function(){
  $("#5").mouseover(function(){
    $("#5").css("background-color","LightSeaGreen");
  });
  $("#5").mouseout(function(){
    $("#5").css("background-color","white");
  });
});

$(document).ready(function(){
  $("#6").mouseover(function(){
    $("#6").css("background-color","LightSeaGreen");
  });
  $("#6").mouseout(function(){
    $("#6").css("background-color","white");
  });
});

$(document).ready(function() {
  $("#Head1").mouseover(function(){
    $("#Head1").css("font-size",50);
  });
  $("#Head1").mouseout(function(){
    $("#Head1").css("font-size",23);
  });
});

$(document).ready(function() {
  $("#Head2").mouseover(function(){
    $("#Head2").css("font-size",50);
  });
  $("#Head2").mouseout(function(){
    $("#Head2").css("font-size",23);
  });
});

$(document).ready(function() {
  $("#Head3").mouseover(function(){
    $("#Head3").css("font-size",50);
  });
  $("#Head3").mouseout(function(){
    $("#Head3").css("font-size",23);
  });
});
$(document).ready(function() {
  $("#Head4").mouseover(function(){
    $("#Head4").css("font-size",50);
  });
  $("#Head4").mouseout(function(){
    $("#Head4").css("font-size",23);
  });
});
$(document).ready(function() {
  $("#Head5").mouseover(function(){
    $("#Head5").css("font-size",50);
  });
  $("#Head5").mouseout(function(){
    $("#Head5").css("font-size",23);
  });
});
$(document).ready(function() {
  $("#Head6").mouseover(function(){
    $("#Head6").css("font-size",50);
  });
  $("#Head6").mouseout(function(){
    $("#Head6").css("font-size",23);
  });
});


var k=0;
  $(document).ready(function(){
    $("#box").hide();
    $(".gallery").hide();
    $(".btn-block").click(function(){
      if(k%2==0){
        $(this).html("SEE LESS");
      }else {
        $(this).html("SEE MORE");
      }
      k++;
      $("#box").toggle("slow");
      $(".gallery").toggle(3000);
    });
  });
