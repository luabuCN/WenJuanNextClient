import React, { CSSProperties, FC } from "react";

type PropsType = {
  text: string;
  isCenter?: boolean;
};
const QuestionParagraph: FC<PropsType> = ({ text, isCenter }) => {
  //样式
  const style: CSSProperties = {};
  if (isCenter) style.textAlign = "center";

  //换行
  const textList = text.split("\n");

  return (
    <p>
      {textList.map((item, index) => {
        return (
          <span key={index}>
            {index > 0 && <br />}
            {item}
          </span>
        );
      })}
    </p>
  );
};

export default QuestionParagraph;
