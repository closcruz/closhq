import React from "react";
import { Header, Container, Image, Grid } from "semantic-ui-react";
import headshot from "../assets/headshot.jpg";

const HomeScreen = () => (
  <Container>
    <Grid>
      <Grid.Row>
        <Header className="homeTitle" as="h1" content="Carlos Cruz Ramos" />
        <Image className="headshot" src={headshot} size="small" circular />
      </Grid.Row>
      <Grid.Row>
        <Header sub content="Currently in: Austin, TX area" />
      </Grid.Row>
      <Grid.Row>
        <p>
          I am a somewhat recent graduate from the University of Texas at Austin
          (graduated August, 2018) with a degree in Economics but a major
          passion in all things programming and computers. I'm a dependable and
          result-driven programmer with web development and Android experience
          that is currently a part in the Wallbreakers program as a Software
          Engineer trainee and i'm looking to get a start in that career.
        </p>
      </Grid.Row>
      <Grid.Row>
        <Header size="medium" content="A Story About Me" />
        <p>
          I have always felt that most of my life has always been about adapting
          to changes. Even in my younger years change came frequently, through
          life changing events and constant moving around, and through all those
          events I came to be familiar and accepting of change. By the time I
          was halfway through high school, I started to become interested in
          programming (and thanks to some courses offered there) I knew that
          doing anything that involved with programming would be my calling. I
          was always drawn to tech and noticing how fast it changes and allowed
          me to recognize how it important it would be in life in the coming
          future. So after 5 years of going to university, a few part-times, and
          countless personal learning and work hours, my interest has become a
          passion and I wish to take it even further and further anyway
          possible.
        </p>
      </Grid.Row>
    </Grid>
  </Container>
);

export default HomeScreen;
