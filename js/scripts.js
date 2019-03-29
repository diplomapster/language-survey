$(document).ready(function(event) {
  $("#submit").click(function() {

    var name = ($("#name").val());
    var dob = parseInt($("#born").val());
    var siblings = $("#siblings").val();
    var zodiac = $("#zodiac").val();
    var starwars = $("#starwars").val();



    if (starwars === "empire" || siblings ==="oldest") {
        $("#c").show();
        $("#java").hide();
        $("#ruby").hide();
        $("#english").hide();
    } else if () {
       $("#java").show();
       $("#c").hide();
       $("#ruby").hide();
       $("#english").hide();
    } else if (siblings === "youngest") {
      $("#ruby").show();
      $("#c").hide();
      $("#java").hide();
      $("#english").hide();
    } else {
      $("#english").show();
      $("#c").hide();
      $("#java").hide();
      $("#ruby").hide();
    }
  });
  // event.preventDefault();
});
