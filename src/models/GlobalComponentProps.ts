type ButtonProps = {
  text: string;
  to: string;
  withIcon?: boolean;
};

type TextProps = {
  text: string;
};

type CardLocationProps = {
  name: string;
  price: number;
};

type CardMenuProps = {
  name: string;
  description: string;
  image: string;
}

export type { ButtonProps, TextProps, CardLocationProps, CardMenuProps };
