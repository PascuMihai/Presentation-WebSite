import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

export class Projects extends Component {
  constructor() {
    super();

    this.state = {
      activeTab: 0
    };
  }

  toggleCategories = () => {
    // ------- First Category -------- 
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Card shadow={5} style={{ margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "150px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              HTML/CSS
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              esse ut inventore! Fuga suscipit dolore perferendis iure, ipsa
              perspiciatis.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );

      // ------- Second Category -------- 
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid-2">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                height: "150px",
                background:
                  "url(https://gocode.academy/wp-content/uploads/2018/06/javascript-logo.png) center / cover"
              }}
            >              
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              esse ut inventore! Fuga suscipit dolore perferendis iure, ipsa
              perspiciatis.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ margin: "auto" }}>
            <CardTitle
              style={{
                height: "150px",
                background:
                  "url(https://gocode.academy/wp-content/uploads/2018/06/javascript-logo.png) center / cover"
              }}
            >
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              esse ut inventore! Fuga suscipit dolore perferendis iure, ipsa
              perspiciatis.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ margin: "auto" }}>
            <CardTitle
              style={{
                height: "150px",
                background:
                  "url(https://gocode.academy/wp-content/uploads/2018/06/javascript-logo.png) center / cover"
              }}
            >
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              esse ut inventore! Fuga suscipit dolore perferendis iure, ipsa
              perspiciatis.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>      
  
        </div>
      );
              // ------- Third Category -------- 
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid-1">
          <Card shadow={5} style={{ margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "150px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              React #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              esse ut inventore! Fuga suscipit dolore perferendis iure, ipsa
              perspiciatis.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "150px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              React Projects #2
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              esse ut inventore! Fuga suscipit dolore perferendis iure, ipsa
              perspiciatis.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/Css</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
