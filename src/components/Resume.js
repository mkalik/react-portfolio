import React from 'react';
import { Card, Container, Spinner, Col } from 'react-bootstrap';
export default function Resume() {
    return (
        <Col className="justify-content-center">
            <Container fluid>
                <Card
                    style={{
                        padding: '10px',
                        margin: 'auto',
                        width: '50vw',
                        height: '25vh',
                        textAlign: 'center',
                    }}
                >
                    <Card.Title>Resume Coming soon!</Card.Title>
                    <Card.Body style={{ margin: 'auto' }}>
                        {<Spinner animation="border" />}
                    </Card.Body>
                </Card>
            </Container>
        </Col>
    );
}
