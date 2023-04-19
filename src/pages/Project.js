import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

export default function Project({ props }) {
    return (
        <Col md="auto">
            <Card
                style={{
                    width: '20vw',
                    marginTop: '10vh',
                    marginBottom: '10vh',
                }}
            >
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.desc}</Card.Text>
                    <Button href={props.link}>
                        Click here to see the repo!
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}
