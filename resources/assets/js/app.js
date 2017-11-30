
/**
 * zHSdb9GD28wVQ8BxmsxV
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

// require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/Example');

// app.js

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Master from './components/Master';
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';

// render(<Master />, document.getElementById('example'));

// buat router untuk me-render component
render (
    <Router history={browserHistory}>
        <Route path='/' component={Master}>
            <Route path='/add-item' component={CreateItem} />
            <Route path='/display-item' component={DisplayItem} />
        </Route>
    </Router>, 
    document.getElementById('example'));
