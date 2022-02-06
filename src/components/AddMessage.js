import React from "react";
import Proptypes from 'prop-types';

const AddMessage = (props) => {
    let input

    return (
        <section id='new-message' className="new-message ">
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.dispatch(input.value, 'Me')
                        input.value = ''
                    }
                }}
                type='text'
                 ref = { node => {
                     input = node;
                 }} 
                />
        </section>


    )
}

AddMessage.propTypes = {
    dispatch: Proptypes.func.isRequired
}

export default AddMessage;