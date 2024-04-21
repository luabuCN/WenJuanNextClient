import React, { FC } from "react";
import styles from "./index.module.scss";
type PropsType = {
  fe_id: string;
  props: {
    title: string;
    options: Array<{
      value: string;
      text: string;
    }>;
    value: string;
    isVertical?: boolean;
  };
};

const QuestionRadio: FC<PropsType> = ({ fe_id, props }) => {
  const { title, options = [], value, isVertical } = props;
  return (
    <>
      <p>{title}</p>
      <ul className={styles.list}>
        {options.map((opt, index) => {
          const { value: val, text } = opt;
          //判断竖向还是横向
          let liClassName = "";
          if (isVertical) liClassName = styles.verticalItem;
          else liClassName = styles.horizontalItem;
          return (
            <li key={index} className={liClassName}>
              <label>
                <input
                  type="radio"
                  name={fe_id}
                  value={val}
                  defaultChecked={val === value}
                />
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionRadio;
