import React, { Component } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PeopleFilter from "./PeopleFilter";

class PeoplePage extends Component {
  constructor() {
    super();
    this.state = {
      end: false,
      cardDetails: [],
    };
    this.sortUp = this.sortUp.bind(this);
    this.sortDown = this.sortDown.bind(this);
  }
  componentDidMount() {
    let arr = [];
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((obj) => {
        obj.forEach((val) => {
          arr.push(val);
        });
        this.setState({
          cardDetails: arr,
        });
      });
  }
  sortUp(val) {
    let arr = this.state.cardDetails;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let val1, val2;
        if (val === true) {
          try {
            val1 = arr[i].films.length;
            val2 = arr[j].films.length;
          } catch (err) {
            console.log(err);
          }
        } else {
          try {
            val1 = arr[i].name.toLowerCase();
            val2 = arr[j].name.toLowerCase();
          } catch (err) {
            console.log(err);
          }
        }
        if (val1 < val2) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    this.setState({
      cardDetails: arr,
    });
  }
  sortDown(val) {
    let arr = this.state.cardDetails;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let val1, val2;
        if (val === true) {
          try {
            val1 = arr[i].films.length;
            val2 = arr[j].films.length;
          } catch (err) {
            console.log(err);
          }
        } else {
          try {
            val1 = arr[i].name.toLowerCase();
            val2 = arr[j].name.toLowerCase();
          } catch (err) {
            console.log(err);
          }
        }
        if (val1 > val2) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    this.setState({
      cardDetails: arr,
    });
  }

  render() {
    const people = this.state.cardDetails.map((person) => (
      <Col
        key={person.id}
        id={person.id}
        xs={10}
        md={8}
        className="text-center border-secondary border-top  py-5 mx-auto"
      >
        <Link to={`people/${person.id}`} className="h3 text-dark">
          {person.name}
        </Link>
        <br />
        <br />
        <p className=" text-muted small">
          {person.films === undefined ? "N/A" : person.films.length} film(s)
        </p>
      </Col>
    ));

    return (
      <Row>
        <Col xs={12} className="">
          <Row>
            <Col xs={12} md={4} lg={3} className=""></Col>
            <Col
              xs={12}
              md={4}
              lg={6}
              style={{ fontFamily: "cursive" }}
              className="text-center display-3 h1 mb-md-5 mb-2"
            >
              People
            </Col>
            <Col
              xs={12}
              md={4}
              lg={3}
              className="mt-lg-3 mt-md-4 mt-0 mb-3 mb-md-0"
            >
              <PeopleFilter
                styles={"text-md-right text-center "}
                up={this.sortUp}
                down={this.sortDown}
              />
            </Col>
          </Row>
        </Col>
        {people}
      </Row>
    );
  }
}
export default PeoplePage;
