import React, { useState } from 'react';
import './Chat.css';

export function Chat({ messages, setMess, addMess}) {
    const [text, setText] = useState('');
    const [name, setName] = useState('');

    const handleText = (ev) => {
        ev.preventDefault();
        addMess(text, name);
        setText(''); //очищаю только поле сообщения, так как предполагается, что пользователь не поменялся и имя повторно вводить не требуется
    };

    return (
       <div className="Chat">
        <h3>Добро пожаловать в ЧАТ!</h3>
    <ul>
        {messages.map(mess => 
            <li key={mess.id}>
            {mess.time} пользователь <span>{mess.name}</span> написал: {mess.text}
            </li>)}
    </ul>
    <form className="FormChat"onSubmit={handleText}>
        <input type="text" onChange={ev => setName(ev.target.value)} placeholder="Ваше имя"/>
        <input className='MainInput' value={text} type="text" onChange={ev => setText(ev.target.value)} placeholder="Введите сообщение" />
        <button type="submit">Отправить сообщение</button>
    </form>
    </div>);
}
