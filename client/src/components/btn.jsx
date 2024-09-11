export const BtnPrimary = ({ children, className = "", ...props }) => {
  return (
    <button
      type={props.type || "button"}
      className={`px-4 py-2 font-semibold tracking-widest text-white uppercase transition-colors duration-300 ease-in bg-black hover:bg-darkblue ${
        props.disabled ? `cursor-not-allowed opacity-50` : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const BtnSecondary = ({ children, className = "", ...props }) => {
  return (
    <button
      type={props.type || "button"}
      className={`px-4 py-2 font-semibold tracking-widest text-white uppercase transition-colors duration-300 ease-in bg-yellow hover:bg-white hover:text-yellow ${
        props.disabled ? `cursor-not-allowed opacity-50` : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const BtnWhite = ({ children, className = "", ...props }) => {
  return (
    <button
      type={props.type || "button"}
      className={`px-4 py-2 font-semibold tracking-widest text-white uppercase transition-colors duration-300 ease-in bg-transparent border-2 border-white hover:bg-white hover:text-yellow ${
        props.disabled ? `cursor-not-allowed opacity-50` : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
