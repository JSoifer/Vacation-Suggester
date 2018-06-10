



$(document).ready(function() {
  $("form#survey").submit(function(event) {

    var name = $("input#name").val();
    var season = parseInt($("select#season").val());
    var purpose = parseInt($("select#purpose").val());
    var independance = $("select#independance").val();
    var activity = $("select#activity").val();

  $(".name").append(name);
  $(".message").show();


  if (season === 4 && purpose === 1) {
    $("#caribbean").show();
  } else if (season === 4 && purpose === 2) {
    $("#ecuador").show();
  } else if (season === 100 && purpose === 2) {
    $("#ireland").show();
  } else if (season === 100 && purpose === 1) {
    $("#ecuador").show();
  } else {
    $("#ireland").show();
  }

  event.preventDefault();
  });
});
