import './Time.css';
import { useState, useEffect } from 'react';

function Time(props) {
  return <div id="maint">
    <h1>Текущие время</h1>
    <p>{props.time}</p>
  </div>
}

export function Clockt(props) {
  const [time, setTime] = useState("")

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])

  return <Time time={time} />
}


export default Time;
