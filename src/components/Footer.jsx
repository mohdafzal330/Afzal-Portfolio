import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name} · Designed &amp; built with care in Hyderabad</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}
