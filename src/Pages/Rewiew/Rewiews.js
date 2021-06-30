import React from 'react'
import {Form, Button, Container,Card} from "react-bootstrap"
import s from './rewiew.module.scss'






export const Rewiews = (props) =>{
    
        let newComentElement = React.createRef();

        let onAddComent= () => {

            props.addComent();
            
            
            
        }
        
        let onComentChange = () =>{
            
            let text = newComentElement.current.value;
            props.updateComentText(text);
        }

        let cometsElements= props.comet.map(c => {
            return(
                <Card className={s.card}>
                    <Card.Body>
                        <Card.Img src={c.img} className={s.img}/>
                        <Card.Title className={s.title} >{c.name}</Card.Title>
                        <Card.Text>{c.text}</Card.Text>
                    </Card.Body>
                </Card> 
            )
        })
    
    return(
      
        <Container style={{width:'700px'}}>
            <div>{cometsElements}</div>
            <Form>
                <Form.Group className="mb-3">
                <Form.Label>Коментарий</Form.Label>
                <Form.Control as="textarea" rows="3" ref={newComentElement} onChange={onComentChange} value={props.newComentText}/>
                <Button className="mt-3" onClick={onAddComent}>Add Coment</Button>
                </Form.Group>
            </Form>
        </Container>
           
        
    )
}
