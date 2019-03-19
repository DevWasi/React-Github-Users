import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

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
      notFound: ''
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
          followers: data.followers,
          url: data.html_url,
          notFound: data.message
       })
      });
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSubmit()
      e.preventDefault();
    }
  };

  render() {
    return (
      <div>
        <NavBar />
        <TextField
          id="standard-search"
          label="Search user"
          type="search"
          margin="normal"
          value={this.state.username}
          onChange={e => this.setState({
            username: e.target.value
          })}
          onKeyPress={this.handleKeyPress}
        />
        <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        >

        </Grid>
      </div>
    );
  }
}

export default App;
