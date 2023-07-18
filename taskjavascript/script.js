// var array = fetch('./data.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


const array = [
    {
        "UserId" : 1,
        "UserName": "John",
        "DOB" : "23/03/1995",
        "Location" :"Lahore",
        "MobileNumber" : "03331549410",
        "Gender" : "Male",
        "Height" : "5'7",
        "Weight" : 70
    },
    {
        "UserId" : 2,
        "UserName": "Kamran",
        "DOB" : "28-02-2002",
        "Location" :"Lahore",
        "MobileNumber" : "0334349410",
        "Gender" : "Male",
        "Height" : "5'1",
        "Weight" : 51
    },{
        "UserId" : 3,
        "UserName": "Waqar",
        "DOB" : "11-10-1997",
        "Location" :"Lahore",
        "MobileNumber" : "03317673347",
        "Gender" : "Male",
        "Height" : "5'8",
        "Weight" : 83
    },{
        "UserId" : 4,
        "UserName": "Junaid",
        "DOB" : "14-08-2001",
        "Location" :"Rawalpindi",
        "MobileNumber" : "03336617181",
        "Gender" : "Male",
        "Height" : "6'2",
        "Weight" : 91
    },{
        "UserId" : 5,
        "UserName": "Tahir",
        "DOB" : "19-01-1991",
        "Location" :"Rawalpindi",
        "MobileNumber" : "03214891234",
        "Gender" : "Male",
        "Height" : "5'2",
        "Weight" : 56
    },{
        "UserId" : 6,
        "UserName": "Talha",
        "DOB" : "22-12-1994",
        "Location" :"Islamabad",
        "MobileNumber" : "03156320620",
        "Gender" : "Male",
        "Height" : "5'6",
        "Weight" : 71
    },{
        "UserId" : 7,
        "UserName": "Saad",
        "DOB" : "16-11-1997",
        "Location" :"Lahore",
        "MobileNumber" : "03326437330",
        "Gender" : "Male",
        "Height" : "5'10",
        "Weight" : 84
    },{
        "UserId" : 8,
        "UserName": "Zohair",
        "DOB" : "16-07-1993",
        "Location" :"Pasrur",
        "MobileNumber" : "03003478142",
        "Gender" : "Male",
        "Height" : "5'4",
        "Weight" : 66
    },{
        "UserId" : 9,
        "UserName": "Carlos",
        "DOB" : "13-06-1992",
        "Location" :"Sialkot",
        "MobileNumber" : "03096754348",
        "Gender" : "Male",
        "Height" : "5'2",
        "Weight" : 70
    },{
        "UserId" : 10,
        "UserName": "Yousaf",
        "DOB" : "26-09-1990",
        "Location" :"Peshawar",
        "MobileNumber" : "03435692340",
        "Gender" : "Male",
        "Height" : "5'9",
        "Weight" : 95
    },{
        "UserId" : 11,
        "UserName": "Abdullah",
        "DOB" : "28-11-1999",
        "Location" :"Rawalpindi",
        "MobileNumber" : "03355237723",
        "Gender" : "Male",
        "Height" : "5'4",
        "Weight" : 59
    }
];

//<<<<<<<<<<<<<<----------Create user----------->>>>>>>>>>>
// function addUser()
// {
//     array.push

// }

//<<<<<<<<<<<<<<----------Update user----------->>>>>>>>>>>


function updateUserByUsername(usernameToUpdate, newValues) {
    const lowercaseUsername = usernameToUpdate.toLowerCase();
    const updatedArray = array.map((user) => {
        if (user.UserName.toLowerCase() === lowercaseUsername) {
            return { ...user, ...newValues }; // Merge the existing user object with the new values
        }
        return user;
    });
    return updatedArray;
}



// // Example usage:
const usernameToUpdate = 'John';
const newValues = { Location: 'New York', Weight: 75 };
const newArrayWithUpdatedUser = updateUserByUsername(usernameToUpdate, newValues);

console.log('Updated Array:', newArrayWithUpdatedUser);


//<<<<<<<<<<<<<-----------Delete user----------->>>>>>>>>>>

function deleteUserByUsername(usernameToDelete) {
        const lowercaseUsername = usernameToDelete.toLowerCase();
        const filteredArray = array.filter((user) => {
            return user.UserName.toLowerCase() !== lowercaseUsername;
        });
    
        return filteredArray;
    }
    
    // Example usage:
    const usernameToDelete = 'John';
    const newArrayWithoutUser = deleteUserByUsername(usernameToDelete);
    
//<<<<<<<<<<<<<-----------Get user age---------->>>>>>>>>>>

function parseDate(dateStr) {
    // Custom function to parse different date formats
    const formatsToTry = ["DD-MM-YYYY", "DD/MM/YYYY"];
    for (const format of formatsToTry) {
        const parts = dateStr.split(/[-/]/);
        if (parts.length === 3 && parts[0].length === 2 && parts[1].length === 2 && parts[2].length === 4) {
            return new Date(parts[2], parts[1] - 1, parts[0]);
        }
    }
    return null; // Invalid date format
}

function age(username) {
    const user = array.find((user) => user.UserName === username);
    if (!user) {
        console.log('User not found.');
        return;
    }

    const dob = parseDate(user.DOB);
    if (!dob) {
        console.log('Invalid date format for Date of Birth.');
        return;
    }

    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dob;
    const ageDate = new Date(ageInMilliseconds); // Convert the difference to a date object
    const ageInYears = ageDate.getUTCFullYear() - 1970;
    const ageInMonths = ageDate.getUTCMonth();

    console.log('Your Age is:');
    console.log(
        ageInYears + ' Years ' +
        ageInMonths + ' Months ' +
        ageDate.getUTCDate() + ' Days'
    );
}

// Example usage:
age('John');


//<<<<<<<<<<<<-----------Get all users--------->>>>>>>>>>>>
//<<<<<<<<<<<--------Ascending/Descending------>>>>>>>>>>>>
//<<<<<<<<<<<---Search on basis of properties-->>>>>>>>>>>>
// //Comparer Function    
function GetSortOrderAsc(prop) {    
    return function(a, b) { 
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    
function GetSortOrderDesc(prop) {    
    return function(a, b) { 
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    


// Find any user by username
function findUserByUsername(usernameToFind) {
    const lowercaseUsername = usernameToFind.toLowerCase();
    const user = array.find((user) => {
        return user.UserName.toLowerCase() === lowercaseUsername;
    });

    return user || null;
}

// Example usage:
const usernameToSearch = 'tahir';
const foundUser = findUserByUsername(usernameToSearch);

if (foundUser) {
    console.log('User found:', findUserByUsername(foundUser.UserName));
} else {
    console.log('User not found.');
}
