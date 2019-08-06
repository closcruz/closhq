import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import {
  Menu,
  Icon,
  Sidebar,
  Segment,
  Button,
  Sticky
} from "semantic-ui-react";
import HomeScreen from "./Home";
import ResumeScreen from "./Resume";

class Root extends Component {
  state = { active: "aboutMe", visible: true };

  handleMenuClick = (e, { name }) => this.setState({ active: name });
  handleMenuViz = () => this.setState({ visible: !this.state.visible });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { active, visible } = this.state;

    return (
      <BrowserRouter>
        <Sidebar.Pushable className="main" as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            size="huge"
            vertical
            tabular
            visible={visible}
            onHide={this.handleSidebarHide}
          >
            <Menu.Item>
              <Menu.Header content="CCR" />
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/"
              name="aboutMe"
              active={active === "aboutMe"}
              onClick={this.handleMenuClick}
            />
            <Menu.Item
              as={Link}
              to="/resume"
              name="resume"
              active={active === "resume"}
              onClick={this.handleMenuClick}
            />
            <Menu.Item as="a" href="https://github.com/closcruz/">
              <Icon link size="large" name="github" />
            </Menu.Item>
            <Menu.Item as="a" href="https://www.linkedin.com/in/closcruzr95/">
              <Icon link size="large" name="linkedin" />
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Sticky>
              <Button
                className="menu-show"
                attached="left"
                floated="left"
                size="huge"
                icon
                onClick={this.handleMenuViz}
              >
                <Icon name="content" />
              </Button>
            </Sticky>
            <Segment basic>
              <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/resume" component={ResumeScreen} />
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </BrowserRouter>
      // <Grid className="app">
      //   <BrowserRouter>
      //     <Grid.Column width={3} textAlign="right" verticalAlign="middle">
      //       <Menu className="nav" size="huge" vertical tabular fixed="left">
      //         <Menu.Item>
      //           <Menu.Header className="nav-header" content="CCR" />
      //         </Menu.Item>
      //         <Menu.Item
      //           as={Link}
      //           to="/"
      //           name="aboutMe"
      //           active={this.state.active === "aboutMe"}
      //           onClick={this.handleMenuClick}
      //         />
      //         <Menu.Item
      //           as={Link}
      //           to="/resume"
      //           name="resume"
      //           active={this.state.active === "resume"}
      //           onClick={this.handleMenuClick}
      //         />
      //         <Menu.Item as="a" href="https://github.com/closcruz/">
      //           <Icon link size="large" name="github" />
      //         </Menu.Item>
      //         <Menu.Item as="a" href="https://www.linkedin.com/in/closcruzr95/">
      //           <Icon link size="large" name="linkedin" />
      //         </Menu.Item>
      //       </Menu>
      //     </Grid.Column>
      //     <Grid.Column className="content" verticalAlign="middle" width={10}>
      //       <Switch>
      //         <Route exact path="/" component={HomeScreen} />
      //         <Route path="/resume" component={ResumeScreen} />
      //       </Switch>
      //     </Grid.Column>
      //   </BrowserRouter>
      // </Grid>
    );
  }
}

export default Root;
