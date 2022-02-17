import React, { useState } from "react";
import "./App.css";
import { Message } from "./components/Message/Message.jsx";
import { Chat } from "./components/Chat/Chat.jsx";
import moment from "moment";
import { nanoid } from "nanoid";

const defaultMess = [
  {
    id: 1,
    time: moment().format("MMMM Do YYYY, h:mm:ss a"),
    name: "Admin",
    text: "Hello, honey!",
  },
];

export function App() {
  const [messages, setMess] = useState(defaultMess);

  const addMess = (text, name) => {
    setMess((prevMessages) => [
      ...prevMessages,
      {
        id: nanoid(),
        name,
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
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
        name: "BOT",
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        text: "Привет, это сообщение сгенерировано автоматически!",
      },
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">
        Мое первое приложение
        <h3>Привет, Андрей</h3>
        <Message
          name={"Андрей"}
          help={"Игорю Ивановичу"}
          phone={"+7 777 777 77 77"}
        />
        <Chat messages={messages} addMess={addMess} />
      </header>
    </div>
  );
}
