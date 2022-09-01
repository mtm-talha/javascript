fetch ('http://universities.hipolabs.com/search?country=United+States').then(
  response=>{
    response.json().then(
      data=>{
        // console.log(data);
        if (data.length>0){
          let temp = "";
          data.forEach((u) => {
            temp +="<tr>";
            temp +="<td>"+u.name+"</td>";
            temp +="<td>"+u.web_pages+"</td>";
            temp +="<td>"+u.domains+"</td>";
            temp +="<td>"+u.alpha_two_code+"</td>";
            temp +="<td>"+u.country +"</td></tr>";
          });
          document.getElementById("data").innerHTML=temp;
        }
      }
    )
  }) 

  const searchFun = () =>{
    let filter = document.getElementById('myInput').value.toUpperCase();

    let myTable = document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');
    for (let i=0; i<tr.length; i++){
      let td = tr[i].getElementsByTagName('td')[0];
      if (td){
        let textValue = td.textContent || td.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1){
          tr[i].style.display="";
        }else{
          tr[i].style.display = "none";
        }
      }
    }
  }