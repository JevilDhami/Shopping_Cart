var empid=[1,4,5]
var records = [{ "empid": 1, "fname": "X", "lname": "Y" ,
                "empid": 2, "fname": "A", "lname": "Y" ,
                "empid": 3, "fname": "B", "lname": "Y" ,
                "empid": 4, "fname": "C", "lname": "Y" ,
                "empid": 5, "fname": "C", "lname": "Y" }] ;

var empIdObj={};

empid.forEach(function(element) {
empIdObj[element]=true;
});

var filteredArray=[];

records.forEach(function(element) {
if(empIdObj[element.empid])
    filteredArray.push(element)
});