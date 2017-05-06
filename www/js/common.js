/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

function validationMsgs(message, title, button){
    navigator.notification.alert(
        message,  
        function(){},        
        title,            
        button            
    );
}

function getRadioValue(groupName) {
      var _result;
      try {
      var o_radio_group = document.getElementsByName(groupName);
        	for (var a = 0; a < o_radio_group.length; a++) {
        	if (o_radio_group[a].checked) {
       		_result = o_radio_group[a].value;
        	            break;
        	      }
        	}
      } catch (e) { }
     return _result;
}