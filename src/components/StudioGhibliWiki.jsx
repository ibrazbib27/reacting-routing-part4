import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Logo from "./../assets/logo.png";
import JPG from "./../assets/Studio_Ghibli_Characters.jpg";
import FilmsPage from "./Films/FilmsPage";
import FilmInfo from "./Films/FilmInfo";
import HomePage from "./Home/HomePage";
import PeoplePage from "./People/PeoplePage";
import PeopleInfo from "./People/PeopleInfo";
import Footer from "./Footer";

const styles = {
  backgroundImage: `url(${JPG}) , linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))`,
  backgroundBlendMode: `overlay`,
  backgroundPosition: `center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  backgroundAttachment: `fixed`,
};
class StudioGhibliWiki extends Component {
  constructor() {
    super();
    this.state = {};
    this.getClick = this.getClick.bind(this);
    this.removeClick = this.removeClick.bind(this);
  }

  getClick = () => {
    let myClass = "";
    if (window.location.href.includes("films")) myClass = ".FilmsCl";
    else if (window.location.href.includes("people")) {
      myClass = ".PeopleCl";
    } else myClass = ".HomeCl";

    let classElement = document.querySelector("#nav>" + myClass);
    let mainElement = document.querySelector("#mainnav>" + myClass);

    classElement.classList.add("active");
    mainElement.classList.add("active");
  };

  removeClick = () => {
    let active1 = document.querySelector("#mainnav>.active");
    let active2 = document.querySelector("#nav>.active");
    active1.classList.remove("active");
    active2.classList.remove("active");
  };

  componentDidMount() {
    this.getClick();
  }
  render() {
    let home = 0;
    let films = 0;
    let people = 0;
    let addClose = (mainelement, span, x) => {
      mainelement.style.marginLeft = "auto";
      mainelement.style.border = "transparent";
      mainelement.removeChild(mainelement.firstElementChild);
      span.appendChild(x);
      span.classList.add("text-white", "close");
      mainelement.appendChild(span);
      return mainelement;
    };
    return (
      <React.Fragment>
        <Router>
          <Fragment>
            <Navbar
              className="pt-1"
              collapseOnSelect
              expand="md"
              bg="dark"
              variant="dark"
              fixed="top"
            >
              <Row className="w-25">
                <Navbar.Brand className="ml-3 mr-auto ">
                  <Col>
                    {" "}
                    <Image
                      className=" bg-white"
                      src={Logo}
                      height={"50"}
                      width={"160"}
                      rounded
                    />
                  </Col>
                  <Col className="mt-2">Studio Ghibli Wiki </Col>
                </Navbar.Brand>
              </Row>
              <Navbar.Toggle
                className="px-4 py-4 my-auto ml-2"
                onClick={(e) => {
                  let elem = document.getElementsByClassName(
                    "navbar-toggler"
                  )[1];
                  let x = document.createTextNode("×");
                  let span = document.createElement("span");
                  addClose(elem, span, x);
                }}
                aria-controls="responsive-navbar-nav"
              />

              <Navbar.Collapse className="mt-auto" id="responsive-navbar-nav">
                <Nav
                  id="mainnav"
                  className="ml-auto w-75 d-none d-md-flex justify-content-md-between mr-5"
                >
                  <Nav.Link
                    as={Link}
                    exact
                    to="/"
                    className="HomeCl"
                    onClick={(e) => {
                      this.removeClick();
                      let target = e.target;
                      home++;
                      films = 0;
                      people = 0;
                      if (home <= 2)
                        setTimeout(() => {
                          target.click();
                        }, 1);
                      this.getClick();
                    }}
                  >
                    Home
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    to="/films"
                    className="FilmsCl"
                    onClick={(e) => {
                      this.removeClick();
                      let target = e.target;
                      home = 0;
                      films++;
                      people = 0;
                      if (films <= 2)
                        setTimeout(() => {
                          target.click();
                        }, 1);
                      this.getClick();
                    }}
                  >
                    View Films
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    to="/people"
                    className="PeopleCl"
                    onClick={(e) => {
                      this.removeClick();
                      let target = e.target;
                      home = 0;
                      films = 0;
                      people++;
                      if (people <= 2)
                        setTimeout(() => {
                          target.click();
                        }, 1);
                      this.getClick();
                    }}
                  >
                    View People
                  </Nav.Link>
                </Nav>

                <Nav
                  id="nav"
                  className="mx-auto w-100 d-md-none text-center mx-5 my-3  border border-white rounded mb-2"
                >
                  <Navbar.Toggle />
                  <Nav.Link
                    as={Link}
                    exact
                    to="/"
                    className=" mb-2 mx-3 mt-auto HomeCl  border border-white"
                    onClick={(e) => {
                      this.removeClick();
                      let target = e.target;
                      home++;
                      films = 0;
                      people = 0;
                      if (home <= 2)
                        setTimeout(() => {
                          target.click();
                        }, 1);
                      this.getClick();
                      this.getClick();
                    }}
                  >
                    Home
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    exact
                    to="/films"
                    className=" mb-2 FilmsCl border border-white mx-3"
                    onClick={(e) => {
                      this.removeClick();
                      let target = e.target;
                      home = 0;
                      films++;
                      people = 0;
                      if (films <= 2)
                        setTimeout(() => {
                          target.click();
                        }, 1);
                      this.getClick();
                    }}
                  >
                    View Films
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    to="/people"
                    className="mb-2 PeopleCl border border-white mx-3 mb-4"
                    onClick={(e) => {
                      this.removeClick();
                      this.getClick();
                      let target = e.target;
                      home = 0;
                      films = 0;
                      people++;
                      if (people <= 2)
                        setTimeout(() => {
                          target.click();
                        }, 1);
                    }}
                  >
                    View People
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Container style={styles} className=" p-0 m-0" fluid>
              <Row className="my-5"></Row>
              <Row className="my-5"></Row>
              <Row className="my-5"></Row>
              <Jumbotron className="rounded mx-auto w-75 py-3" fluid>
                <Container>
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/films" component={FilmsPage} />
                    <Route exact path="/people" component={PeoplePage} />
                    <Route path="/films/:id" component={FilmInfo} />
                    <Route path="/people/:id" component={PeopleInfo} />
                  </Switch>
                </Container>
              </Jumbotron>

              <Row className="my-5"></Row>
              <Row className="my-5"></Row>
              <Footer />
            </Container>
          </Fragment>
        </Router>
      </React.Fragment>
    );
  }
}
export default StudioGhibliWiki;
