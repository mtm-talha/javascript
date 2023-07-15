
// var array = fetch('./data.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


const array = [
    {
        "UserId" : 1,
        "UserName": "John",
        "DOB" : "23031995",
        "Location" :"Lahore",
        "MobileNumber" : "03331549410",
        "Gender" : "Male",
        "Height" : "5'7",
        "Weight" : "70kg"
    },
    {
        "UserId" : 2,
        "UserName": "Kamran",
        "DOB" : "28-02-2002",
        "Location" :"Lahore",
        "MobileNumber" : "0334349410",
        "Gender" : "Male",
        "Height" : "5'1",
        "Weight" : "51kg"
    },{
        "UserId" : 3,
        "UserName": "Waqar",
        "DOB" : "11-10-1997",
        "Location" :"Lahore",
        "MobileNumber" : "03317673347",
        "Gender" : "Male",
        "Height" : "5'8",
        "Weight" : "83kg"
    },{
        "UserId" : 4,
        "UserName": "Junaid",
        "DOB" : "14-08-2001",
        "Location" :"Rawalpindi",
        "MobileNumber" : "03336617181",
        "Gender" : "Male",
        "Height" : "6'2",
        "Weight" : "91kg"
    },{
        "UserId" : 5,
        "UserName": "Tahir",
        "DOB" : "19-01-1991",
        "Location" :"Rawalpindi",
        "MobileNumber" : "03214891234",
        "Gender" : "Male",
        "Height" : "5'2",
        "Weight" : "56kg"
    },{
        "UserId" : 6,
        "UserName": "Talha",
        "DOB" : "22-12-1994",
        "Location" :"Islamabad",
        "MobileNumber" : "03156320620",
        "Gender" : "Male",
        "Height" : "5'6",
        "Weight" : "71kg"
    },{
        "UserId" : 7,
        "UserName": "Saad",
        "DOB" : "16-11-1997",
        "Location" :"Lahore",
        "MobileNumber" : "03326437330",
        "Gender" : "Male",
        "Height" : "5'10",
        "Weight" : "84kg"
    },{
        "UserId" : 8,
        "UserName": "Zohair",
        "DOB" : "16-07-1993",
        "Location" :"Pasrur",
        "MobileNumber" : "03003478142",
        "Gender" : "Male",
        "Height" : "5'4",
        "Weight" : "66kg"
    },{
        "UserId" : 9,
        "UserName": "Carlos",
        "DOB" : "13-06-1992",
        "Location" :"Sialkot",
        "MobileNumber" : "03096754348",
        "Gender" : "Male",
        "Height" : "5'2",
        "Weight" : "70kg"
    },{
        "UserId" : 10,
        "UserName": "Yousaf",
        "DOB" : "26-09-1990",
        "Location" :"Peshawar",
        "MobileNumber" : "03435692340",
        "Gender" : "Male",
        "Height" : "5'9",
        "Weight" : "95kg"
    },{
        "UserId" : 11,
        "UserName": "Abdullah",
        "DOB" : "28-11-1999",
        "Location" :"Rawalpindi",
        "MobileNumber" : "03355237723",
        "Gender" : "Male",
        "Height" : "5'4",
        "Weight" : "59kg"
    }
]



// //Comparer Function    
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    

function GetAllUser()
{
    return JSON.parse.array;
}
console.log(array.sort(GetSortOrder("Experience"))); 