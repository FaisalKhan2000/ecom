export const BtnPrimary = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 font-semibold tracking-widest text-white uppercase transition-colors duration-300 ease-in bg-black hover:bg-darkblue"
      {...props}
    >
      {children}
    </button>
  );
};

export const BtnSecondary = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 font-semibold tracking-widest text-white uppercase transition-colors duration-300 ease-in bg-yellow hover:bg-white hover:text-yellow"
      {...props}
    >
      {children}
    </button>
  );
};

export const BtnWhite = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 font-semibold tracking-widest text-white uppercase transition-colors duration-300 ease-in bg-transparent border-2 border-white hover:bg-white hover:text-yellow"
      {...props}
    >
      {children}
    </button>
  );
};
