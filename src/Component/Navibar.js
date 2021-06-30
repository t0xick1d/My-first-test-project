import React, {useState} from "react";
import { Navbar,Nav, Button, Form, Modal } from "react-bootstrap";
import {Link} from 'react-router-dom';
import '../style/styles.scss';
import logo from '../imeges/logo.png';


const logIn ={
    color: '#ffffff',
    background: '#ffa4ca',
}

const style= {
    color: '#863c00',    
}
const stylenavbar = {
    color: '#ff90be',
    background: '#2c0000',

}
 

export default function Navibar() {

    const [show, setShow] = useState(false);

    const handleClose= () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
       
        <Navbar collapseOnSelect expand="lg" style={stylenavbar}>
            <img src={logo}
                width={50}
                height={50}
                background='#2c0000'
            />
            <Navbar.Brand><h4 className="textNavibar" style={stylenavbar} >Karlson-Cake</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" >
                    <Nav.Link><Link to ="/Pages/AboutUs" style={style} > О нас</Link></Nav.Link>
                    <Nav.Link><Link to ="/Pages/Pay" style={style}> Оплата</Link></Nav.Link>
                    <Nav.Link><Link to ="/Pages/Delivery"style={style}> Доставка</Link></Nav.Link>
                    <Nav.Link><Link to ="/Pages/Reviews"style={style}> Отзывы</Link></Nav.Link>
                    <Nav.Link><Link to ="/Pages/Recipes"style={style}> Каталог</Link></Nav.Link>
                    <Nav.Link><Link to ="/Pages/Contacts"style={style}> Контакты</Link></Nav.Link>          
                </Nav>
                <Nav>
                    <Button variant="btn btn-outline-danger" onClick={handleShow}>Вход/Регистрация</Button>
                </Nav>

            </Navbar.Collapse>

        </Navbar>
        <Modal show={show} onHide={handleClose} > 
            <Modal.Header closeButton  style={logIn}>
                <Modal.Title>Войти</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form>
                <Form.Group controlId="fromBasicEmail">  
                    <Form.Label>Email Agress</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">We'll never share your email with anyonelse.</Form.Text>
                </Form.Group>
                <Form.Group controlId="fromBasicEmail">  
                <Form.Label>Password</Form.Label>
                <Form.Control type="Password" placeholder="Enter Password"/>
                </Form.Group>
                    <Form.Group controlId="fromBasicCheckBox">  
                    <Form.Check type="checkbox" label="Remember me"/>
                </Form.Group>
                <Button variant='btn-outline-$red-200' style={logIn}>Войти</Button>
                    
                </Form>

            </Modal.Body>

        </Modal>
        
        </>
    )
}
