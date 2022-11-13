import styles from './Timer.module.scss'

const Timer = props => {

  return (
    <div className={styles.timer}>
      {("0" + Math.floor(props.time / 3600000)).slice(-2)}:
      {("0" + Math.floor((props.time % 3600000) / 60000)).slice(-2)}: 
      {("0" + Math.floor((props.time % 60000) / 1000)).slice(-2)}. 
      {("00" + Math.floor(props.time % 1000)).slice(-3)}
    </div>
  );
};

export default Timer;