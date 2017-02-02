//look for the submit event.

//iterate from 1 to that # 


//check to see if that number meets on of three conditions: 
//write "results" to div.js-results

//



$(function(){

    $("form").submit(function(e) {e.preventDefault(); 
    var num = $("#number-choice").val();
    num = parseInt(num);                          
    for (var i=0; i<=num; i++){ 
        var result = i;
        if (i % 3 === 0 && i % 5 === 0){
            result = "FizzBuzz";  
        } else if (i % 3 === 0) {
            result = "Fizz";   
        } else if (i % 5 === 0){
            result = "Buzz";
        }
     
    $(".js-results").append( "<p>" + result + "</p>" );
    }
                              
 });

});