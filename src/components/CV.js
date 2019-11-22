import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
            <h2>Pascu Ioan Mihai</h2>
            <hr style={{ borderTop: "3px solid #999" }} />
            <div style={{ }}>
            <img
              src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/10590540_927793460635444_215442198012440107_n.jpg?_nc_cat=107&_nc_oc=AQnHdIApLf7OR5-3InPaYJSEoUIkaN_MlFxYmsFpWNSR_luH-az0UPFEdHBBvBxfy3w&_nc_ht=scontent-otp1-1.xx&oh=880fb49f3b127d72ad3f0a6cea184ce7&oe=5E63399D"
              alt="avatar"
              style={{ height: "250px", border: '1px solid black' }}
            />
            </div>
            <h3>Skills</h3>
            <div style={{margin: '10px'}}>
            <Skills skill="HTML   / CSS" progress={80} />
            <Skills skill="Java Script" progress={60} />
            <Skills skill="React.js" progress={55} />
            <Skills skill="npm / git" progress={60} />
            </div>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear="2012"
              endYear="2016"
              schoolName="Technical University of Cluj-Napoca, Section Construction"
              schoolDescription="
              Land Surveyor Engineer"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Volunteer work at 'Targul de cariere' Cluj Napoca"
              jobDescription="Promote, provide information, logistic and reception for involved companies"
            />

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Worked in The Netherlands in different work fields (construction, painting, etc)"
              jobDescription=""
            />

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Currently working as a Personal Trainer at Cluj Arena"
              jobDescription="Helping people achive their goals and improving their well being"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
