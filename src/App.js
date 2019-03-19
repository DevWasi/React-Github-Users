import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import List from '@material-ui/core/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      realName: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      url: '',
      type: '',
      following: '',
      public_gists: ''
    };
  }

  handleSubmit = () => {
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          username: data.login,
          realName: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          public_gists: data.public_gists,
          followers: data.followers,
          following: data.following,
          url: data.html_url,
          type: data.type
       })
      });
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSubmit()
    }
  };

  render() {
    return (
      <div>
        <NavBar />
        <TextField
          id="standard-search"
          label="Enter User"
          type="search"
          value={this.state.username}
          onChange={e => this.setState({
            username: e.target.value
          })}
          onKeyPress={this.handleKeyPress}
        />
        <Card className="card">
          <img
            src={this.state.avatar}
            alt="I'm Avatar"
          />
          <dl>
            <dt>Name</dt>
            <dd>{this.state.realName}</dd>

            <dt>Location</dt>
            <dd>{this.state.location}</dd>

            <dt>Number Of Public Repos</dt>
            <dd>{this.state.repos}</dd>

            <dt>Number Of Public Gists</dt>
            <dd>{this.state.public_gists}</dd>

            <dt>Number Of Followers</dt>
            <dd>{this.state.followers}</dd>

            <dt>Number Of Followings</dt>
            <dd>{this.state.following}</dd>

            <dt>Type</dt>
            <dd>{this.state.type}</dd>
          </dl>
        </Card>
      </div>
    );
  }
}

export default App;
