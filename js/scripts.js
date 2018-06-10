$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var name = $("input#name").val();
    var season = parseInt($("select#season")).val();
    var purpose = $("select#purpose").val();
    var independance = $("select#independance").val();
    var activity = $("select#activity").val();

  if (season === 4) {
    $("#Caribbean").show();
  }


    event.preventDefault();
  });
});
