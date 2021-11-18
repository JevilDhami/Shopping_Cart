import { Container , Row , Col, Offcanvas, Form } from 'react-bootstrap';
import Category from './Category';
import List from './List';
import Cart from './Cart';
import React, { useState } from "react";
import Button from '@restart/ui/esm/Button';

function MainSlide() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // var tblval ={};
     var finalData = {};
    // tblval.push(finalData);
    // // let sd = { Username: Username, Email: Email, Password: Password };
    // //             tblval.push(sd);
   
    const changeData = (event) => {
        console.log("event", event)
        const { name, value} = event.target
        finalData = {
            ...finalData,
            [name]: value
        }
        console.log("finalData --->", finalData)
    }

    const handleSave = (e) => {
        console.log("saveData", finalData)
        const data = JSON.stringify(finalData)
        localStorage.setItem("formData", data)
        const form = localStorage.getItem("formData" , data)
        console.log("saved data from local storage" , form)
        e.preventDefault()
        
    }
    
    //SlideBar Menu
    function OffCanvasExample({ ...props }) {
        return (
            <>
                <Button variant="primary" onClick={handleShow} className="btn btn-outline-dark">
                 MENU
                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                  
                        <center><b>Fill Details</b></center>
        
                    <Offcanvas.Body>
                        <Form>
                            <Form.Group className="mb-3 form-control">
                            <label className="form-lable"><b>First Name</b></label>
                                <input
                                    className="mb-3 form-control"
                                    name="fname"
                                    onChange={changeData}
                                    />
                            
                            <label className="form-lable"><b>Email</b></label>
                                <input
                                    className="mb-3 form-control"
                                    name="Email"
                                    onChange={changeData}
                                    />
                            
                            <label className="form-lable"><b>Password</b></label>
                                <input
                                    className="mb-3 form-control"
                                    name="Password"
                                    onChange={changeData}
                                />
                            
                            <Button className="btn btn-outline-danger" type="submit" onClick= {() => handleSave()}>Submit</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className="btn btn-outline-success" type="reset">Reset</Button>

                          {/* {  tblval.push(finalData) } */}
                            </Form.Group>
                        </Form>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }

    return (
        <center>
            <br/>
            <br/>
            <div className="shoping">
                <Container fluid>
                    <>
                        <OffCanvasExample key={0}
                            placement='end'
                            name='end'
                            handleClose={handleClose}
                            handleShow={handleShow}                            
                        />
                    </>
                </Container>
            </div>
        </center>
    );
}

function Shopingcart() {

    const [data,setData]=useState('Men');
    const [cartData,setCartData]=useState([]);
    const [componentKey,setComponentKey]=useState(0);
    const [CountData,setCountData]=useState(0);

    const products = [
            {id: "1", counter :1 , category: "Women", product: "Sari", price : "6000", sizes :[{Size :"M" , Price :"6000"},{Size :"S" , Price :"5500"},{Size :"XL" , Price :"6500"},{Size :"XXl" , Price :"7000"}],productImage:"https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPGRUBSTAKER-WAMBA473753D1AAC8F/1604564348100_0..jpg"},
            {id: "2", counter :1, category: "Women", product: "Kurties", price : "600", sizes :[{Size :"M" , Price :"600"},{Size :"S" , Price :"500"},{Size :"XL" , Price :"650"},{Size :"XXl" , Price :"700"}],productImage:"https://canary.contestimg.wish.com/api/webimage/5f1becdeef969e7900f3043f-large.jpg?cache_buster=cbb588cb756f51e6f4d5297ccf4a50a3"},
            {id: "3", counter :1, category: "Women", product: "tops", price : "400", sizes :[{Size :"M" , Price :"400"},{Size :"S" , Price :"350"},{Size :"XL" , Price :"450"},{Size :"XXl" , Price :"500"}],productImage:"https://4.imimg.com/data4/PW/MN/ANDROID-37023138/product-500x500.jpeg"},
            {id: "4", counter :1, category: "Women", product: "jeans",price : "1200", sizes :[{Size :"30" , Price :"1200"},{Size :"28" , Price :"1150"},{Size :"32" , Price :"1250"},{Size :"34" , Price :"1300"}],productImage:"https://rukminim1.flixcart.com/image/714/857/ki7qw7k0-0/trouser/s/p/d/15-16-years-m7016-paaqi-original-imafy2c8erxkwgje.jpeg?q=50"},
            {id: "5", counter :1, category: "Men", product: "shirt", price : "900" , sizes :[{Size :"M" , Price :"900"},{Size :"S" , Price :"850"},{Size :"XL" , Price :"950"},{Size :"XXl" , Price :"1000"}], productImage:"https://5.imimg.com/data5/BJ/AV/UA/SELLER-43380556/mens-plane-shirt-500x500.jpg"},
            {id: "6", counter :1, category: "Men", product: "jeans", price : "1200" , sizes :[{Size :"30" , Price :"1200"},{Size :"28" , Price :"1150"},{Size :"32" , Price :"1250"},{Size :"34" , Price :"1300"}], productImage:"https://5.imimg.com/data5/TF/IW/MY-17554435/men-casual-pant-500x500.jpg"},
            {id: "7", counter :1, category: "Men", product: "t-shirt", price : "700" , sizes :[{Size :"M" , Price :"700"},{Size :"S" , Price :"650"},{Size :"XL" , Price :"750"},{Size :"XXl" , Price :"800"}],productImage:"https://www.indianq.com/wp-content/uploads/2020/02/Hollister-Round-Half-Sleeves-T-Shirt-For-Men-Blue-White.jpg"},   
            {id: "8", counter :1, category: "Men", product: "Watch", price : "7000" , productImage:"https://5.imimg.com/data5/FB/TB/PC/SELLER-8652465/naviforce-men-watch-date-week-sport-mens-watches-nf9110-available-in-5-colors--500x500.PNG"},
            {id: "9", counter :1, category: "Men", product: "shoe", price : "3700" , sizes :[{Size :"7" , Price :"3700"},{Size :"8" , Price :"3500"},{Size :"9" , Price :"4000"},{Size :"10" , Price :"4200"}],productImage:"https://www.insidesport.in/wp-content/uploads/2019/01/Adidas-696x464.jpg"},
            {id: "10", counter :1, category: "Women", product: "Watch", price : "7000" , productImage:"https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/11911/116065/Polygonal-dial-design-women-watches-luxury-fashion-dress-quartz-watch-ulzzang-popular-brand-white-ladies-leather__21892.1560754308.jpg?c=2"},
            {id: "11", counter :1, category: "Women", product: "shoe", price : "3700" , sizes :[{Size :"7" , Price :"3700"},{Size :"8" , Price :"3500"},{Size :"9" , Price :"4000"},{Size :"10" , Price :"4200"}],productImage:"https://i.pinimg.com/474x/fd/3d/12/fd3d12879322b5bb9ea5a530c25d86e8.jpg"},
            {id: "12", counter :1, category: "Girl", product: "frok", price : "6000", sizes :[{Size :"M" , Price :"6000"},{Size :"S" , Price :"5500"},{Size :"XL" , Price :"6500"},{Size :"XXl" , Price :"7000"}],productImage:"https://5.imimg.com/data5/BK/FN/MY-8338253/fancy-baby-girl-frocks-500x500.jpg"},
            {id: "13", counter :1, category: "Girl", product: "Kurties", price : "600", sizes :[{Size :"M" , Price :"600"},{Size :"S" , Price :"500"},{Size :"XL" , Price :"650"},{Size :"XXl" , Price :"700"}],productImage:"https://n4.sdlcdn.com/imgs/j/l/o/V2-Young-Girl-Kurti-Peach-SDL730383079-1-d0c83.jpg"},
            {id: "14", counter :1, category: "Girl", product: "tops", price : "400", sizes :[{Size :"M" , Price :"400"},{Size :"S" , Price :"350"},{Size :"XL" , Price :"450"},{Size :"XXl" , Price :"500"}],productImage:"https://assets.ajio.com/medias/sys_master/root/hdb/h4d/13526473441310/-473Wx593H-460408966-navyblue-MODEL.jpg"},
            {id: "15", counter :1, category: "Girl", product: "jeans",price : "1200", sizes :[{Size :"22" , Price :"1200"},{Size :"20" , Price :"1150"},{Size :"24" , Price :"1250"},{Size :"26" , Price :"1300"}],productImage:"https://n4.sdlcdn.com/imgs/g/q/3/R-Design-Stylish-White-Pant-SDL824522145-4-a24b1.jpg"},
            {id: "16", counter :1, category: "Boy", product: "shirt", price : "900" , sizes :[{Size :"M" , Price :"900"},{Size :"S" , Price :"850"},{Size :"XL" , Price :"950"},{Size :"XXl" , Price :"1000"}],productImage:"https://s3.ap-south-1.amazonaws.com/tcsonline-live/catalog/product/cache/afad95d7734d2fa6d0a8ba78597182b7/0/0/003_58_143.jpg"},
            {id: "17", counter :1, category: "Boy", product: "jeans", price : "1200" , sizes :[{Size :"22" , Price :"1200"},{Size :"20" , Price :"1150"},{Size :"24" , Price :"1250"},{Size :"26" , Price :"1300"}],productImage:"https://images-eu.ssl-images-amazon.com/images/I/71RSV3Pl5oL._AC._SR360,460.jpg"},
            {id: "18", counter :1, category: "Boy", product: "t-shirt", price : "700" , sizes :[{Size :"M" , Price :"700"},{Size :"S" , Price :"650"},{Size :"XL" , Price :"750"},{Size :"XXl" , Price :"800"}],productImage:"https://5.imimg.com/data5/BB/BB/MY-6510348/boy-t-shirt-500x500.jpg"},   
            {id: "19", counter :1, category: "Boy", product: "Watch", price : "7000" ,productImage:"https://media.istockphoto.com/photos/smart-watch-on-the-boys-hand-picture-id885350126?k=20&m=885350126&s=170667a&w=0&h=_gsSHBcFOvne9MC_GgviBlyocZAAMbS4yvghCSV0DeY="},
            {id: "20", counter :1, category: "Boy", product: "shoe", price : "3700" , sizes :[{Size :"3" , Price :"3700"},{Size :"4" , Price :"3500"},{Size :"5" , Price :"4000"},{Size :"6" , Price :"4200"}],productImage:"https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/B525966703F941DEA937B2F5EE08591B/205182633_9212_B525966703F941DEA937B2F5EE08591B.jpg"},
            {id: "21", counter :1, category: "Girl", product: "Watch", price : "7000" , productImage:"https://rukminim1.flixcart.com/image/714/857/k1dw70w0/watch/z/e/r/girls-pink-type-belt-and-rubber-belt-new-design-dial-watch-original-imafhpyzf8uzde5y.jpeg?q=50"},
            {id: "22", counter :1, category: "Girl", product: "shoe", price : "3700" , sizes :[{Size :"3" , Price :"3700"},{Size :"4" , Price :"3500"},{Size :"5" , Price :"4000"},{Size :"6" , Price :"4200"}],productImage:"https://5.imimg.com/data5/FN/UK/MY-31413555/fancy-girl-shoes-500x500.jpg"}

        ]
    
    const [productsData,setProducts]=useState(products);

    const handleClick = (data)=> {
        //  console.log(data)
        //   console.log("cartdata", cartdata)
        if(cartData.length){
            cartData && cartData.filter((cr, i)=> {
                //   console.log("cr",cr)
                    let value = false;
                //   console.log("cr.id === data.id", cr.id === data.id, cr.selectsize === data.selectsize)
                //   console.log("cr.selectsize === data.selectsize",cr.selectsize === data.selectsize)
            if(cr.id === data.id && cr.selectedSize === data.selectedSize) {
                //   console.log("inif", i);
                cartData[i]={
                    ...cartData[i],
                    counter: cartData[i].counter + data.counter,
                }
                setComponentKey(componentKey + 1)
                // console.log("value",value)
                return;
            }
            setCartData([...cartData, data]);
            })
        }else{
            setCartData([...cartData, data]);
        }
    }

    const handleSelect=(e)=>{
        console.log('e :>> ', e);
        console.log(e.target.value)
        setData(e.target.value)
    }

    const removeCart = (index) =>{
        setCartData(cartData.filter((e,i) => i !== index))
        console.log('setCartData :>> ', setCartData);
        // setCartData(cartData.splice(i ,1))
        // cartData.splice(i,1);
    }

    const changeSize = (id, size) => {
        console.log("change size", id, size);
        const productIndex = productsData.findIndex(ele => ele.id === id)
        productsData[productIndex] = {
            ...productsData[productIndex],
            selectedSize: size.Size,
            price: size.Price,
        }
        setCountData((CountData + 1),productsData[productIndex])
        console.log('productsData[productIndex] :>> ', productsData[productIndex]);
    }
    
    const Click1 = (id) => {
        console.log("function 1 called",id)
        const productIndex = productsData.findIndex(ele => ele.id === id)
        console.log("idx", productIndex)
        productsData[productIndex] = {
            ...productsData[productIndex],
            counter: productsData[productIndex].counter + 1,
        }
        setCountData((CountData + 1),productsData[productIndex])
    }
    
    const Click2 = (id) => {
        console.log("function 2 called",id)
        const productIndex = productsData.findIndex(ele => ele.id === id)
        console.log("idx", productIndex)
        // if(productsData[productIndex].counter > 1){
        productsData[productIndex] = {
            ...productsData[productIndex],
            counter: productsData[productIndex].counter - 1,
        }
    // }
        setCountData((CountData - 1),productsData[productIndex])
    }
    
    
    return (
        <div>
            <Container fluid>
                <Row md={12}>
                    <Col>
                        <h1>Shopingcarts</h1> 
                    </Col>
                </Row>
                <hr/>
                {console.log("cartData",cartData)}
                
                <Row>
                    <Col md={3} ><Category handleSelect={handleSelect} cate={data} /><MainSlide/></Col>
                    <Col md={6}><List key={CountData} cate={data} products={productsData} handleClick = {handleClick} changeSize={changeSize} onIncrease={Click1} onDecrease={Click2}/></Col>
                    <Col md={3}><Cart cartData = {cartData} removeCart={removeCart}/></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Shopingcart;
