import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

export class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Pascu Ioan Mihai</h2>
            <img
              src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/10590540_927793460635444_215442198012440107_n.jpg?_nc_cat=107&_nc_oc=AQnHdIApLf7OR5-3InPaYJSEoUIkaN_MlFxYmsFpWNSR_luH-az0UPFEdHBBvBxfy3w&_nc_ht=scontent-otp1-1.xx&oh=880fb49f3b127d72ad3f0a6cea184ce7&oe=5E63399D"
              alt="avatar"
              style={{ height: "250px" }}
            />
          </Cell>
          <Cell col={6}>
            <p
              style={{
                width: "100%",
                margin: "auto",
                paddingTop: "1em",
                lineHeight: "2em",
                textAlign: "left"
              }}
            >
              Hello, my name is Pascu Mihai and I'm a Personal trainer and a
              photographer based in Cluj Napoca, future Full Stack Web Developer
              specialized in the MERN stack. Currently spending the bulk of my
              time learning the Front-End technologies: HTML5, CSS3, Java Script
              and React, slowly transition into Next.js framework for React, but
              I'm always excited to learn new technologies. I'm ambitious,
              passionate and motivated person, I can say I'm an autodidact
              person who likes to focus on his personal growth and always
              improving his skills. I'm looking for a team that allows me to
              perpetually get outside my comfort zone, and focus on improving my
              craft.
            </p>
          </Cell>
          <Cell col={10}>
            <h3>Contact Me</h3>
            <hr />
            <div className="contact-list">
              <List col={5}>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "times" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +31.611.400.396
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    Str. Cardinal Iuliu Hossu, nr 85, Cluj
                  </ListItemContent>
                </ListItem>
              </List>
              <List col={5}>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    pascu.ioanmihai@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    cooola93
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
