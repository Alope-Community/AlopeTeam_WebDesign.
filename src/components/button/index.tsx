import { Link } from "react-router-dom";
import { ChevronRight } from "../icons/chevron";
import { ButtonProps } from "../../models/GlobalComponentProps";

export default function Button({ text, to, withIcon = false }: ButtonProps) {
  return (
    <Link
      to={to}
      className="py-3 px-7 rounded-md bg-red-500 hover:bg-red-500/80 text-white text-sm inline-flex items-center gap-2 justify-center active:scale-95"
    >
      {text}
      {withIcon && <ChevronRight myClass="size-4" />}
    </Link>
  );
}
