import React from 'react';
import ReactDOM from 'react-dom';
import './Signin.css';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import Signup from './Signup'
import Signin from './Signin'
import AddPost from './AddPost'
import ShowPost from './ShowPost'

import { Switch, Route} from "react-router";


class App extends React.Component {
    render(){
    return(<ShowPost/>)
    }
    }

    ReactDOM.render(
          /*  <BrowserRouter>
                <Switch>
                    <Route exact path='/' component = {ShowPost}/>
                    <Route path='/signin' component = {Signin}/>
                    <Route path='/signup' component = {Signup}/>
                    <Route path='/addpost' component = {AddPost}/>
                </Switch>
            </BrowserRouter>*/ <App/>
    , document.getElementById('root'));
