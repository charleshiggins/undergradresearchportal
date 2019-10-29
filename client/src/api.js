"use strict";

export async function submitRow() {
    const response = await fetch('http://localhost:8080/submit');
    console.log(response);
}

export async function submitApplication(applicationObject) {
    const response = await fetch('http://localhost:8080/submitApplication', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(applicationObject)
    });
    console.log(response);
}

export async function getUserType(onyen) {
    const response = await fetch('http://localhost:8080?onyen=' + onyen);
    console.log(response);
    return response.json().userType;
}