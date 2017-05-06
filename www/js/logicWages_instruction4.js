var logicWages = (function() {

return {
    wages: wages,
    tax: tax, 
    calculateSalary: calculateSalary
};    
    
function calculateSalary(){
    var basicSalary, itemsSold, commission, commission13, commission46, commission7, totalSalary;
        		
    basicSalary = parseFloat($("#txtSalary").val());
    itemsSold = parseFloat($("#txtItemSold").val());
    
    commission13 = parseFloat($("#txtCommission13").val()); 
    commission46 = parseFloat($("#txtCommission46").val());
    commission7 = parseFloat($("#txtCommission7").val());
    
    totalSalary = basicSalary;
        
    if (getRadioValue("discipline") == "FALSE"){
        if ((itemsSold >= 1) && (itemsSold <= 3)){
            commission = commission13;
        }
        else if ((itemsSold >=4) && (itemsSold <= 6)){
            commission = commission46;
        }
        else if (itemsSold >= 7){
            commission = commission7;
        }
        else {
            commission = 0;
        }
    }
    else {
        commission = 0;
    }
        		
    totalSalary = totalSalary + (itemsSold * commission);
    validationMsgs("Your total salary is $" + totalSalary, "Information", "OK");
}

    function wages(hoursWorked, hourlyRate){
        var totalsalary = hoursWorked * hourlyRate;
        return totalsalary;
    }

    function tax(taxrate, salary){
        return taxrate * salary;
    }
    
})();