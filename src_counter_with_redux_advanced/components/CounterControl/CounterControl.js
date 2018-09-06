import React from 'react';

import classes from  './CounterControl.css';

const counterControl = (props) => {
    return (
        <div className={classes.CounterControl} onClick={props.clicked}>
        {props.label}
        </div>
    );
    
};

export default counterControl;