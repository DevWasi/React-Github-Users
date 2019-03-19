import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
// import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'outcast',
      realName: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      url: '',
      notFound: ''
    };
  }
  getUser(username) {
    let url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          username: data.login,
        })
      });
  }
  componentDidMount() {
    this.getUser(this.state.username);
  }

  async handleSubmit(e) {
    e.preventDefault();
    let user = await this.getUser(this.refs.usernmae.value);
    this.setState({ username: user.login });
  }
  render() {
    return (
      <div>
        <NavBar />
        <form onSubmit={e => this.handleSubmit(e)}>
          <TextField
            ref="username"
            className="TextField"
            type="search"
          />
        </form>
      </div>
    );
  }
}

export default App;
