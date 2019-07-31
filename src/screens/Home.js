import React from "react";
import { Header, Container, Image, Grid } from "semantic-ui-react";

const HomeScreen = () => (
  <React.Fragment>
    <Grid>
      <Grid.Row>
        <Header className="homeTitle" as="h1" content="Carlos Cruz Ramos" />
        <Image
          className="headshot"
          src="https://via.placeholder.com/150"
          size="small"
          circular
        />
      </Grid.Row>
      <Grid.Row>
        <Header sub content="Currently in: Austin, TX area" />
      </Grid.Row>
      <Grid.Row>
        <Container className="homeIntro" text>
          <p>
            I am a somewhat recent graduate from the University of Texas at
            Austin (graduated August, 2018) with a degree in Economics but a
            major passion in all things programming and computers. I'm a
            dependable and result-driven programmer with web development and
            Android experience that is currently a part in the Wallbreakers
            program as a Software Engineer trainee and i'm looking to get a
            start in that career.
          </p>
        </Container>
      </Grid.Row>
      <Grid.Row>
        <Container text>
          <Header size="medium" content="A Story About Me" />
          <p>
            Born in San Salvador, El Salvador and brough to the USA at a young
            age, I have felt that most of my life has always been about adapting
            to changes. By the time I was halfway through high school, I started
            to become interested in programming (and thanks to some courses
            offered there) I knew that doing anything that involved with
            programming would be my calling. So after 5 years of going to
            university, a few part-times, and countless personal learning and
            work hours, my interest has become a passion and I wish to take it
            even further and further by anyway possible.
          </p>
        </Container>
      </Grid.Row>
    </Grid>
  </React.Fragment>
);

export default HomeScreen;
