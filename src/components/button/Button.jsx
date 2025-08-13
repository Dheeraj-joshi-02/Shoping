const Button = ({ text, className, onClick, children, ariaLabel }) => {
  return (
    <button className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
