const selectedRow = null

function submitForm()
{ 
    if(validDate())
    {
        const formData = readFormData();
        if (selectedRow == null)
        insertNewData(formData);
        else
        updateRecord(formData)
        resetForm();
   }
}

function readFormData()
{
    const formData = {};
    formData["name"]=document.getElementById("name").value;
    formData["class"]=document.getElementById("class").value;
    formData["rollNo."]=document.getElementById("rollNo.").value;
    formData["age"]=document.getElementById("age").value;
    formData["teacherID"]=document.getElementById("teacherID").value;
    return formData;
}

function insertNewData(data){
    const table = document.getElementById("Student List").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.length);
    cell1= newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2= newRow.insertCell(0);
    cell2.innerHTML = data.class;
    cell3= newRow.insertCell(0);
    cell3.innerHTML = data.rollNo.;
    cell4= newRow.insertCell(0);
    cell4.innerHTML = data.age;
    cell5= newRow.insertCell(0);
    cell5.innerHTML = data.teacherID;
    cell5.innerHTML = `<a onClick = "onEdit(this)">Edit</a>
                        <a onClick = "onDelete(this)">Delete</a>`;
}

function resetForm(){
    document.getElementById("Name").value = "";
    document.getElementById("Class").value = "";
    document.getElementById("Roll No.").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Teacher ID").value = "";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML; 
    document.getElementById("Class").value = selectedRow.cells[1].innerHTML; 
    document.getElementById("Roll No.").value = selectedRow.cells[2].innerHTML; 
    document.getElementById("Age").value = selectedRow.cells[3].innerHTML; 
    document.getElementById("Teacher ID").value = selectedRow.cells[4].innerHTML; 
}

function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.class;
    selectedRow.cells[2].innerHTML = formData.rollNo;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.teacherID;
}

function onDelete(td){
    if(confirm('Are you sure to delete this record?')){
    row = td.parentElement.parentElement;
    document.getElementById("Name").deleteRow(row.rowIndex);
    resetForm();
    }
}

function validDate(){
    isValid = true;
    if (document.getElementById("name").value==""){
        isValid = false;
        document.getElementById("NameValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("NameValidationError").classList.contains("hide"));
            document.getElementById("NameValidationError").classList.add("hide");
    }
    return isValid;
}
