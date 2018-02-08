import React from 'react';
import { withRouter } from 'react-router-dom';

const Message = ({ message, history }) => (
    <>
        <div>{message || "ERROR PLEASE ENTER MESSAGE TO RENDER IT!!!"}</div>
        <button onClick={() => history.push('/messages/create')}>Enter Message</button>
    </>
)


export default withRouter(Message);