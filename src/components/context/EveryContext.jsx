import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const EveryContext = createContext();

export default function EveryProvider({ children }) {
  const [list, setList] = useState([
    {
      id: uuidv4(),
      item: "의료비",
      price: 25000,
      detail: "귀막힘",
      date: "2024-05-24",
    },
    {
      id: uuidv4(),
      item: "식비",
      price: 20000,
      detail: "족발",
      date: "2024-05-20",
    },
    {
      id: uuidv4(),
      item: "식비",
      price: 35000,
      detail: "술값",
      date: "2024-05-04",
    },
    {
      id: uuidv4(),
      item: "미용",
      price: 55000,
      detail: "파마",
      date: "2024-03-24",
    },
  ]);

  const [currentMonth, setCurrentMonth] = useState(
    `${new Date().getMonth() + 1}`
  );
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");


  return <EveryContext.Provider value={{ list, setList, currentMonth, setCurrentMonth, item, setItem,
price, setPrice, detail, setDetail, date, setDate }}>
    {children}</EveryContext.Provider>;
}
