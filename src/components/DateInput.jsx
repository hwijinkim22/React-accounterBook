import React, { useState } from 'react'

const DateInput = () => {
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  return (
    <div>
      날짜: <input 
      type='date'
      value={date}
      onChange={(e) => {
        setDate(e.target.value);
      }}
      >
      </input>
    </div>
  )
}

export default DateInput;