import React from 'react';
import { Container, Row, Col, CardDeck, Card, } from 'react-bootstrap';
import '../style/styles.scss';

const style = {
    color: '#ff90be'
    
};
const text = {
    color: '#000000',
    fontfamily: 'Pangolin', 
    
}
const col = {
    background: '#ffc401',
    margintop: '10'

}

export const AboutUs = () =>{
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <img 
                        src ={"https://i.pinimg.com/originals/69/0d/ec/690decb95a46871442f5e56df5be31ff.jpg"}
                        md={7} className="mt-5"
                        width={500}
                        height={350}
                        className="mt-5"
                        />
                </Col>
                <Col md={5} className="mt-5" >
                    <h1>О нас</h1>
                    <p style={text}>
                        Рады приветствовать Вас в нашей интернет – кондитерской «Карлсон». Мы готовы сделать Ваш праздник сладким, ярким и 
                        незабываемым. Испечём и оформим на Ваше торжество ТОРТИК, ТОРТ, ТОРТИЩЕ  и другие мелкие сладости и вкусняшки.
                        Мы готовим наши тортики и сладости с большим удовольствием , наполняем их любовью, частичкой души, 
                        укутываем нежным вкусом  и приправляем нежным ароматом.
                        Идёте Вы в гости или у Вас важное торжество, побалуйте себя сладеньким. Наша выпечка не такая, как в магазине, 
                        поверьте, раз попробовав вы никогда не забудете её  вкус и аромат. Домашняя… натуральная, ароматная.
                        Для изготовления тортов мы используем только свежие натуральные продукты. Мы не используем маргарин, растительные 
                        сливки, консерванты и искусственные ароматизаторы.
                    </p>
                </Col>
            </Row>
        </Container>
        <Container>
            <CardDeck className="text-center m-5">
                <Card border="warning">
                    <Card.Body>
                    <Card.Title className='rounded-pill' style={{background:'#863c00', color: '#ffc401'}}>О нас</Card.Title>
                    <Card.Text>
                        Рады приветствовать Вас в нашей интернет — кондитерской «Карлсон». 
                        Мы готовы сделать Ваш праздник сладким, ярким и незабываемым. Испечём и оформим на Ваше торжество ТОРТИК, ТОРТ, ТОРТИЩЕ  
                        и другие мелкие сладости и вкусняшки.
                    </Card.Text>
                    </Card.Body>        
                    </Card>
                    <Card border="warning">
                    <Card.Img variant="buttom" src="" />
                    <Card.Body>
                    <Card.Title className='rounded-pill' style={{background:'#863c00', color: '#ffc401'}}>Последние Товары</Card.Title>
                    <Container>
                    </Container>
                    </Card.Body>
                    </Card>
                    <Card border="warning">
                    <Card.Img variant="buttom" src="" />
                    <Card.Body>
                    <Card.Title className='rounded-pill' style={{background:'#863c00', color: '#ffc401'}}>Контакты</Card.Title>
                    <Card.Text>
                        г.Киев, ул. Анны Ахматовой 13 Г
                        Телефон: (044) 592-5114
                        Мобильный: (067) 296-0444; (050) 296-0444
                        E-mail: karlson.cake@gmail.com
                    </Card.Text>
                    </Card.Body>
                   
                    </Card>
            </CardDeck>

        </Container>
        </>
    )
}


