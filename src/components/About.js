import React from 'react';
import ColorChanger from '../HOC/ColorChanger';

const About = () =>{
    return (
        <div className="container">
            <h4 className='center'> About </h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quo, minima ducimus, repellat at qui dolore veritatis nulla commodi aperiam itaque voluptatum asperiores dolorum. Unde in ea cupiditate odio qui.</p>
        </div>
    )
}

export default ColorChanger(About);