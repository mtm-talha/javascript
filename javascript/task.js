/* Requirement: 
1.School : name, location, principal
print dynamic values of school */ 
function getSchoolData(n, loc, p)
{
    let school={
        name:n,
        location:loc,
        principal:p
    }
    return school
};

console.log(getSchoolData('SPS','Islamabad','Saad'))


/* 2.Print record of all students, specific roll number students(dynamic roll no.), 
those specific students whose age is greater than 15(dynamic age), 
print all students who study in class 1(dynamic class)
Properties:name, roll_number, class, age
Array of objects:We will make 5 records of students
roll number should be unique  */
const students=[
    {name:'Salman',  class_value: 2, age:10, roll_no:1, teacher_id: 456},
    {name:'Hassan',  class_value: 5, age:11, roll_no:6, teacher_id: 456},
    {name:'Hamza',   class_value: 9, age:12, roll_no:3, teacher_id: 456},
    {name:'Abdullah',class_value: 3, age:10, roll_no:8, teacher_id: 456},
    {name:'Junaid',  class_value: 8, age:11, roll_no:4, teacher_id: 456}
]


// Print record of all students
function getAllStudents(){
    if (students?.length>0)
    return students
    else
    return 'No Record Found'
}
console.log(getAllStudents())


// print student record by roll number(dynamic roll no.),
function getStudentsByRollNo(roll_no)
{
    const student = students.find(element=>element.roll_no===roll_no)
    return student?  student :  'No record found'
}
console.log(getStudentsByRollNo(1))

// print students whose age is greater than 15(dynamic age), 
function getStudentsByAge(age)
{
    const student = students.filter(element=>(element.age>age))
    return student?  student :  'No record found'
}
console.log(getStudentsByAge(1))

// print all students who study in class 1(dynamic class)
function getStudentsByClass(class_value)
{
    const student = students.filter(element=>element.class_value===class_value)
    return student && student.length>0? student : `Student is not in class ${class_value} `
}
console.log(getStudentsByClass(7))

// add student with unique roll number
function addStudent(name,class_value,age,roll_no,teacher_name)
{
    const student=students.find(element=>element.roll_no===roll_no)
    if(student)
    return 'Roll Number already exist'
    else
    students.push(name,class_value,age,roll_no,teacher_name)
    return students
}
console.log(addStudent('saad',10,19,4,'asad'))


/* 3.teachers: name, age, salary, teacher_id, class, subject
print record of all teachers, specific teachers whose salary is greater than 50k(dynamic salary) */
const teachers =[
    {name: 'Asad',  age: 25, salary: 30000, teacher_id: 456, class: 10, subject: 'English'},
    {name: 'Akram', age: 25, salary: 50000, teacher_id: 451, class: 9, subject: 'Physics'},
    {name: 'Danial',age: 25, salary: 40000, teacher_id: 452, class: 8, subject: ' Chemistry'},
    {name: 'Kamran',age: 25, salary: 60000, teacher_id: 453, class: 11, subject: 'Computer'},
    {name: 'Faraz', age: 25, salary: 55000, teacher_id: 454, class: 12, subject: 'Mathematics'}
]  

function getTeacherData()
{
    const teacher= teachers.find(element=>element.salary>50000)
    if (teacher)
    return teacher
    else
    return 'Teacher salary is less than 50000'
}
console.log(getTeacherData())

// print all students whose teacher name is asad(dynamic value)  
function getStudent(teacher_name)
{
    const teacher= students.find(element=>element.teacher_id===456)
    if (teacher)
    return students.name
    else
    return 'No record found'
}
console.log(getStudent('456'))


/* 4.studentResults: class, subject, roll no., marks/grade
addResults() dynamic value(roll no., teacher_id, marks)
 */
const studentResults=[]
function addResults(r_no,t_id,ms)
{
    studentResults.push({roll_no:r_no,teacher_id:t_id,marks:ms})
    return studentResults
}
console.log(addResults(1,123,50))

function getResultByRollNo(roll_no){
    const result=studentResults.find(result=>result.roll_no==roll_no)
    return studentResults
}
console.log(getResultByRollNo())


// print all students whose teacher name is asad(dynamic value)  
function getStudentByTeacherName(teacher_name)
{
    const teacher=teachers.find(teacher=>teacher.name.toLowerCase() ===teacher_name.toLowerCase())
    if(teacher){
        const studentResults=students.filter(student=>student.teacher_id===teacher.teacher_id)
        return studentResults?.length>0 ? studentResults:`No students found with Teacher Name ${teacher_name}`
    }
    return `No Record found with Teacher Name ${teacher_name}`
}
console.log(getStudentByTeacherName('asad'))

// 
function getTeachersByClass(class_value)
{
    const studentResults=students.filter(student=>student.class_value===class_value)
    console.log(studentResults)
    let finalResult=[]
    studentResults.forEach(student => {
        const result={
            roll_no:student.roll_no,
            studentName:student.name
        }
        const teacher=teachers.find(teacher=>teacher.teacher_id===student.teacher_id)
        if(teacher){
            
          result.teacher_id=teacher.teacher_id
          result.teacher_name=teacher.name
          result.subject=teacher.subject  
        }
        finalResult.push(result)
    });
    return finalResult

    if(student){
        const teacher=teachers.forEach(teacher=>student.teacher_id===teacher.teacher_id)
        const result=teacher?{
            studentName : student.name,
            roll_no : student.roll_no,
            teacher_id : student.teacher_id,
            subject : teacher.subject,
            teacher_name : teacher.name
        }:''
        return teacher? result : 'No recoord found'
    }
    return 'No record found '
}
console.log(getTeachersByClass(1))