import React from 'react';
import { Row } from 'react-bootstrap';
import Project from '../pages/Project';
import jate from '../jateScreenShot.png';
import sbook from '../homepage.png';
import read from '../readme.png';
export default function Portfolio() {
    const projects = [
        {
            title: 'Service Booker',
            image: sbook,
            desc: 'An application that makes booking services a breeze',
            link: ' https://github.com/mkalik/service-booker-application',
        },
        {
            title: 'PWA Text editor',
            image: jate,
            desc: 'A downloadable text editor that can be used offline',
            link: ' https://github.com/mkalik/progressive-text-editor',
        },
        {
            title: 'README generator',
            image: read,
            desc: 'A command line readme generator',
            link: 'https://github.com/mkalik/module9-README-generator',
        },
    ];

    return (
        <div>
            <Row className="justify-content-md-center">
                {projects.map((proj) => (
                    <Project props={proj} />
                ))}
            </Row>
        </div>
    );
}
