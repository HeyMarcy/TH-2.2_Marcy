//In this drill, you'll need to use event listeners to detect when users click on an element with the .js-lightbulb class. When that happens, the current clicked element should get the class .bulb-on applied to it, and any other elements that previously had the .bulb-on class should have it removed.
//
//With the CSS styles already in place, this will cause the currently clicked lightbulb to appear to turn on, and any other lit bulbs off.


// 1. dectect a click event
// 2. turn off any other lights and turn on the current one.
// 3. if current light if on, turn it off -toggle?



$(function() {
 $('.lightbulb').click(function () {
   $('.lightbulb').removeClass("bulb-on");
     $(event.currentTarget).addClass("bulb-on");
//     if ($(event.currentTarget).hasClass("bulb-on")){
//         $(event.currentTarget).removeClass("bulb-on");
//     }
 }) 

});