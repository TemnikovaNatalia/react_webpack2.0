import React, { useEffect, useState, useRef, FC } from "react";
import "./Chat.css";
import { Button, Input, InputBase } from "@mui/material";
import { Message } from "../Message/Message";
import { string } from "prop-types";

interface Messages {
  id?: string;
  time?: string;
  name?: string;
  text?: string;
};

interface Map extends Messages{
  map(arg0: (mess: Messages) => JSX.Element): React.ReactNode;
};

interface ChatProps {
  messages: Map;
  addMess: (text: string, name: string) => void;
  name?: string;
  help?: string;
  phone?: string | number;
};

export const Chat: FC<ChatProps> = ({ messages, addMess }) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const handleText = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addMess(text, name);
    setText(""); //очищаю только поле сообщения, так как предполагается, что пользователь не поменялся и имя повторно вводить не требуется
  };

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="Chat">
      <h3>Добро пожаловать в ЧАТ!</h3>
      <ul>
        {messages.map((mess: Messages) => (
          <li key={mess.id}>
            {mess.time} пользователь <span>{mess.name}</span> написал:{" "}
            {mess.text}
          </li>
        ))}
      </ul>
      <form className="FormChat" onSubmit={handleText}>
        <Input
          type="text"
          onChange={(ev) => setName(ev.target.value)}
          placeholder="Ваше имя"
        />
        <Input
          className="MainInput"
          value={text}
          type="text"
          onChange={(ev) => setText(ev.target.value)}
          placeholder="Введите сообщение"
          ref={inputRef}
          inputRef={inputRef}
          autoFocus
        />
        <Button variant="contained" color="success" type="submit">
          {" "}
          Отправить сообщение
        </Button>
      </form>
    </div>
  );
};
