import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunnig] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setCount((state) => state + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [running]);

  const onBtnClick = () => {
    setRunnig((state) => !state);
  };

  const onResetClick = () => {
    setCount(0);
    setRunnig(false);
  };

  return (
    <>
      <div className="card">count: {count}</div>
      <button onClick={onBtnClick}>{running ? 'Pause' : 'Start'}</button>
      <button onClick={onResetClick}>Reset</button>
    </>
  );
}

export default App;
