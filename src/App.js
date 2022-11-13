import Container  from './components/Container/Container.js';
import Button from './components/Button/Button.js'
import Timer from './components/Timer/Timer.js';
import { useState} from 'react';

const App = () => {


  const [time, setTime] = useState('');
  const [timer, setTimer] = useState('');
  const formatedTime = {};
  
  const start = () => {
    console.log('start!')
    setInterval(() => {
    //setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
      formatTime(time);
    }, 1000)
  };

const formatTime = time =>
  formatedTime.hours = time;
  formatedTime.minutes = 0;
  formatedTime.seconds = 0;
  formatedTime.miliseconds = 666;

  start();


  return (
    <Container>
      <Timer hours={formatedTime.hours} minutes={formatedTime.minutes} seconds={formatedTime.seconds} miliseconds = {formatedTime.miliseconds} />
      <Button>start</Button>
      <Button>stop</Button>
      <Button>reset</Button>
    </Container>
  );
};

export default App;
