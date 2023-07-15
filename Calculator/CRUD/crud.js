var selectedRow = null;
console.log('snadja');
let crud_form = document.getElementById('form');
if(crud_form){
crud_form.onsubmit = function(event){
    event.preventDefault();
    console.log('susnsau');
}
};


function onFormSubmit()
{
    debugger;
    console.log("On submit");
    // event.preventDefault();
    var formdata = readFormData();
    if(selectedRow === null)
    {
        alert("onsubmit function");
        insertNewRecord(formdata);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").ariaValueMax;
    formData["product"] = document.getElementById("product").ariaValueMax;
    formData["qty"] = document.getElementById("qty").ariaValueMax;
    formData["perPrice"] = document.getElementById("perPrice").ariaValueMax;
    return formData;
}

function insertNewRecord(data)
{
    var table = document.getElementById("storeList").getElementByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = '<button onClick = "onEdit(this)">Edit</button>  <button onClick = "onDelete(this)">Delete</button>';
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productCode').value = selectedRow.cells[o].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;

}

function onUpdate(formData){
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete the record
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the form data
function resetForm(){
    document.getElementById('productCode').value ='';
    document.getElementById('product').value ='';
    document.getElementById('qty').value ='';
    document.getElementById('perPrice').value ='';
}