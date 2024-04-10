import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="my-12 bg-gradient-to-r from-accent to-destructive bg-clip-text p-1 text-center text-xl font-bold leading-tight tracking-tight text-transparent dark:to-muted md:text-left md:text-xl md:leading-none lg:text-7xl">
      {children}
    </h1>
  );
}
