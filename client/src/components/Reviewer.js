import React from 'react';
import { submitApplication } from '../api.js'
export class Student extends React.Component {
    state = {
        view: 1,
        projTitle: "",
        fname: "",
        mname: "",
        lname: "",
        pid: "",
        email: "",
        facFullName: "",
        facEmail: "",
        facAcademicDepartment: "",
        projectTitle: "",
    }

    handleTextInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state);
    }
    submit() {
        console.log(this.state);
        let applicationObject = {
            Application: {
                fname: this.state.fname,
                mname: this.state.mname,
                lname: this.state.lname,
                pid: this.state.pid,
                email: this.state.email,
                proposal: "to-do:path",
                transcript: "to-do:path",
                Faculty: {
                    fullname: this.state.facFullName,
                    email: this.state.facEmail,
                    academicDepartment: this.state.facAcademicDepartment
                }
            }

        }
        submitApplication(applicationObject)
        this.setState({ view: 3 })

    }

    goNextPage() {
        this.setState({ view: 2 })
    }
    goPrevPage() {
        this.setState({ view: 1 })
    }
    render() {
        return ();
    }
}