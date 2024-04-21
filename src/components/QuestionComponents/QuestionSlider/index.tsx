import React, { FC, useEffect, useState } from "react";
type PropsType = {
  fe_id: string;
  props: {
    title: string;
    noText: string;
    yesText: string;
    curNum: number;
  };
};

const QuestionSlider: FC<PropsType> = ({ fe_id, props }) => {
  const [rangeValue, setRangeValue] = useState(0);
  const { title, noText, yesText, curNum } = props;
  useEffect(() => {
    setRangeValue(curNum);
  }, [curNum]);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setRangeValue(value);
    console.log(value);
  }
  return (
    <>
      <input type="hidden" name={fe_id} value={rangeValue} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>
          {title}: {rangeValue}
        </span>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{noText}</span>
          <span>{yesText}</span>
        </div>
        <input type="range" defaultValue={curNum} onChange={handleChange} />
      </div>
    </>
  );
};

export default QuestionSlider;
