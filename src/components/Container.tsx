import cn from "@/utils/cn";
import { ReactNode } from "react";

export default function Container({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: String;
}) {
  return (
    <div className={cn(classNames, "max-w-4xl px-4 md:px-8")}>{children}</div>
  );
}
