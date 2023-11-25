import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";

export type NavItemType = "regular" | "mobile";

export interface Props {
  type?: NavItemType;
}

export default function NavItems({ type = "regular" }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { newPath, setNewPath, targetPageClosedRef } = useContext(
    PageTransitionContext
  );
  const className =
    type === "regular" ? "regular-nav-items" : "mobile-nav-items";
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
              <Link
                className={`${item.path === pathname ? "selected" : ""}`}
                onClick={async (e) => {
                  e.preventDefault();
                  if (item.path === newPath || targetPageClosedRef?.current) {
                    return;
                  }
                  const targetPageClosed = new Promise<boolean>((resolve) => {
                    if (!targetPageClosedRef) {
                      resolve(false);
                      return;
                    }
                    targetPageClosedRef.current = () => {
                      resolve(true);
                    };
                  });
                  await setNewPath(item.path);
                  const result = await targetPageClosed;
                  if (!result) {
                    return;
                  }
                  router.push(item.path);
                }}
                href={item.path}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
