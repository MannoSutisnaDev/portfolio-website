import { useOutsideClick } from "@/hooks/useOutsideClick";
import { PropsWithChildren, useState } from "react";

interface Props extends PropsWithChildren {
  text: string;
}

export default function TooltipWrapper({ text, children }: Props) {
  const [display, setDisplay] = useState(false);
  const ref = useOutsideClick(() => setDisplay(false));
  return (
    <div
      ref={ref}
      className="tooltip-wrapper"
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      {display && <span className="tooltiptext">{text}</span>}
      {children}
    </div>
  );
}
