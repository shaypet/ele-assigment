import "./box-container.scss";
interface BoxContainerProps {
  addTocClassName?: string;
  children: React.ReactNode;
}
const BoxContainer = ({
  addTocClassName,
  children,
  ...props
}: BoxContainerProps) => {
  return (
    <div className={"app-box-container " + (addTocClassName || "")} {...props}>
      {children}
    </div>
  );
};

export default BoxContainer;
