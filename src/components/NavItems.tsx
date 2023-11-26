import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { NavBarContext } from "@/components/NavBar";
import { PageKeys } from "@/types";

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
  const { setDisplayMenu } = useContext(NavBarContext);
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
    {
      label: "Skills",
      path: "/skills",
    },
    {
      label: "Education",
      path: "/education",
    },
    {
      label: "Projects",
      path: "/projects",
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
                  const pageKeys = Object.values(PageKeys);
                  if (!pageKeys.includes(pathname as PageKeys)) {
                    router.push(item.path);
                    return;
                  }
                  if (item.path === newPath || targetPageClosedRef?.current) {
                    return;
                  }
                  setDisplayMenu(false);
                  const targetPageClosed = new Promise<boolean>((resolve) => {
                    if (!targetPageClosedRef) {
                      resolve(false);
                      return;
                    }
                    const timeout = setTimeout(() => {
                      resolve(false);
                      if (targetPageClosedRef) {
                        targetPageClosedRef.current = null;
                      }
                    }, 2000);
                    targetPageClosedRef.current = () => {
                      resolve(true);
                      clearTimeout(timeout);
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
