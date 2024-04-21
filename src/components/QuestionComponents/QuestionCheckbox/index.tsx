import React, { FC, useEffect, useState } from "react";
import Styles from "./index.module.scss";
type PropsType = {
  fe_id: string;
  props: {
    title: string;
    isVertical: boolean;
    list: Array<{
      value: string;
      text: string;
      checked: boolean;
    }>;
  };
};
const QuestionCheckbox: FC<PropsType> = ({ fe_id, props }) => {
  const { title, isVertical, list = [] } = props;
  const [selectValues, setSelectValues] = useState<string[]>([]);
  //初始化判断默认选中
  useEffect(() => {
    list.forEach((item) => {
      const { value, checked } = item;
      if (checked) {
        setSelectValues((selectValues) => selectValues.concat(value));
      }
    });
  }, [list]);
  function toggleChecked(value: string) {
    //已经选中取消选中
    if (selectValues.includes(value)) {
      setSelectValues((selectValues) =>
        selectValues.filter((val) => val !== value)
      );
    } else {
      setSelectValues(selectValues.concat(value));
    }
  }
  return (
    <>
      <p>{title}</p>
      <input
        type="hidden"
        name={fe_id}
        value={Array.from(new Set(selectValues)).join(",")}
      />
      <ul className={Styles.list}>
        {list.map((item, index) => {
          const { value, text, checked } = item;
          return (
            <li
              key={index}
              className={
                isVertical ? Styles.verticalItem : Styles.horizontalItem
              }
            >
              <label>
                <input
                  type="checkbox"
                  checked={selectValues.includes(value)}
                  onChange={() => toggleChecked(value)}
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

export default QuestionCheckbox;
