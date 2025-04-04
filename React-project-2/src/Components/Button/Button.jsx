import styles from "./Button.module.css";

const Button = (props) => {
  const { isSubmit, icon, text, ...rest } = props;
  return (
    <>
      <button
        {...rest}
        className={isSubmit ? styles.submit_btn : styles.button_style}
      >
        {icon}
        {text}
      </button>
    </>
  );
};

export default Button;
