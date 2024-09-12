const CategoryCard = ({ children, className, ...props }) => {
  return (
    <div
      className={`h-[620px] w-[360px] relative flex flex-col items-center justify-center gap-5 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
export default CategoryCard;
