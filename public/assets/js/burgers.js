$(function() {
  
    $(".change-eaten").on("click", function(event){
      var id = $(this).data("id");
      var newEaten = $(this).data("eaten");

      var newEatenState = {
          eaten: newEaten
      };
      console.log("newEatenState", newEatenState)
      $.ajax("/api/burgers/"+ id, {
          type:"PUT",
          data: newEatenState
      }).then(
          function(){
              console.log("changed eaten to", newEaten);

              location.reload();
          }
      )
  }) 
  
  $(".delete").on("click", function(event){
      var id = $(this).data("id");
      $.ajax("/api/burgers/"+ id,{
          type: "DELETE"
      }).then(
          function(){
              console.log("removed burger " + id);
              location.reload();
          }
      )
  }) 

  $(".create-form").on("submit", function(event){
      event.preventDefault();

      var newBurger = {
          name: $("#bur").val().trim(),
          eaten:$("[name=eaten]:checked").val().trim()
      }
      $.ajax("/api/burgers",{
          type:"POST",
          data: newBurger
      }).then(
          function(){
              console.log("created new burger")
              location.reload();
          }
      )
  })
})