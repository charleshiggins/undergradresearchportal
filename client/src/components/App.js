import React from 'react';
import { Header } from './Header.js';
import { Unauth } from './UnAuth.js'
export class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Unauth />
                <div>test test test</div>
            </div>
        );
    }
}
