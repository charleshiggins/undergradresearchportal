
import React from 'react';
import { Header } from './Header.js';
import { submitApplication } from '../api.js'
export class Unauth extends React.Component {
    state = {
        view = 1,
        fname= "",
        mname= "",
        lname= "",
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
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card" style="height: 100%; overflow: scroll;">
                            <div class="card-body">
                            <form class="form" role="form" autocomplete="on">
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label" for="projTitle">Project Title</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="projTitle" placeholder="" />
                                </div>
                            </div>

                            </form>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="col-sm-2 float-right pr-0 py-5">
                        <a style="width: 75%;" class="btn btn-primary btn-sm align-self-center float-right" onclick="nextPage()"
                            role="button" target="_blank">Continue</a>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}