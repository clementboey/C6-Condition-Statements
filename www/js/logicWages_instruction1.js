var logicWages = (function() {

return {
    wages: wages,
    tax: tax, 
    calculateSalary: calculateSalary
};    
    
function calculateSalary(){
    var basicSalary, itemsSold, commission, minimum, totalSalary;

    basicSalary =parseFloat($("#txtSalary").val());
    itemsSold = parseFloat($("#txtItemSold").val());
    commission = parseFloat($("#txtCommission").val());
    minimum = parseFloat($("#txtMin").val());
    totalSalary = basicSalary;

    if (itemsSold > minimum){
        totalSalary = totalSalary + (itemsSold * commission);
    }

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