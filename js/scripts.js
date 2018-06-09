$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var name = ($("input#name").val());
    var season = $("select#season").val();
    var purpose = $("select#purpose").val();
    var independance = $("select#independance").val();
    var activity = $("select#activity").val();


    var destination = (100 - age) * 3;

    $("#rate").empty().append(quote);
    $("#caribbean").show();

    event.preventDefault();
  });
});
