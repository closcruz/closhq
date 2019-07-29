import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Grid, Menu } from "semantic-ui-react";
import HomeScreen from "./Home";

class Root extends Component {
  state = { active: "aboutMe" };

  handleMenuClick = (e, { name }) => this.setState({ active: name });

  render() {
    return (
      <Grid className="app">
        <BrowserRouter>
          <Grid.Column width={3}>
            <Menu fluid vertical tabular style={{ height: "98vh" }}>
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
              <Menu.Item
                as={Link}
                to="/projects"
                name="projects"
                active={this.state.active === "projects"}
                onClick={this.handleMenuClick}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column width={10}>
            <Switch>
              <Route exact component={HomeScreen} />
              {/* <Route component={}/>
                <Route component={}/> */}
            </Switch>
          </Grid.Column>
        </BrowserRouter>
      </Grid>
    );
  }
}

export default Root;
