"use strict";

export async function submitRow(){
    const response = await fetch('http://localhost:8080/submit');
    console.log(response);

}

export async function submitApplication(applicationJSON){
    const dummyobj = {
        Application: {
            "fname": "Charles",
            "mname": "M",
            "lname": "Higgins",
            "pid": "123456789",
            "email": "charles7@live.unc.edu",
            "Faculty": {
                "fullname": "John Doe",
                "email": "example@unc.edu",
                "academicDepartment": "Computer Science"
            }
        }
    }
    const response = await fetch('http://localhost:8080/submitApplication', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: 'post',
        body: JSON.stringify(dummyobj)});
        console.log(response);

}
