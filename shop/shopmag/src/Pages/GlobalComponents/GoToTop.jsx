import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';

export default function GoToTop() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };
    window.addEventListener('scroll', toggleVisible);
    return (
        <Button style={{ position: 'fixed', bottom: '50px', right: '50px', zIndex: '100' }}>
            <span style={{ backgroundColor: 'black', color: 'white', width: '100%' }}>
                <KeyboardArrowUpIcon onClick={scrollToTop}
                    style={{ display: visible ? 'inline' : 'none', transform: "translateY(3px)" }} />
            </span>
        </Button>
    );
}
