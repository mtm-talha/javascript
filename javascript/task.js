/* Requirement: 
1.School : name, location, principal
print dynamic values of school */ 
let school={
    name: 'arid',
    location:'rawalpindi',
    principal:'ali'
}
 
console.log(school)
school.size=500
console.log(school)


function getSchoolData(n, loc, p)
{
    let school={
        name:n,
        location:loc,
        principal:p
    }
    return getSchoolData
};

console.log(getSchoolData('SPS','Islamabad','Saad'))


/* 2.Print record of all students, specific roll number students(dynamic roll no.), 
those specific students whose age is greater than 15(dynamic age), 
print all students who study in class 1(dynamic class)
Properties:name, roll_number, class, age
Array of objects:We will make 5 records of students
roll number should be unique  */
let student={
    name:'Salman',
    roll_no: 123,
    class: 2,
    age=10,
    teacher_name: 'asad'
}
function getStudentData(n, rn, cl, a, t_name)
{
    let student={
        name=n;
        if (age>15)
        {
            return age;
        }
        if (class == 1)
        {
            return class;
        }
    }
};
console.log(getStudentData('saad',23,1,17,'aslam'))


/* 3.teachers: name, age, salary, teacher_id, class, subject
print record of all teachers, specific teachers whose salary is greater than 50k(dynamic salary), 
print all students whose teacher name is asad(dynamic value)  */

let teacher ={
    name: 'Asad',
    age: 25,
    salary: 40000,
    teacher_id: 456,
    class: 10,
    subject: 'English and Mathematics'
}
function getTeacherData(n,a,sal,tid,c,sub)
{
    let teacher={
        if (sal>50000)
        {
            return sal
        }
        if (student.teacher_name=='asad'))
        {
            return student.name
        }
    }
}
console.log(getTeacherData('hamza',26,60000,789,9,'computer'))


/* 4.studentResults: class, subject, roll no., marks/grade
addResults() dynamic value(roll no., teacher_id, marks)
 */
const studentResults=[]
function addResults(r_no,t_id,ms)
{
    studentResults.push((roll_no:r_no,teacher_id:t_id,marks:ms))
    return studentResults
}
console.log(addResults(1,123,50))
function getResultByRollNo(roll_no){
    const result=studentResults.find(result->result.roll_no==roll_no)
    return studentResults
}
getResultByRollNo(2)
console.log(addResults(1,2,50))