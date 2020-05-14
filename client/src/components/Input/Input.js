import React from 'react';
import './Input.css';

const Input = ({ sendMessage, setMessage, message}) => (
    <form className="form">
        <input
            className="input"
            type="text"
            placeholder="type a message..."
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button
            className="sendButton"
            onClick={(event) => sendMessage(event)}
        >
            Send
        </button>
    </form>
);

export default Input;