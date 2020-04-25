import React from 'react';

const Info = (props) => {
    setTimeout(()=> {
        props.history.push("./Contact");
            },1000);
    return (
        <div className="container"

        >
            <h4>I am Info</h4>
        </div>
    );
}

export  default Info;