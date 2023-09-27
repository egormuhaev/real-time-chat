import { memo, useMemo } from "react";
import { InputMessageProps } from "../types/FormProps";
import styles from "./InputMessage.module.scss";

export const InputMessage: React.FC<InputMessageProps> = memo(
  ({ messages }) => {
    const messageList = useMemo(
      () =>
        messages
          .filter((m) => !m.status)
          .map(({ message }, index) => <p key={index}>{message}</p>),
      [messages]
    );
    return <div className={styles.InputMessage}>{messageList}</div>;
  }
);
