import { DefaultProps } from "../../ts/type";
import { cn } from "../../ts/util";

type ButtonProps = DefaultProps & { buttonHandler: VoidFunction };

const Button = ({ className, children, buttonHandler }: ButtonProps) => {
  return (
    <button
      className={cn(
        "border-black border rounded px-2 bg-black",
        "text-white",
        "cursor-pointer",
        ["hover:bg-inherit hover:text-inherit"],
        className
      )}
      onClick={buttonHandler}
    >
      {children}
    </button>
  );
};

export default Button;
