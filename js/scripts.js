    $(document).ready(function() {
    $("form#Info").submit(function(event){
    var animalInput = $("input#animal").val();
    var musicInput = $("input#music").val();
    var foodInput = $("input#food").val();
    var placesInput = $("input#places").val();



    $(".animal").text(animalInput);
    $(".music").text(musicInput);
    $(".food").text(foodInput);
    $(".places").text(placesInput);


    $("#list").show();
    event.preventDefault();
  });
});
