import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import HeaderForm from "../components/HeaderForm";
import Input from "../components/Input";
import DateInput from "../components/DateInput";
import MonthForm from "../components/MonthForm";
import AddButton from "../components/AddButton";
import List from "../components/List";
import { EveryContext } from "../components/context/EveryContext";

const Home = () => {
  const {list, setList, currentMonth} = useContext(EveryContext);
  console.log("Every:", list);
  const filteredList = list.filter(item => {
    return parseInt(item.date.split("-")[1]) === parseInt(currentMonth);
  });

  const handleAdd = (e) => {
    e.preventDefault();
    if(date.trim() === "" || item.trim() === "" || price.trim() === "" || detail.trim() === "") {
      alert("빈 칸을 채워주세요");
      return;
    }

    const newList = {
      id: uuidv4(),
      item: item,
      price: Number(price),
      detail: detail,
      date: date,
    };

    const updateList = [...list, newList];
    setList(updateList);
    setItem("");
    setPrice("");
    setDetail("");
    setDate("");
  };

  return (
    <>
      <HeaderForm onSubmit={handleAdd}>
        <DateInput/>
        <Input/>
        <AddButton>등록</AddButton>
      </HeaderForm>
      <MonthForm/>
      <List filteredList={filteredList}/>
    </>
  );
};

export default Home;