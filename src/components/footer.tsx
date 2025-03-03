import styles from "./footer.module.css";
import Link from "next/link";
import { PrimaryMenuItemFragmentFragment } from "../__generated__/graphql";

interface FooterProps {
  footerMenuItems?: PrimaryMenuItemFragmentFragment[];
}

export default function Footer({ footerMenuItems }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerNav}>
          {footerMenuItems && footerMenuItems.length > 0 && (
            <nav>
              <ul>
                {footerMenuItems.map((item) => (
                  <li key={item.id}>
                    <Link href={item.uri}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <div className={styles.footerInfo}>
          <p>
            © {currentYear} • Powered by{" "}
            <a
              href="https://wpengine.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              WP Engine
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
