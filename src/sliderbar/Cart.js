import { Badge, ListGroup } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

function Cart({ cartData , removeCart }) {
  return (
    <div>
      {console.log("cartData ===================", cartData)}
      <h1>Cart Item</h1>
      <div>
        {cartData.map((item, i) => (
          <ListGroup numbered key = {i}>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item.product}</div>
                {
                  item.selectedSize && 
                  <div className="fw-bold">{item.selectedSize}</div>
                }
                
              </div>
              <Badge variant="primary" pill>Qty :{item.counter} </Badge>
              <Badge variant="primary" pill> Price :{item.price * item.counter}</Badge>
              
              <Button variant="outline-danger" type="submit" onClick={() => removeCart(i) }>remove</Button>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
      <Badge>
        <h3> Total price:</h3>
        <h4>{cartData.reduce((a,item) => a = Number(a) + (Number(item.price)*item.counter), 0)}</h4>
      </Badge>
    </div>
  );
}

export default Cart;