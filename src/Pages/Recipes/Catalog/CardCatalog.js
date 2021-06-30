import React from 'react'
import {Col, Container, CardDeck, Card, Button} from 'react-bootstrap'
import s from './cardStyle.module.scss'
//import c from './catalog.json'



export const  CardCatalog =(props)=> {

    let catalogElement = props.catalog.item.mass.map(c => {
        
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
    
    return (
        <div>
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
export default CardCatalog;