import { usePathname } from "next/navigation";

export type NavItemType = "regular" | "mobile";

export interface Props {
  type?: NavItemType;
}

export default function NavItems({ type = "regular" }: Props) {
  const className =
    type === "regular" ? "regular-nav-items" : "mobile-nav-items";
  const pathname = usePathname();
  const items: {
    label: string;
    path: string;
  }[] = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Experience",
      path: "/experience",
    },
  ];
  return (
    <nav className={`nav-items ${className}`}>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={`nav-${index}`}>
              <a
                className={`${item.path === pathname ? "selected" : ""}`}
                href={item.path}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
