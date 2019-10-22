import React from 'react';
import { Header } from './Header.js';
import { Unauth } from './UnAuth.js'
import '../assets/css.css';
import { getUserType } from '../api.js'

export class App extends React.Component {
    userType(onyen) {
        getUserType(onyen)
    };

    render() {
        return (
            <div>
                <Header view={this.userType(onyen)} />
            </div>
        );
    }
}
