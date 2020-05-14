import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join Room</h1>
                <div><input placeholder="Name" type="input" onChange={(e) => setName(e.target.value)} className="joinInput" /></div>
                <div><input placeholder="Room" type="input mt-20" onChange={(e) => setRoom(e.target.value)} className="joinInput" /></div>
                <Link onClick={(e) => (!name || !room)? e.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="Submit"> Jump Right In!!</button>
                </Link>
            </div>
        </div>
    )
};

export default Join;