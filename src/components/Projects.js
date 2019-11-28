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
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "150px",
                padding: "2px",
                paddingLeft: "10px",
                background:
                  "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a98b0144-0003-4b13-98ce-e6d3eae7ea9c/d4x4y4f-b68cd563-600b-4bc0-bcf7-2931c4568c22.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5OGIwMTQ0LTAwMDMtNGIxMy05OGNlLWU2ZDNlYWU3ZWE5Y1wvZDR4NHk0Zi1iNjhjZDU2My02MDBiLTRiYzAtYmNmNy0yOTMxYzQ1NjhjMjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xQMIfmZp_cs2-I2e7AT27F3uMzSJx2phNYxcA18YcUA) center / cover"
              }}
            >
              Traveling Website
            </CardTitle>
            <CardText>
              This was my first project, made only with HTML and CSS.
            </CardText>
            <CardActions
              style={{ display: "flex", justifyContent: "center" }}
              border
            >
              <Button
                href="https://github.com/PascuMihai/Simple-website-HTML-CSS"
                colored
                target="_blank"
              >
                GitHub
              </Button>
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
                paddingLeft: "10px",
                padding: "2px",
                background:
                  "url(https://image.shutterstock.com/image-photo/image-260nw-1188713476.jpg) center / cover"
              }}
            >
              Guessing Number Game
            </CardTitle>
            <CardText>
              I've made this with some help from Youtube. The ideea is to guess the number with 3 tries or it's game over.
            </CardText>
            <CardActions
              style={{ display: "flex", justifyContent: "center" }}
              border
            >
              <Button
                href="https://github.com/PascuMihai/Number-guessing-game-JavaScript"
                colored
                target="_blank"
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ margin: "auto" }}>
            <CardTitle
              style={{
                height: "150px",
                padding: "2px",
                paddingLeft: "10px",
                background:
                  "url(https://image.shutterstock.com/image-photo/image-260nw-1188713476.jpg) center / cover"
              }}
            >
              Book library
            </CardTitle>
            <CardText>
               Practiced some DOM manipulation and conditional rendering without using a JS framework, only java script.
            </CardText>
            <CardActions
              style={{ display: "flex", justifyContent: "center" }}
              border
            >
              <Button
                href="https://github.com/PascuMihai/Book-library-JavaScript"
                colored
                target="_blank"
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ margin: "auto" }}>
            <CardTitle
              style={{
                height: "150px",
                padding: "2px",
                paddingLeft: "10px",
                background:
                  "url(https://image.shutterstock.com/image-photo/image-260nw-1188713476.jpg) center / cover"
              }}
            >
              Tetris game
            </CardTitle>
            <CardText>
              I wanted to do a bigger project so with some help from tutorials I managed
               to build a tetris game from scratch.
            </CardText>
            <CardActions
              style={{ display: "flex", justifyContent: "center" }}
              border
              target="_blank"
            >
              <Button href="https://github.com/PascuMihai/Tetris-game" colored>
                GitHub
              </Button>
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
                padding: "2px",
                paddingLeft: "10px",
                height: "150px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              Shopping Cart demo
            </CardTitle>
            <CardText>
              It's import to know how to work with props and state in React and also event 
              handling, made this myself without any help. You can add, delete, reset,
              increment or decrement.
            </CardText>
            <CardActions
              style={{ display: "flex", justifyContent: "center" }}
              border
              target="_blank"
            >
              <Button
                href="https://github.com/PascuMihai/Shopping-cart-app-React"
                colored
              >
                GitHub
              </Button>
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
                paddingLeft: "10px",
                padding: "2px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              Todo list app
            </CardTitle>
            <CardText>
            A simple todo list app, where you can add a new todo, delete, and check it off.
            Also made a conditional rendering where if you check a todo it will automatically
            line through the todo.
            </CardText>
            <CardActions
              style={{ display: "flex", justifyContent: "center" }}
              border
            >
              <Button
                href="https://github.com/PascuMihai/Todo-app-React"
                colored
                target="_blank"
              >
                GitHub
              </Button>
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
