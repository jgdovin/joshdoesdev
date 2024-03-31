import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl md:text-xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-none my-12 text-center md:text-left bg-gradient-to-r from-accent to-destructive dark:to-muted text-transparent bg-clip-text">
      {children}
    </h1>
  );
}
