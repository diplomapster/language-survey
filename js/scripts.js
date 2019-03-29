$(document).ready(function() {
  $("#submit").click(function() {

    var name = $("input#name").val();
    var age = parseInt($("#age").val());
    var siblings = $("#siblings").val();
    var zodiac = $("#zodiac").val();
    var starwars = $("#starwars").val();

    $(".name").text(name);

      if (starwars === "empire" || siblings ==="oldest") {
          $("#c").show();
          $("#java").hide();
          $("#ruby").hide();
          $("#english").hide();
      } else if (zodiac === "gemini") {
         $("#java").show();
         $("#c").hide();
         $("#ruby").hide();
         $("#english").hide();
      } else if (starwars === "rebel" || siblings === "youngest") {
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
});
