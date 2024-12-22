import styles from './Button.module.scss';

type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className={styles.button} >
      {label}
    </button>
  );
};

export default Button;