/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
/* button  #btnCalculate */
$(document).on("click", "#btnCalculate", function(evt)
{
    logicWages.calculateSalary();
    return false;
});
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
