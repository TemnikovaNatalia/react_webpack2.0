import React, { useCallback, useEffect, useState } from 'react';
import { Form } from '../components/Form/Form ';
import { MessageList } from '../components/MessageList/MessageList ';
import { nanoid } from 'nanoid';
import { Link, useParams, Redirect } from 'react-router-dom';


const defaultMessages = {
  chat1: [
    {
      id: '1',
      author: 'Geekbrains',
      text: 'Добро пожаловать в чат №1',
    },
  ],
  chat2: [
    {
      id: '1',
      author: 'Geekbrains',
      text: 'Добро пожаловать в чат №2',
    },
  ],
  chat3: [
    {
      id: '1',
      author: 'Geekbrains',
      text: 'Добро пожаловать в чат №3',
    },
  ],
};

const chats = [
  {
    id: '1',
    name: 'Чат 1 Новости',
  },
  {
    id: '2',
    name: 'Чат 2 Предложения',
  },
  {
    id: '3',
    name: 'Чат 3 О разном',
  },
];

export function Chats() {
  const [messages, setMessages] = useState(defaultMessages);
  const { chatId } = useParams();

  const handleSendMessage = useCallback(
    ({ text, author }) => {
      setMessages((prevMessages) => {
        return {
          ...prevMessages,
          [`chat${chatId}`]: [
            ...prevMessages[`chat${chatId}`],
            {
              id: nanoid(),
              author,
              text,
            },
          ],
        };
      });
    },
    [chatId]
  );

  useEffect(() => {
    if (
      messages[`chat${chatId}`]?.length &&
      messages[`chat${chatId}`][messages[`chat${chatId}`].length - 1].author ===
        'User'
    ) {
      const timeout = setTimeout(
        () =>
          handleSendMessage({
            text: 'Привет, я БОТ! Я пишу тебе за последним сообщением!',
            author: 'BOT',
          }),
        1500
      );

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages, chatId, handleSendMessage]);

  if (!messages[`chat${chatId}`]) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
      <MessageList messages={messages[`chat${chatId}`]} />
      <Form addMessage={handleSendMessage} />
    </>
  );
};