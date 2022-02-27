import React, { FC } from "react";
import "./Message.css";

interface MessageProps {
  props?: object;
  name: string;
  help: string;
  phone: string | number;
};

export const Message: FC<MessageProps> = (props) => {
  return (
    <>
      <p className="message">
        {" "}
        Это сообщение сгенерировано специально для тебя, {props.name},
        поздравляю!
      </p>
      <p className="help">
        {" "}
        Для получени ядополнительной информации можешь обратиться к {props.help}
        , он тебе точно поможет! Его номер {props.phone}
      </p>
    </>
  );
};
