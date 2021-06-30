import React from 'react'
import { Card, Col, ButtonGroup, DropdownButton, Dropdown, Button} from 'react-bootstrap'
import styless  from './buttonStyle.module.scss'





export const ButtonGr = (props) =>{
    
    let changeCatalog = (eventKey) => {
        props.changeCatalog(eventKey);
    }

    return(
        <div>
             <Col md="3" >
           
                <Card className='m-3'  className={styless.menu} >
                    <h5>Каталог</h5>
                    <ButtonGroup vertical   >
                    <DropdownButton as={ButtonGroup}  title="Торты" id="bg-vertical-dropdown-1" >
                    <Dropdown.Item eventKey="weddingCake" onClick ={changeCatalog}>Свадебные</Dropdown.Item>
                    <Dropdown.Item eventKey="festive" onClick ={changeCatalog}>Празнечные</Dropdown.Item>
                    <Dropdown.Item eventKey="mass" onClick ={changeCatalog}>Массовые</Dropdown.Item>
                    <Dropdown.Item eventKey="kids" onClick ={changeCatalog}>Детские</Dropdown.Item>
                    <Dropdown.Item eventKey="corporate" onClick ={changeCatalog}>Корпоративные</Dropdown.Item>
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
        </div>
    )
}

