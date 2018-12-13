$(document).ready(function (){
    $(".devoured").on("click", function(event){
                
        event.preventDefault();        
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");
        
        var newDevouredState = {
            devoured: newDevoured
        }

        console.log(id);
        console.log(newDevouredState);
        

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function (){
                console.log("Changed devoured state to", newDevoured);
                console.log(newDevouredState);
                
                location.reload()
            }
        );
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();


        var newBurger = {
            name: $("#newBurger").val().trim(),
            devoured: 0
        };

        console.log(newBurger);
        

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                
                console.log("Created new burger");
                
                location.reload()
            }
        );
    });
});