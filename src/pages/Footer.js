import React from 'react';
import gh from '../github-mark.png';
const style = {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '15px',
};
export default function Footer() {
    return (
        <footer style={style}>
            <a href="https://github.com/mkalik">
                <img src={gh} width={30} height={30} alt="" />
            </a>
        </footer>
    );
}
