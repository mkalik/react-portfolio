import React from 'react';
import gh from '../github-mark.png';
export default function Footer() {
    return (
        <footer style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="https://github.com/mkalik">
                <img src={gh} width={30} height={30} alt="" />
            </a>
        </footer>
    );
}
