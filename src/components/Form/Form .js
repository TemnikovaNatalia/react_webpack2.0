import React, { useState } from 'react';
import { Input, Button } from '@mui/material';

export function Form({ addMessage }) {
  const [text, setText] = useState('');

  function handleText (ev) {
    ev.preventDefault();
    addMessage({
      text,
      author: 'User',
    });
    setText('');
  };

  return (
    <form onSubmit={handleText}>
      <Input value={text} onChange={(ev) => setText(ev.target.value)} />

      <Button variant="contained" type="submit">
        Send
      </Button>
    </form>
  );
};
