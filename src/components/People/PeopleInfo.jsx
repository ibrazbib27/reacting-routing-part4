import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Aside from "./../Aside";

class FilmInfo extends Component {
  constructor() {
    super();
    this.state = {
      render: false,
      cardDetails: [],
      films: [],
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    let arr = [];
    fetch(`https://ghibliapi.herokuapp.com/people/${params.id}`)
      .then((res) => res.json())
      .then((obj) => {
        arr[0] = obj;

        this.setState({
          cardDetails: arr,
          render: false,
        });
      });
  }

  render() {
    const people = this.state.cardDetails.map((person) => (
      <Col key={this.state.render ? person.id : null} xs={12} className="w-100">
        <Row className="w-100 p-3">
          <Col
            xs={12}
            md={6}
            className="order-1 order-md-2 mb-3 mb-lg-0 mx-auto"
          >
            <Aside render={this.state.render} info={person} />
          </Col>
        </Row>
      </Col>
    ));

    return <Row>{people}</Row>;
  }
}
export default FilmInfo;