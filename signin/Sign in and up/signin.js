const submit_button = document.querySelector(".button");
submit_button.onclick = () => {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    
    localStorage.setItem('FirstName',fname);
    localStorage.setItem('LastNAme',lname);
    localStorage.setItem('Contact',contact);
    localStorage.setItem('Email',email);
    localStorage.setItem('Password',pass);
    localStorage.setItem('CPassword',cpass);


    // console.log(fname);
    // alert(fname + lname + contact + email + pass + cpass);

   // swal("Done", "Registration successful.", "success");

    if(fname == "" && lname == "" && contact == "" && email == "" && pass == "" && cpass == "")
    {
        alert("Input field has no value.")
    }
    else
    {
        if(pass !== cpass)
        {
            swal("Oopsss..!", "Password does not matching.", "error");        }
        else
        {
            swal("Done", "Registration successful.", "success");        }
    }

}

const login = document.querySelector('.login');
login.onClick = (e) => {
    e.preventDefault();
    
    const emailaddress = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    const email = localStorage.getItem("email");
    const passw = localStorage.getItem("Password");

    if(email=="")
    {
        swal("Wrong", "You have not entered any value", "warning")
    }
    else{
        if(email == emailaddress && passw == password ){
            swal("Done", "You have logged in successfully.", "success");

        }
    }


}