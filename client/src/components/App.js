import React from 'react';
import { Header } from './Header.js';
import { Unauth } from './UnAuth.js'
import '../assets/css.css';
import { getUserType } from '../api.js'
import { Student } from './Student.js'

export class App extends React.Component {
    userType(onyen) {
        return getUserType(onyen)
    };

    render() {

        // const onyen = this.props.;
        const onyen = 'reesb';
        return (
            <div>
                <Header view={this.userType(onyen)} />
                <Student/>
            </div>
        );
    }
}
