import React from "react";

import ToddImg from '../../res/todd-empty-phone.png';

import './Todd.css';

export default function Todd(props) {
    return (
        <>
            <img src={ToddImg} alt='todd' className="todd-img" />
        </>
    );
}