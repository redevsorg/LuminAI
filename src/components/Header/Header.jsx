import '../../styles/App.css';
import './Header.css';
import getMode from '../../utils/getMode';
import { Link } from '@tanstack/react-router';

const Header = () => {
  const mode = getMode();
  const headerClass = ` p-4 ${mode === "dark" ? "header-dark text-white" : "header-light text-black"} hidden`;
  const navClass = `mt-2 ${mode === "dark" ? "header-text-dark text-white" : "header-text-light text-black"}`; // add fonts

  return (
    <header className={headerClass}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">LuminAI Innovate Scholars</h1>
        <nav className={navClass}>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/syllabus" className="mx-2">Syllabus</Link>
          <Link to="/staff" className="mx-2">Meet Our Staff</Link>
          <Link to="/inquiry" className="mx-2">Inquiry</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
