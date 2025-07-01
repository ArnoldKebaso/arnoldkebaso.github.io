import { useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';

const NAV = [
  'home',
  'about',
  'experience',
  'skills',
  'projects',
  'achievements',
  'contact',
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/80 backdrop-blur">
      <div className="container flex items-center justify-between px-6 py-4">
        <Link to="home" smooth duration={600} className="text-2xl font-bold text-gray-100">
          Arnold&nbsp;Kebaso
        </Link>

        {/* desktop nav */}
        <nav className="hidden lg:flex gap-8 text-gray-300 text-lg">
          {NAV.map((id) => (
            <Link
              key={id}
              to={id}
              smooth
              offset={-80}
              duration={600}
              className="capitalize hover:text-brand cursor-pointer"
            >
              {id}
            </Link>
          ))}
        </nav>

        {/* mobile burger */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <MenuIcon fontSize="large" className="text-gray-200" />
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="lg:hidden bg-surface">
          {NAV.map((id) => (
            <Link
              key={id}
              to={id}
              smooth
              offset={-70}
              duration={600}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-gray-200 capitalize hover:bg-surface/60"
            >
              {id}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
