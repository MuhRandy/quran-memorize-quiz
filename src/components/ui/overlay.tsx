import { defaultProps } from "../../ts/type";
import { cn } from "../../ts/util";

type OverlayProps = defaultProps & {
  isShow: boolean;
};

const Overlay = ({ children, className, isShow }: OverlayProps) => {
  return (
    <div
      className={cn(
        "fixed top-0 right-0 left-0",
        "bg-black/70 py-5 min-h-screen",
        "flex justify-center items-center",
        "invisible",
        {
          "visible absolute": isShow,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Overlay;
