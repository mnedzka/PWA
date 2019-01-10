import React, { Component } from 'react';
import { BrowserRouter, Route,  Switch } from 'react-router-dom'
import Sidebar from './Sidebar'
import PostList from './PostList'
import PostFavList from './PostFavList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter >
          <div>
            <Sidebar>

            </Sidebar>
            <Switch>
              <Route exact path="/" component={PostList}/>
              <Route exact path="/favourite" component={PostFavList}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
