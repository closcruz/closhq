import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Grid, Menu } from "semantic-ui-react";
import HomeScreen from "./Home";
import ResumeScreen from "./Resume";

class Root extends Component {
  state = { active: "aboutMe" };

  handleMenuClick = (e, { name }) => this.setState({ active: name });

  render() {
    return (
      <Grid className="app">
        <BrowserRouter>
          <Grid.Column width={3} verticalAlign="middle">
            <Menu className="nav" size="huge" fluid vertical tabular>
              <Menu.Item
                as={Link}
                to="/"
                name="aboutMe"
                active={this.state.active === "aboutMe"}
                onClick={this.handleMenuClick}
              />
              <Menu.Item
                as={Link}
                to="/resume"
                name="resume"
                active={this.state.active === "resume"}
                onClick={this.handleMenuClick}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column className="content" verticalAlign="middle" width={10}>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route path="/resume" component={ResumeScreen} />
            </Switch>
          </Grid.Column>
        </BrowserRouter>
      </Grid>
    );
  }
}

export default Root;
