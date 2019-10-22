import React from 'react';
import { Header } from './Header.js';
import { Unauth } from './UnAuth.js'
import '../assets/css.css';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}
