// import './App.css';
import {Container, Row, Col, Form,}from "react-bootstrap";
import React from "react";

export class Category extends React.Component {
  render() {
    const { cate } = this.props;
    return (
      <div>
        <h1>Category</h1>

        <Container fluid>
          <Row>
            <Col>
              <Form.Select value={cate} onChange={this.props.handleSelect}>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Boy">Boy</option>
                <option value="Girl">Girl</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Category;
