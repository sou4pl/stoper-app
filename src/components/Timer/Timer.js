import styles from './Timer.module.scss'

const Timer = props => {
  return (
  <div className={styles.timer}>{props.hours}:{props.minutes}:{props.seconds}.{props.miliseconds}</div>
  );
};

export default Timer;