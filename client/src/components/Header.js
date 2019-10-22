import React from 'react';

export class Header extends React.Component {


    render() {
        return (<div id="header">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-3">
                        <img id="header-logo" src={require('./header-img.png')} />
                    </div>
                    <div id="header-title" class="col-sm-6 text-center">
                        Summer Undergraduate Research Application
                </div>
                    <div class="col-sm-3">
                        <div id="header-login" class="card card-body bg-light text-center">
                            <p id="header-login-text">You are logged in as:<br /><b>reesb</b></p>
                            <a class="btn btn-primary btn-sm align-self-center" href="#" role="button"
                                target="_blank">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg">
                <div class="collapse navbar-collapse" id="navbarNav">
                    {this.props.userType == "student" &&
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" id="home" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">View Application</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://our.unc.edu/surf">SURF</a>
                            </li>
                        </ul>
                    }
                    {this.props.userType == "faculty" &&
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" id="home" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://our.unc.edu/surf">SURF</a>
                            </li>
                        </ul>
                    }
                    {this.props.userType == "admin" &&
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" id="home" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Assign Reviewers</a>
                            </li>
                        </ul>
                    }
                    {this.props.userType == "reviewer" &&
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" id="home" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://our.unc.edu/surf">SURF</a>
                            </li>
                        </ul>
                    }
                </div>
            </nav>
        </div>
        );
    }
}