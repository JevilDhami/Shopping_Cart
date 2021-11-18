// import './App.css';
import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

class List extends React.Component {
  render() {
    const { products, handleClick, cate, onIncrease, onDecrease, changeSize } = this.props;
    return (
      <div>
        <h1>List Item</h1>
        {this.props.cate}
        <div>
          <Row xs={1} md={2} className="g-4">
            {products
              .filter((idx) => idx.category === cate)
              .map((item, i) => (
                <Col key={i}>
                  <Card>
                    <Card.Img
                      variant="top" height="300px" src={item.productImage}/>
                    <Card.Body>
                      <Card.Title>{item.product}</Card.Title>
                      <Card.Text>Price : {item.price}</Card.Text>
                      <Card.Text>
                        {console.log("size print", item.sizes)}
                        {item.sizes && item.sizes.map((e) => (
                          <Button class="btn btn-outline-secondary" onClick={()=> changeSize(item.id, e)}>{e.Size}</Button>
                        ))}
                      </Card.Text>
                      <p>Qty :{item.counter}</p>
                      <button className="btn btn-outline-success" onClick={() => onIncrease(item.id)}>+</button>
                      <button className="btn btn-outline-danger" onClick={() => onDecrease(item.id)}>-</button>
                      <button class="btn btn-outline-info" type="submit" onClick={() => handleClick(item)}> Add to Cart</button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default List;
