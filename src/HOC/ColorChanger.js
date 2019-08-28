import React from 'react';

const ColorChanger = (WrappedComponent) =>{
    const color = ['red', 'blue', 'green', 'yellow', 'pink', 'purple']
    const randomColor = color[Math.floor(Math.random() * 5)]
    // <div className = "red-text"> </div>
    const colorText = randomColor+'-text';

    return (props) => {
        return(
            <div className={colorText}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default ColorChanger;