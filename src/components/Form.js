import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    state = {}

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-2">
                    <form action="">
                        <h2>Find news by category</h2>
                        <div className="input-field col s12 m8">
                            <select name="category" id="category">
                                <option value="general">General</option>
                                <option value="business">Business</option>
                                <option value="science">Science</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                                <option value="health">Health</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>   
        );
    }
}

Form.propTypes = {

};

export default Form;