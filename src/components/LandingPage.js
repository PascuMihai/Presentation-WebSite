import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export class LandingPage extends Component {
  render() {
    return (
      <div className="background-img">
        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <div className="banner-text">
                <h1>Front End Web Developer</h1>

                <hr />

                <p>HTML 5 - CSS 3 - Java Script - React.js</p>
                <div className="social-link">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  <a
                    href="https://github.com/PascuMihai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

                  <a
                    href="https://www.instagram.com/mihaipascu_/?hl=ro"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                  <a
                    href="https://www.facebook.com/mihai.pascu.14"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </div>
              </div>
              <footer className="footer">
                <p>Copyright &copy; 2019</p>
              </footer>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
