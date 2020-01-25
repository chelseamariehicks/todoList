//Check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed")
});

//Click on X to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//Add new todo items to the list
$("input[type='text']").keypress(function (event) {
    if(event.which === 13) {
        //grab the new todo text from the input
        var newTodo = $(this).val();
        //empty the input field
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + newTodo + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});