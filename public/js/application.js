$(document).ready(function() {

  $("form").submit(function(event){
    event.preventDefault();
    $.post( "/grandma", $("form").serialize(), function(response){
      $("div").html(response);
      
    });


  });


});
