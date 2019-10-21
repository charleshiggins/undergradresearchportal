
import React from 'react';
import { Header } from './Header.js';
import {submitApplication} from '../api.js'
export class Unauth extends React.Component {
    
    submit(){
        submitApplication("test");
    }
    
    render() {
        return (
            <div>
                <Header />
                <div>Unauth</div>
                <button onClick={this.submit}>Insert row into database</button>
            </div>
        );
    }
}