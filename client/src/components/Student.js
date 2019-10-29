
import React from 'react';
import { Header } from './Header.js';
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
            submitApplication(applicationObject);
    }

    goNextPage() {
        this.setState({ view: 2 })
    }
    goPrevPage() {
        this.setState({ view: 1 })
    }
    render() {
        if (this.state.view === 1) {
            return (
                <div className="container">
                    <div className="row">

                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">Contact Information</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form" role="form" autoComplete="on">
                                        <div className="form-group row">
                                            <label className="col-lg-5 col-form-label form-control-label">First name</label>
                                            <div className="col-lg-7">
                                                <input required className="form-control" type="text" placeholder="e.g John" value = {this.state.fname} name='fname' onChange={ (e) => this.handleTextInputChange(e) }/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-5 col-form-label form-control-label">Middle initial</label>
                                            <div className="col-lg-7">
                                                <input required className="form-control" type="text" placeholder="e.g T." value = {this.state.mname} name='mname' onChange={ (e) => this.handleTextInputChange(e) }/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-5 col-form-label form-control-label">Last name</label>
                                            <div className="col-lg-7">
                                                <input required className="form-control" type="text" placeholder="e.g Smith" value = {this.state.lname} name='lname' onChange={ (e) => this.handleTextInputChange(e) }/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-5 col-form-label form-control-label">PID</label>
                                            <div className="col-lg-7">
                                                <input required className="form-control" type="text" placeholder="123456789" name='pid' value = {this.state.pid} onChange={ (e) => this.handleTextInputChange(e) }/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-5 col-form-label form-control-label">Email</label>
                                            <div className="col-lg-7">
                                                <input required className="form-control" type="text"
                                                    placeholder="example@unc.edu" name='email' value = {this.state.email} onChange={ (e) => this.handleTextInputChange(e) }/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <h5 className="card-header">Supporting Documents</h5>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group row">
                                            <label className="col-lg-4 col-form-label form-control-label">Proposal</label>
                                            <a className="btn btn-primary btn-sm align-self-center col-lg-4 mx-auto" href="#"
                                                role="button" target="_blank">View</a>
                                        </div>
                                        <div className="form-group row">
                                            <label
                                                className="col-lg-4 col-form-label form-control-label">Official Transcript</label>
                                            <a className="btn btn-primary btn-sm align-self-center col-lg-4 mx-auto" href="#"
                                                role="button" target="_blank">View</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div id="file-names">
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <h5 className="card-header">Faculty Advisor</h5>
                                <div className="card-body">
                                    <form className="form" role="form" autoComplete="on">
                                        <div className="form-group row">
                                            <label className="col-lg-5 col-form-label form-control-label">Full Name</label>
                                            <div className="col-lg-7">
                                                <input required className="form-control" type="text"
                                                    placeholder="e.g John Smith" name = "facFullName" value = {this.state.facFullName} onChange={ (e) => this.handleTextInputChange(e) }/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-5 col-form-label form-control-label">Email</label>
                                            <div className="col-lg-7">
                                                <input required className="form-control" type="text"
                                                    placeholder="example@unc.edu" name = "facEmail" value = {this.state.facEmail} onChange={ (e) => this.handleTextInputChange(e) }/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-5 form-control-label">Academic Department</label>
                                            <div className="col-lg-7">
                                                <input required className="form-control" type="text" placeholder="e.g Biology" value = {this.state.facAcademicDepartment} name = "facAcademicDepartment" onChange={ (e) => this.handleTextInputChange(e) }/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="col-sm-2 float-right pr-0 py-5">
                            <a className="btn btn-primary btn-sm align-self-center float-right"
                                role="button" target="_blank" onClick={() => this.goNextPage()}>Continue</a>
                        </div>
                    </div>
                </div>)
        }
        else if (this.state.view === 2) {
            return (<div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card" style={{ height: '100%', overflow: scroll }}>
                                <div className="card-body">
                                    <form className="form" role="form" autoComplete="on">
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" htmlFor="projTitle">Project Title</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control"  placeholder="" value = {this.state.projectTitle} name = "projectTitle" onChange={ (e) => this.handleTextInputChange(e) }/>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <label>Does your project include international travel?</label>
                                            <div className="row question-row">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="q1" id="yesResp1"
                                                        value="yes" />
                                                    <label className="form-check-label" htmlFor="yesResp1">Yes</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="q1" id="noResp1" value="no" />
                                                    <label className="form-check-label" htmlFor="noResp1">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Does your project include community-based research?</label>
                                            <div className="row question-row">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="q2" id="yesResp2"
                                                        value="yes" />
                                                    <label className="form-check-label" htmlFor="yesResp2">Yes</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="q2" id="noResp2" value="no" />
                                                    <label className="form-check-label" htmlFor="noResp2">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Does your research involve work in LGBTQ studies?</label>
                                            <div className="row question-row">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="q3" id="yesResp3"
                                                        value="yes" />
                                                    <label className="form-check-label" htmlFor="yesResp3">Yes</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="q3" id="noResp3" value="no" />
                                                    <label className="form-check-label" htmlFor="noResp3">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Are you in the Burch Program?</label>
                                            <div className="row question-row">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="q4" id="yesResp4"
                                                        value="yes" />
                                                    <label className="form-check-label" htmlFor="yesResp4">Yes</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="q4" id="noResp4" value="no" />
                                                    <label className="form-check-label" htmlFor="noResp4">No</label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm-2 float-left pl-0 py-5">
                            <a id="back" className="btn btn-primary btn-sm align-self-center float-left"
                                onClick={() => this.goPrevPage()}>Back</a>
                        </div>

                        <div className="col-sm-2 float-right pr-0 py-5">
                            <a className="btn btn-primary btn-sm align-self-center float-right"
                                role="button" target="_blank" onClick={() => this.submit()}>Submit</a>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
}