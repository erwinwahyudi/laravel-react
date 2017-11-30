// master.js untuk navigasi menu
import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

class Master extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">LaravelReact</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Home</Link> </li>
                            <li> <Link to="/add-item">Create Item</Link> </li>
                            <li> <Link to="/display-item">Display Item</Link> </li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Master;