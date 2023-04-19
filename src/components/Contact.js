import React, { useState } from 'react';

import { Alert, Form, Card, Button, Col, Container } from 'react-bootstrap';

export default function Contact() {
    const [contact, setContact] = useState({ name: '', email: '', text: '' });
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const regex = new RegExp(
        '^([a-zA-Z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$',
        'g'
    );
    const margin = { marginTop: '10px' };
    const handleSubmit = () => {
        for (let [key, val] of Object.entries(contact)) {
            if (val == '') {
                setError('missing a required field');
                setShow(true);
                return;
            }
        }
        // console.log('email test: ', !regex.test(contact.email));

        if (!regex.test(contact.email)) {
            setError('please enter a valid email');
            setShow(true);
            return;
        }
        setContact({ name: '', email: '', text: '' });
        setError('');
        setShow(false);
        console.log('email sent');
    };
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setContact({ ...contact, [name]: value });
    };
    return (
        <Col className="justify-content-center">
            <Container fluid>
                <Card
                    style={{
                        padding: '10px',
                        margin: 'auto',
                        width: '50vw',
                        height: '80vh',
                        textAlign: 'center',
                    }}
                >
                    <Card.Title>
                        Contact me! (not setup to send emails yet)
                    </Card.Title>
                    <Alert
                        show={show}
                        variant="danger"
                        onClose={() => setShow(false)}
                        dismissible
                    >
                        <Alert.Heading>{error}</Alert.Heading>
                    </Alert>
                    <Card.Body>
                        <Form>
                            <Form.Group style={margin}>
                                {/* <Form.Label>Name</Form.Label> */}
                                <Form.Control
                                    placeholder="your name"
                                    name="name"
                                    value={contact.name}
                                    onChange={handleChange}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group style={margin}>
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control
                                    placeholder="your@email.com"
                                    name="email"
                                    value={contact.email}
                                    onChange={handleChange}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group style={margin}>
                                <Form.Control
                                    placeholder="your message"
                                    as="textarea"
                                    rows={4}
                                    name="text"
                                    value={contact.text}
                                    onChange={handleChange}
                                ></Form.Control>
                            </Form.Group>
                        </Form>
                        <Button style={margin} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </Col>
    );
}
