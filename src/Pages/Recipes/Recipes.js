import React from 'react'
import { Card, Col, ButtonGroup, DropdownButton, Dropdown, Container, CardDeck, Button} from 'react-bootstrap'
import s from './cardStyle.module.scss'






export const Recipes = (props) => {
   
    let changeCatalog = (eventKey) => {
       
        props.updateCatalog(eventKey);
    }
  
    let catalogElement = 

        props.item.map(c => {
        
        return(
            <Card className={s.card}>
                <Card.Body>
                        <Card.Img src={c.img}
                            className={s.img}/>
                            <div className={s.inf}>
                                <Card.Title className={s.title} >{c.name}</Card.Title>
                                <Card.Text className={s.text} >{c.price}</Card.Text>
                            </div>
                    </Card.Body> 
                <Button >Купить</Button>
            </Card> 
        )

    });
    
   
    return(
        
       <div>
        
            <Col md="3" >
            
            <Card className='m-3'  className={s.menu} >
                <h5>Каталог</h5>
                    <ButtonGroup vertical   >
                    <DropdownButton as={ButtonGroup}  title="Торты" id="bg-vertical-dropdown-1" >
                    <Dropdown.Item eventKey="weddingCake" onClick ={() => {props.updateCatalog("weddingCake")}}>Свадебные</Dropdown.Item>
                    <Dropdown.Item eventKey="festive" onClick ={() => {props.updateCatalog("festive")}} >Празнечные</Dropdown.Item>
                    <Dropdown.Item eventKey="mass" onClick ={() => {props.updateCatalog("mass")}}>Массовые</Dropdown.Item>
                    <Dropdown.Item eventKey="kids" onClick ={() => {props.updateCatalog("kids")}}>Детские</Dropdown.Item>
                    <Dropdown.Item eventKey="corporate" onClick ={() => {props.updateCatalog("corporate")}}>Корпоративные</Dropdown.Item>
                    </DropdownButton>
                    
                    
                    <DropdownButton as={ButtonGroup} title="Candy Bar" id="bg-vertical-dropdown-1">
                    <Dropdown.Item eventKey="3">Пирожные</Dropdown.Item>
                    <Dropdown.Item eventKey="4" >Зефир</Dropdown.Item>
                    <Dropdown.Item eventKey="5" >Тарталетки</Dropdown.Item>
                    <Dropdown.Item eventKey="6" >Капкейки</Dropdown.Item>
                    <Dropdown.Item eventKey="7"  >Кейк-Попсы</Dropdown.Item>
                    <Dropdown.Item eventKey="8" >Павлова</Dropdown.Item>
                    <Dropdown.Item eventKey="9" >Эклер</Dropdown.Item>
                    <Dropdown.Item eventKey="0" >Макаронс</Dropdown.Item>
                    <Dropdown.Item eventKey="11" >Десерт в стакане</Dropdown.Item>
                    </DropdownButton>

                    <Button >Имбирные пряники</Button>
                    <Button >Начинки</Button>
                    <Button >Конфеты</Button>
            
                </ButtonGroup>
                </Card>
            </Col>
            
            <Col>
                <Container className={s.cont}>
                    <CardDeck>
                        <div>{catalogElement}</div>            
                    </CardDeck>
                </Container>
            </Col>
        
    
       </div>
    )
}
 