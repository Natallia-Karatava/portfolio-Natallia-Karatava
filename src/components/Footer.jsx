import { FaBehance } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>
          Natallia Karatava © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://github.com/Natallia-Karatava"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ width: "24px", height: "24px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/natallia-karatava-56247a186?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ width: "24px", height: "24px" }} />
        </a>
        <a
          href="https://www.behance.net/natalliakaratava"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance style={{ width: "24px", height: "24px" }} />
        </a>
      </nav>
    </footer>
  );
};
export default Footer;
