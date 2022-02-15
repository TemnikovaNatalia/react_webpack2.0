import React from 'react'
import style from './Message.css'

export const Message = (props) => {
    return (
        <>
            <p className='message'> Это сообщение сгенерировано специально для тебя, {props.name}, поздравляю!</p>
            <p className='help'> Для получени ядополнительной информации можешь обратиться к {props.help}, он тебе точно поможет! Его номер {props.phone}</p>
        </>
    )
}
