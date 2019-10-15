"use strict";

export default async function submitRow(){
    const response = await fetch('http://localhost:8080/submit');
    console.log(response);

}

