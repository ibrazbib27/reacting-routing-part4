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
    };
  }
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    let arr = [];
    fetch(`https://ghibliapi.herokuapp.com/films/${params.id}`)
      .then((res) => res.json())
      .then((obj) => {
        arr[0] = obj;

        this.setState({
          cardDetails: arr,
          render: true,
        });
      });
  }

  render() {
    const films = this.state.cardDetails.map((film) => (
      <Col key={this.state.render ? film.id : null} xs={12} className="w-100">
        <Row className="w-100 p-3">
          <Col xs={12} lg={7} md={6} className="order-2 order-md-1 m-0 ">
            <p className="font-italic">
              <b>{this.state.render ? film.title : null}</b>-{" "}
              {this.state.render ? film.description : null}
            </p>
          </Col>
          <Col
            xs={12}
            lg={5}
            md={6}
            className="order-1 order-md-2 mb-3 mb-lg-0"
          >
            <Aside render={this.state.render} info={film} />
          </Col>
        </Row>
      </Col>
    ));

    return <Row>{films}</Row>;
  }
}
export default FilmInfo;
