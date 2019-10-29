
import React from 'react';
import { Header } from './Header.js';
import { submitApplication } from '../api.js'
export class Student extends React.Component {
    state = {
        view: 1,
        fname: "",
        mname: "",
        lname: "",
    }

    handleTextInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    submit() {
        submitApplication("test");
    }

    render() {
        return (<div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card" style="height: 100%; overflow: scroll;">
                            <div className="card-body">
                            <form className="form" role="form" autocomplete="on">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="projTitle">Project Title</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="projTitle" placeholder="" />
                                </div>
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Does your project include international travel?</label>
                                <div className="row question-row">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="q1" id="yesResp1"
                                            value="yes" />
                                        <label className="form-check-label" for="yesResp1">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="q1" id="noResp1" value="no" />
                                        <label cclassNamelass="form-check-label" for="noResp1">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Does your project include community-based research?</label>
                                <div className="row question-row">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="q2" id="yesResp2"
                                            value="yes" />
                                        <label className="form-check-label" for="yesResp2">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="q2" id="noResp2" value="no" />
                                        <label className="form-check-label" for="noResp2">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Does your research involve work in LGBTQ studies?</label>
                                <div className="row question-row">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="q3" id="yesResp3"
                                            value="yes" />
                                        <label className="form-check-label" for="yesResp3">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="q3" id="noResp3" value="no" />
                                        <label className="form-check-label" for="noResp3">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Are you in the Burch Program?</label>
                                <div className="row question-row">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="q4" id="yesResp4"
                                            value="yes" />
                                        <label className="form-check-label" for="yesResp4">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="q4" id="noResp4" value="no" />
                                        <label className="form-check-label" for="noResp4">No</label>
                                    </div>
                                </div>
                            </div>
                            </form>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col-sm-2 float-right pr-0 py-5">
                        <a style="width: 75%;" className="btn btn-primary btn-sm align-self-center float-right" onclick="nextPage()"
                            role="button" target="_blank">Continue</a>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}