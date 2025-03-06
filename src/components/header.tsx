import React from "react";
import Link from "next/link";

interface MenuItem {
  id: string;
  label: string;
  path: string;
  parentId: string | null;
  children?: MenuItem[];
}

interface HeaderProps {
  siteTitle: string;
  siteDescription: string;
  menuItems: MenuItem[];
}

// Helper function to organize menu items into a hierarchical structure
const createMenuHierarchy = (menuItems: MenuItem[]): MenuItem[] => {
  const itemMap = new Map<string, MenuItem>();
  const rootItems: MenuItem[] = [];

  // Create a map of all items
  menuItems.forEach((item) => {
    itemMap.set(item.id, { ...item, children: [] });
  });

  // Organize items into hierarchy
  menuItems.forEach((item) => {
    const menuItem = itemMap.get(item.id)!;

    if (item.parentId) {
      const parent = itemMap.get(item.parentId);
      if (parent) {
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(menuItem);
      } else {
        rootItems.push(menuItem);
      }
    } else {
      rootItems.push(menuItem);
    }
  });

  return rootItems;
};

// Recursive component for rendering menu items
const MenuItems: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <Link href={item.path}>{item.label}</Link>
          {item.children && item.children.length > 0 && (
            <ul>
              <MenuItems items={item.children} />
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

const Header: React.FC<HeaderProps> = ({
  siteTitle,
  siteDescription,
  menuItems,
}) => {
  const hierarchicalMenuItems = createMenuHierarchy(menuItems);

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-branding">
          <Link href="/">
            <h1 className="site-title">{siteTitle}</h1>
          </Link>
          {siteDescription && (
            <p className="site-description">{siteDescription}</p>
          )}
        </div>

        <nav className="site-navigation">
          {menuItems && menuItems.length > 0 ? (
            <ul className="primary-menu">
              <MenuItems items={hierarchicalMenuItems} />
            </ul>
          ) : (
            <ul className="primary-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
