import React, { useContext, useState } from "react";
import { EveryContext } from "./context/EveryContext";

const DateInput = () => {
  const {date, setDate} = useContext(EveryContext);
  console.log(date);
  return (
    
      <div>
        날짜:{" "}
        <input
          type="text"
          value={date}
          placeholder="YYYY-MM-DD"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input>
      </div>
  );
};

export default DateInput;
