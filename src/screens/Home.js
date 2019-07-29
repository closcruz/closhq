import React from "react";
import { Header, Container } from "semantic-ui-react";

const HomeScreen = () => (
  <React.Fragment>
    <Container textAlign="center" text>
      <Header as="h1" content="My name is Carlos Cruz Ramos" />
      <p>
        I am a somewhat recent graduate from the University of Texas at Austin
        (graduated August, 2018) with a degree in Economics but a major passion
        in all things programming and computers. I'm a dependable and
        result-driven programmer with web development and Android experience
        that is currently a part in the Wallbreakers program as a Software
        Engineer trainee and i'm looking to get a start in that career.
      </p>
    </Container>
  </React.Fragment>
);

export default HomeScreen;
