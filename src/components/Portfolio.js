import React from 'react';
import { Row } from 'react-bootstrap';
import Project from '../pages/Project';
export default function Portfolio() {
    const projects = [
        {
            title: 'Service Booker',
            image: '#',
            desc: 'An application that makes booking services a breeze',
            link: ' https://github.com/mkalik/service-booker-application',
        },
        {
            title: 'PWA Text editor',
            image: '#',
            desc: 'A downloadable text editor that can be used offline',
            link: ' https://github.com/mkalik/progressive-text-editor',
        },
        {
            title: 'README generator',
            image: '#',
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
