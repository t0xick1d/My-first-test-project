import React from 'react';
import {Container} from 'react-bootstrap';
import logo from '../imeges/logo.png';
import footer from '../style/footer.module.scss'


 
const Footer = () => {

    return(
        <Container fluid style={{background: '#2c0000', color: '#ff90be', position:'sticky', bottom: '0px'}}>
            <Container style={{display: 'flex', justifyContent:'center', padding:'0px' }}>
                <img src={logo}
                    width={70}
                    height={70}
                    className="karlson"
                />
                <h3 className='h3'>Karlson-Cake</h3> 
            </Container>
        </Container>
    )
}

export default Footer;