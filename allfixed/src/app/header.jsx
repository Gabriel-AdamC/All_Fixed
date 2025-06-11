import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import "./header.css";

const HeaderComponent = () => {
    return (
        <div className="headerComponent">
            <Container>
                <Row>
                    <Col xs={8}><Link href="/">Logo</Link></Col>
                    <Col>About</Col>
                    <Col>Services</Col>
                    <Col xs={2}><Link href="/contact">Contact Us</Link></Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default HeaderComponent;