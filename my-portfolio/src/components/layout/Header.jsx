import { useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';

const NAV = ['home','about','experience','skills','projects','achievements','contact'];

export default function Header() {
  const [open,setOpen]=useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="home" smooth className="text-2xl font-bold">Arnold Kebaso</Link>

        <nav className="hidden md:flex gap-8">
          {NAV.map(id=>(
            <Link key={id} to={id} smooth offset={-80}
              className="capitalize hover:text-brand cursor-pointer"
            >
              {id}
            </Link>
          ))}
        </nav>

        <button className="md:hidden" onClick={()=>setOpen(o=>!o)}>
          <MenuIcon fontSize="large"/>
        </button>
      </div>

      <div className={`md:hidden bg-surface transition-all ${open?'block':'hidden'}`}>
        {NAV.map(id=>(
          <Link key={id} to={id} smooth offset={-70} onClick={()=>setOpen(false)}
            className="block px-6 py-3 capitalize hover:bg-surface/60"
          >
            {id}
          </Link>
        ))}
      </div>
    </header>
  );
}
