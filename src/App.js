import Container  from './components/Container/Container.js';
import Button from './components/Button/Button.js'
import Timer from './components/Timer/Timer.js';
import { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  
  const start = () => {
    if(!timer){
      //console.log('start!')
      setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
      }, 1))}
  };

  const stop = () => {
    //console.log('stop!')
    clearInterval(timer);
    setTimer();
  };

  const reset = () => {
    if (timer){
      //console.log('reset w trakcie!');
      clearInterval(timer);
      setTime(0);
      setTimer(null);
      setTimer(setInterval(() => {
        setTime(prevValue => prevValue + 1);
        }, 1))
    }else{ 
      //console.log('reset!');
      setTime(0);
      setTimer(null);
    };
  };

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <Timer time={time} />
      <Button value={start}>start</Button>
      <Button value={stop}>stop</Button>
      <Button value={reset}>reset</Button>
    </Container>
  );
};

export default App;
