import React from "react";
import { Grid, Header, Container, Segment, List } from "semantic-ui-react";

const ResumeScreen = () => (
  <Container>
    <Header as="h1" className="homeTitle" content="Profesional About Me" />
    <Header
      className="skillset-header"
      textAlign="center"
      size="huge"
      attached="top"
      content="Skillset"
    />
    <Segment attached raised>
      <Grid
        className="skills"
        textAlign="center"
        celled="internally"
        columns={3}
        doubling
      >
        <Grid.Row>
          <Grid.Column>
            <Header size="medium" content="JavaScript" />
          </Grid.Column>
          <Grid.Column>
            <Header size="medium" content="Python" />
          </Grid.Column>
          <Grid.Column>
            <Header size="medium" content="Java" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header size="medium" content="ReactJS" />
          </Grid.Column>
          <Grid.Column>
            <Header size="medium" content="ExpressJS" />
          </Grid.Column>
          <Grid.Column>
            <Header size="medium" content="NodeJS" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header size="medium" content="HTML/CSS" />
          </Grid.Column>
          <Grid.Column>
            <Header size="medium" content="Windows/Linux" />
          </Grid.Column>
          <Grid.Column>
            <Header size="medium" content="Android" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Header size="huge" content="Education" dividing />
    <Container>
      <List>
        <List.Item>
          <List.Header
            as="a"
            className="resume-header"
            href="https://wallbreakers.com/"
            content="Wallbreakers"
          />
          <List.Header as={Header.Subheader} content="06/19 - Present" />
          <p className="resume-desc">
            Wallbreakers is a great program that trains pre-qualified students
            or recent graduates and connects them to their partnering companies
            to land them jobs with them. They still go a step above to help
            their students land a software engineering job.{" "}
            <b>
              As such, their training program focuses on the fundamentals of
              coding, different programming methods, and data structures.
            </b>
          </p>
        </List.Item>
        <List.Item>
          <List.Header
            as="a"
            className="resume-header"
            href="https://www.utexas.edu/"
            content="University of Texas at Austin"
          />
          <List.Header as={Header.Subheader} content="09/14 - 08/18" />
          <p className="resume-desc">
            Graduating with a <b>B.A in Economics</b> and a <b>Minor in CS</b>,
            my interests led me to the more analytical side of economics with
            classes on statistics, probability, and econometrics. Along with
            classes of different subsets of economics studies, such as
            behavioral and financial economics, my major offered me a well
            rounded background on the subject. Due to my growing interest in
            computer science and the requirement of having a minor to graduate
            from the school, taking classes offered by the School of CS made
            sense and, along with the learning the fundamentals, allowed me to
            explore different subjects, such as data science, databases, and web
            development.
          </p>
        </List.Item>
      </List>
    </Container>
    <Header size="huge" content="Experience" dividing />
    <Container>
      <List>
        <List.Item>
          <List.Header
            as="a"
            className="resume-header"
            href="https://github.com/closcruz/casa"
            content="CASA"
          />
          <List.Header as={Header.Subheader} content="05/2019 - Present" />
          <p className="resume-desc">
            I am currently in the process of making a home site for a budding
            organization at the University of Texas at Austin. The main purpose
            of the site is to contain all information pertaining to the
            organization, what it does, who its members are, events it hosts and
            organizes, and act as a vehicle to get the word out of this
            organizations existence.
          </p>
          <b>Tech Used: JS/HTML/CSS, NodeJS, ReactJS, Firebase</b>
        </List.Item>
        <List.Item>
          <List.Header
            as="a"
            className="resume-header"
            href="https://www.regexpo.com/"
            content="Looking Cube LLC"
          />
          <List.Header as={Header.Subheader} content="01/2019 - Present" />
          <p className="resume-desc">
            Looking Cube offers event registration services that can fit the
            needs of events of any size. Based in Houston, TX, they were looking
            to offer an alternative to their scanners and as such, the idea of
            transfering that functionality unto smartphones came about. I worked
            on developing the Android application, which would act a QR scanner
            that only read certain encrypted codes that helped facilitate the
            gathering of contact informations between attendees of these events.
          </p>
          <b>Tech Used: Java, Android</b>
        </List.Item>
      </List>
    </Container>
  </Container>
);

export default ResumeScreen;
