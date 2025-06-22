import { useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import { cn } from '../../lib/utils';

const NAV = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="home" smooth duration={600} className="text-2xl font-bold">
          Arnold Kebaso
        </Link>

        <nav className="hidden md:flex gap-8">
          {NAV.map(id => (
            <Link
              key={id}
              to={id}
              smooth duration={600} offset={-80}
              className="cursor-pointer hover:text-brand"
            >
              {id === 'projects' ? 'Latest Work' : id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          <MenuIcon fontSize="inherit" />
        </button>
      </div>

      {/* mobile overlay */}
      <div className={cn(
        'md:hidden bg-surface flex flex-col gap-4 py-4 transition-all',
        open ? 'translate-y-0' : '-translate-y-full'
      )}>
        {NAV.map(id => (
          <Link
            key={id}
            to={id}
            smooth duration={600} offset={-70}
            onClick={() => setOpen(false)}
            className="px-6 py-2 hover:bg-surface/60"
          >
            {id === 'projects' ? 'Latest Work' : id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}
      </div>
    </header>
  );
}
