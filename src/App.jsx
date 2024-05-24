import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import HeaderForm from "./components/HeaderForm";
import Input from "./components/Input";
import DateInput from "./components/DateInput";
import MonthForm from "./components/MonthForm";
import AddButton from "./components/AddButton";
import List from "./components/List";

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(`${new Date().getMonth() + 1}`);

  const filteredList = list.filter(item => {
    return parseInt(item.date.split("-")[1]) === parseInt(currentMonth);
  });

  console.log(currentMonth);

  const handleAdd = () => {

    const newList = {
      id: uuidv4(),
      item: item,
      price: price,
      detail: detail,
      date: date,
    };

    setList([...list, newList]);
    setItem("");
    setPrice("");
    setDetail("");
    setDate("");
  };

  return (
    <>
      <HeaderForm>
        <DateInput date={date} setDate={setDate} />
        <Input date={date} setDate={setDate} item={item} setItem={setItem} price={price} setPrice={setPrice} detail={detail} setDetail={setDetail} />
        <AddButton handleAdd={handleAdd} />
      </HeaderForm>
      <MonthForm currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}/>
      <List filterList={filteredList}/>
    </>
  );
};

export default App;