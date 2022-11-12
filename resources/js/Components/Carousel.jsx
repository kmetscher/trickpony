import React, { useState, useEffect } from 'react';

export default function Carousel(props) {
    const thumbCount = props.images.length - 1;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(false);
    const thumbs = props.images.map((thumb, index) => {
        return (
            <img
                className={
                    index === currentIndex ?
                    "current-thumb" : "thumb"
                }
                src={thumb}
                key={index}
                onClick={(e) => {
                    setCurrentIndex(index)
                }
            }></img>
        );
    });
    useEffect(() => {
        const interval = setInterval(() => {
            setTransition(true);
            setTimeout(() => {
                if (currentIndex === thumbCount) {
                    setCurrentIndex(0);
                }
                else {
                    setCurrentIndex(currentIndex + 1);
                }
                setTransition(false);
            }, 500);
        }, 10000);
        return () => {
            clearInterval(interval);
        }
    }, [currentIndex]);
    return (
        <div className='carousel'>
            <img className={
                transition ?
                "focused-transition" : "focused"
            } src={props.images[currentIndex]}></img>
            <div className='thumbs'>
                {thumbs}
            </div>
        </div>
    );
}