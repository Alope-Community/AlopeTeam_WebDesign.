type ButtonProps = {
  text: string;
  to: string;
  withIcon?: boolean;
};

type TextProps = {
  text: string;
};

type CardMenuProps = {
  name: string;
  description: string;
  image: string;
};

type CardLocationProps = {
  name: string;
  image: string;
};

type CardBenefitProps = {
  title: string;
  image: string;
};

type ListFooterProps = {
  title: string;
  description: string;
};

export type {
  ButtonProps,
  TextProps,
  CardLocationProps,
  CardMenuProps,
  CardBenefitProps,
  ListFooterProps,
};
