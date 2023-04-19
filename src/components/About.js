import React from 'react';
import { Col, Card, Container } from 'react-bootstrap';
export default function About() {
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
                    <Card.Title >About me!</Card.Title>
                    <Card.Body style={{ margin: 'auto',  }}>
                        <Card.Text>
                            Hello and welcome to my portfolio! Thank you for
                            stopping by! My name is Malik Kouyate and welcome to
                            my journey towards becoming a developer! Why a
                            developer you may ask? Well, all my life I have
                            always been intrigued by the process of having an
                            idea and navigating the neccesary steps to realize
                            it. This way of thinking has applied to various
                            passions and projects; from various cardboard crafts
                            to building up computers and bicycles this albeit
                            vague notion remains pervasive in my day to day.
                            With all of that being said, I have found that
                            computer programming really checks all of the boxes.
                            It seems that every idea can be turned into some
                            sort of program or utility through tinkering,
                            solving, and exploring. Theres nothing more
                            gratifying than cracking a difficult problem and to
                            be able to do that as a proffesion: tis the dream.
                            Anyway, Thanks again for visiting my website! Fairly
                            basic at the moment but I hope to spice it up as I
                            learn more!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </Col>
    );
}
