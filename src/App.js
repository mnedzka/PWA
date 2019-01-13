import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Sidebar from './Sidebar'
import PostList from './PostList'
import PostFavList from './PostFavList'
import './App.css';

class App extends Component {
  state = {
    internetOnline: false
  }

  componentDidMount() {
    if (navigator.onLine) {
      this.setState({
        internetOnline: true
      })
    }

    window.addEventListener("online", () => {
      this.setState({
        internetOnline: true
      })
    })

    window.addEventListener("offline", () => {
      this.setState({
        internetOnline: false
      })
    })

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js").then(() => {
        console.log("zarejstrowany")
      }).catch(() => {
        console.log("błąd")
      })
    }
  }


  render() {
    return (
      <div className="App">
        <div id="warnings">
          {(!this.state.internetOnline) ? (
            <div id={"internet_warning"}>
              You haven't got connection
                  </div>
          ) : ("")}
        </div>
        <BrowserRouter >
          <div>
            <Sidebar>

            </Sidebar>
            <Switch>
              <Route exact path="/" component={PostList} />
              <Route exact path="/favourite" component={PostFavList} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
