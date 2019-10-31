import React from 'react';
import { Header } from './Header.js';
import { Student } from './Student.js';
import { Admin } from './Admin.js';
import { Faculty } from './Faculty.js';
import { Reviewer } from './Reviewer.js';
import { Unauth } from './Unauth.js';
import '../assets/css.css';
import { getUserType } from '../api.js';

export class App extends React.Component {
    UserType(onyen) {
        return getUserType(onyen)
    };

    ReturnView(userType) {
        if (userType == "student") {
            return (
                <Student />
            );
        } else if (userType == "admin") {
            return (
                <Admin />
            );
        } else if (userType == "faculty") {
            return (
                <Faculty />
            );
        } else if (userType == "reviewer") {
            return (
                <Reviewer />
            );
        } else {
            return (
                <Unauth />
            );
        }
    }

    render() {

        // const onyen = this.props.;
        const onyen = "reesb";
        return (
            <div>
                <Header view={this.UserType(onyen)} />
                {this.ReturnView("student")}
            </div>
        );
    }
}
