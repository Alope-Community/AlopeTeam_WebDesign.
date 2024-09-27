import { TextProps } from "../../models/GlobalComponentProps";

function Title({ text }: TextProps) {
  return <h3 className="text-3xl font-semibold text-gray-200">{text}</h3>;
}

function Subtitle({ text }: TextProps) {
  return <p className="font-medium text-red-500 uppercase">{text}</p>;
}

export { Title, Subtitle };
