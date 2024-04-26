import { cn } from "../../ts/util";
import { defaultProps } from "../../ts/type";

type CardProps = defaultProps;
type H1Props = defaultProps;
type H2Props = defaultProps;

const Card = ({ children, className }: CardProps) => {
  return (
    <article
      className={cn(
        "shadow-md rounded-xl p-3 max-w-[400px] border",
        "flex flex-col items-center gap-3",
        className
      )}
    >
      {children}
    </article>
  );
};

const H1 = ({ children, className }: H1Props) => {
  return <h1 className={cn("font-bold text-xl", className)}>{children}</h1>;
};

const H2 = ({ children, className }: H2Props) => {
  return <h2 className={cn("font-bold text-lg", className)}>{children}</h2>;
};

Card.H1 = H1;
Card.H2 = H2;

export default Card;
