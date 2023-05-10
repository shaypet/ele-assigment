import "./input.scss";
type AppInputProps = {
  addTocClassName?: string;
};

const AppInput = ({
  addTocClassName,
  ...props
}: AppInputProps & React.ComponentPropsWithoutRef<"input">) => {
  return (
    <input className={"app-input " + (addTocClassName || "")} {...props} />
  );
};
export default AppInput;
