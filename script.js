$(document).ready(function(){
    // activate the accordian jQueryUI effect
    $( function() {
        $( "#accordion" ).accordion();
    });

    // activate the tabs jQueryUI effect
    $( function() {
        $( "#tabs" ).tabs();
    });

    //activate the jQueryUI button effects
      $( function() {
        $( ".widget input[type=submit], .widget a, .widget button" ).button();
        $( "button, input, a" ).click( function( event ) {
        event.preventDefault();
        });
    });

    // hide
    $("#hide-show p").click(function(){
        $(this).hide("slow");
    });
    
    // show
    $("#hide-show button").click(function(){
        $("#hide-show p").show("slow");
    });

    // toggle
    $("#toggle button").click(function(){
        $("#toggle p").toggle("slow");
    });

    // slideUp
    $("#slideUp").click(function(){
        $("#slide-down-up a").slideUp("slow");
    });

    // slideDown
    $("#slideDown").click(function(){
        $("#slide-down-up a").slideDown("slow");
    });

    // slideToggle
    $("#slideToggle button").click(function(){
        $("#slideToggle a").slideToggle("slow");
    });

    // fadeIn
    $("#fade-in-out button").click(function(){
        $("#fade-in-out img").fadeIn("slow");
    });

    // fadeOut
    $("#fade-in-out img").hover(function(){
        $(this).fadeOut("slow");
    });

    // before
    $("#before").click(function(){
        $(this).before("<b>Hey there!</b>");
    });

    // after
    $("#after").click(function(){
        $(this).after("<b>See you later</b>");
    });

    // append
    $("#append button").click(function(){
        $("#append p").append(" Way to go! You did it!!!!");
    });

    // html
    $(".word").click(function(){
        var changeString=$(this).html();
        $("#change span").html(changeString);
    })

    // text and css
    $(".color-selector").click(function(){
        var newColor = $(this).text();
        console.log(newColor);
        $("#change").css("color", newColor);
    });

    // addClass
    $("#add-class span").click(function(){
        $(this).addClass("highlight");
    });

    // removeClass
    $("#add-class button").click(function(){
        $("#add-class span").removeClass("highlight");
    });

     // val and attr
    $("input").keyup(function(){
        var newAlt = $(this).val();
        $("#attr img").attr("title", newAlt);
    });

    // data
    var dataText = '';
    $( "div" ).data( "test", { first: 16, last: "pizza!" } );
    $("#attach-data").click(function(){
        $("#data-collector").data("test", {word:"Surprise", number:42});
         dataText += ($("#data-collector").data("test").word);
    });
    $("#retrieve-data").click(function(){
        $("#data h3").after(function(){
            return "<p>" + dataText + "</p>";
        });
    });
});