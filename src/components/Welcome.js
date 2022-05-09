import React, { Component } from "react";
import { Container, Row, Jumbotron, Col } from "react-bootstrap";

export default class Welcome extends Component {
  render() {
    return (
      <div>

        <div class="container-fluid bg-light text-dark p-5" style={{ marginTop: "50px" }}>
          <div class="container bg-light p-5">
            <h1 class="display-4 fw-bold">Welcome to Library Management System</h1>
            <hr />
            <p>“Reading can take you places you have never been before.”</p>
            <footer className="blockquote-footer"> Dr. Seuss</footer>
          </div>
        </div>
      </div>
    );
  }
}
