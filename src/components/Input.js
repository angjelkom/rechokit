import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Input extends Component {

    state = { value: ''}

    onSubmit = event => {
        event.preventDefault();

        const { renderMessage, history } =  this.props;

        renderMessage(this.state.value);
        history.replace('/messages');
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.value} onChange={event => this.setState({value: event.target.value})} autoFocus />
                <input type="submit" value="Render Message" />
            </form>
        )
    }
}

export default withRouter(Input);