import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { PrimaryMenuItemFragmentFragment } from "../__generated__/graphql";

interface NavigationProps {
  menuItems: PrimaryMenuItemFragmentFragment[];
}

export default function Navigation({ menuItems }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile for initial state
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Only run on client
    if (typeof window !== "undefined") {
      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
      return () => window.removeEventListener("resize", checkIfMobile);
    }
  }, []);

  const handleDropdownToggle = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Group menu items by parent
  const parentMenuItems = menuItems.filter((item) => !item.parentId);
  const childMenuItems = menuItems.filter((item) => item.parentId);

  // Function to get child items for a parent
  const getChildItems = (parentId: string) => {
    return childMenuItems.filter((item) => item.parentId === parentId);
  };

  return (
    <div className={styles.navigationWrapper}>
      <button
        className={styles.mobileMenuToggle}
        onClick={toggleMobileMenu}
        aria-expanded={mobileMenuOpen}
        aria-controls="primary-navigation"
      >
        <span className={styles.srOnly}>Menu</span>
        <div
          className={`${styles.hamburger} ${
            mobileMenuOpen ? styles.active : ""
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <nav
        id="primary-navigation"
        className={`${styles.navigation} ${
          mobileMenuOpen ? styles.active : ""
        }`}
      >
        <ul className={styles.navList}>
          {parentMenuItems.map((item) => {
            const children = getChildItems(item.id);
            const hasChildren = children.length > 0;

            return (
              <li
                key={item.id}
                className={`${styles.navItem} ${
                  hasChildren ? styles.hasDropdown : ""
                }`}
              >
                <Link href={item.uri} className={styles.navLink}>
                  {item.label}
                </Link>

                {hasChildren && (
                  <>
                    <button
                      className={styles.dropdownToggle}
                      onClick={() => handleDropdownToggle(item.id)}
                      aria-expanded={activeDropdown === item.id}
                    >
                      <span className={styles.srOnly}>Toggle Submenu</span>
                      <svg
                        viewBox="0 0 20 20"
                        width="16"
                        height="16"
                        fill="currentColor"
                      >
                        <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" />
                      </svg>
                    </button>

                    <ul
                      className={`${styles.dropdown} ${
                        activeDropdown === item.id ? styles.active : ""
                      }`}
                    >
                      {children.map((child) => (
                        <li key={child.id} className={styles.dropdownItem}>
                          <Link
                            href={child.uri}
                            className={styles.dropdownLink}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
