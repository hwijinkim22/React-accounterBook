import React from "react";
import HeaderForm from "./components/HeaderForm";
import Input from "./components/Input";
import DateInput from "./components/DateInput";
import MonthForm from "./components/MonthForm";
import AddButton from "./components/AddButton";

const App = () => {

  return (
    <>
 
      <HeaderForm>
        <DateInput/>
        <Input/>
        <AddButton/>
      </HeaderForm>
      <MonthForm/>
         
    </>
  );
};

export default App;
