import React from 'react';
import style from './App.css';
import { Message } from './components/Message/Message.jsx';

export function App() {
 return (
   <div className="App">
     <header className="App-header">
       Мое первое приложение
       <h3>Привет, Анатолий</h3>
       <Message name={'Анатолий'} help={'Игорю Ивановичу'} phone={'+7 777 777 77 77'} />
     </header>
   </div>
 );
}

