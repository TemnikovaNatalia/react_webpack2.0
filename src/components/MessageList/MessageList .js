import React from 'react';

export function MessageList({ messages }) {
  return (
  <ul>
    {messages.map((message) => (
      <li key={message.id}>
        {message.author}: {message.text}
      </li>
    ))}
  </ul>
  )
};