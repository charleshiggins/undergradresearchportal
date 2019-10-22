async function submitApp() {
    console.log("we're here");
    let applicationObject = {
        Application: {
            "fname": document.getElementById('fname').value,
            "mname": document.getElementById('mname').value,
            "lname": document.getElementById('lname').value,
            "pid": document.getElementById('pid').value,
            "email": document.getElementById('email').value,
            "Faculty": {
                "fullname": document.getElementById('facultyName').value,
                "email": document.getElementById('facultyEmail').value,
                "academicDepartment": document.getElementById('facultyDepartment').value
            }
        }
    
    }
    console.log(applicationObject)
    submitApplication(applicationObject).then(() => {
        location.replace("student_view_3.html")
      });

}

async function submitApplication(applicationObject){
    const response = await fetch('http://localhost:8080/submitApplication', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: 'post',
        body: JSON.stringify(applicationObject)});
        console.log(response);

}
