import { render } from '@testing-library/react';
import React, {Fragment} from 'react';

class ExpViewerButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { task } = this.props;

        if (task.button == true){
            return( 
                <button onClick={this.props.onClick}>-</button>
            );
        }
        else { return null;}
    };
};

export default ExpViewerButton;