const CategoryCard = ({ children, className, ...props }) => {
  return (
    <div
      className={`h-[620px] relative flex flex-col w-full items-center justify-center gap-5 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
export default CategoryCard;
