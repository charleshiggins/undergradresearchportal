import React from 'react';

export class Header extends React.Component {


    render() {
        return (<div id="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-3">
                        <img id="header-logo" src={require('./header-img.png')} />
                    </div>
                    <div id="header-title" className="col-sm-6 text-center">
                        Summer Undergraduate Research Application
                </div>
                    <div className="col-sm-3">
                        <div id="header-login" className="card card-body bg-light text-center">
                            <p id="header-login-text">You are logged in as:<br /><b>reesb</b></p>
                            <a className="btn btn-primary btn-sm align-self-center" href="#" role="button"
                                target="_blank">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarNav">
                    {this.props.userType == "student" &&
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" id="home" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">View Application</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://our.unc.edu/surf">SURF</a>
                            </li>
                        </ul>
                    }
                    {this.props.userType == "faculty" &&
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" id="home" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://our.unc.edu/surf">SURF</a>
                            </li>
                        </ul>
                    }
                    {this.props.userType == "admin" &&
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" id="home" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Assign Reviewers</a>
                            </li>
                        </ul>
                    }
                    {this.props.userType == "reviewer" &&
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" id="home" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://our.unc.edu/surf">SURF</a>
                            </li>
                        </ul>
                    }
                </div>
            </nav>
        </div>
        );
    }
}