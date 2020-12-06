import React, {Fragment} from 'react';

const ExpViewerButton = (props) => {
    const { task } = props;
    if (task.button == true){
        return( 
            <button onClick={null}>-</button>
        );
    }
    else { return null;}
}

export default ExpViewerButton;