import React, { useState, FC } from "react";
import "./App.css";
import { Message } from "./components/Message/Message";
import { Chat } from "./components/Chat/Chat";
import { ChatsList } from "./components/ChatsList/ChatsList";
import moment from "moment";
import { nanoid } from "nanoid";
import { any } from "prop-types";

interface Messages {
  id: string | number;
  time: string;
  name: string;
  text: string;
};
/*
interface addMessageProps {
  id: string | number;
  time: string;
  name: string;
  text: string;
  messages: Message;
};

interface MessageProps {
  name: string;
  help: string;
  phone: string | number;
  text: string;
};*/

const defaultMess = [
  {
    id: "1",
    time: moment().format("MMMM Do YYYY, h:mm:ss a"),
    name: "Admin",
    text: "Hello, honey!",
  },
];

export const App: FC= () => {
  const [messages, setMess] = useState(defaultMess);

  const addMess= (text: string, name:string) => {
    setMess((prevMessages) => [
      ...prevMessages,
      {
        id: nanoid(),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        name,
        text,
      },
    ]);
    setTimeout(() => addBotMess(), 1500);
  };

  const addBotMess = () => {
    setMess((prevMessages) => [
      ...prevMessages,
      {
        id: nanoid(),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        name: "BOT",
        text: "Привет, это сообщение сгенерировано автоматически!",
      },
    ]);
  };

  type mess = Messages;

  return (
    <div className="App">
      <header className="App-header">
        Мое первое приложение
        <h3>Привет, Андрей</h3>
        <Message
          name={"Андрей"}
          help={"Игорю Ивановичу"}
          phone={"+7 777 777 77 77"}      />
        <div className="chat_chats">
        <ChatsList />
        <Chat messages={messages} addMess={addMess} />
        </div>
      </header>
    </div>
  );
}
