import React from 'react';
import ReactDOM from 'react-dom';
import './Signin.css';
import {BrowserRouter, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import Signup from './Signup'
import Signin from './Signin'
import AddPost from './AddPost'
import ShowPost from './ShowPost'

import { Switch, Route} from "react-router";


const Header = () => (
  <header>
    <nav>
      <ul>
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/signin'>Sign In</Link></button>
        <button><Link to='/signup'>Sign Up</Link></button>
        <button><Link to='/addpost'>Add Post</Link></button>
      </ul>
    </nav>
  </header>
)
const Main = () => (
  <main>
     <Switch>
       <Route exact path='/' component = {ShowPost}/>
       <Route path='/signin' component = {Signin}/>
       <Route path='/signup' component = {Signup}/>
       <Route path='/addpost' component = {AddPost}/>
     </Switch>
  </main>
)



const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

    ReactDOM.render(
          <BrowserRouter>
            <App/>
          </BrowserRouter>
    , document.getElementById('root'));
