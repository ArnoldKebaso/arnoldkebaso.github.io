import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GradientText from '../ui/GradientText';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-surface/95 backdrop-blur-md border-b border-brand/20 shadow-lg' 
          : 'bg-surface/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between px-6 py-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="home" smooth duration={600} className="text-2xl font-bold cursor-pointer">
            <GradientText gradient="brand">Arnold Kebaso</GradientText>
          </Link>
        </motion.div>

        {/* desktop nav */}
        <nav className="hidden lg:flex gap-8 text-gray-300 text-lg">
          {NAV.map((id, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={id}
                smooth
                offset={-80}
                duration={600}
                className="capitalize hover:text-brand cursor-pointer relative group transition-colors duration-300"
              >
                {id}
                {/* Underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* mobile burger */}
        <motion.button 
          className="lg:hidden relative z-10"
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence>
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CloseIcon fontSize="large" className="text-brand" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <MenuIcon fontSize="large" className="text-gray-200" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className="lg:hidden bg-surface/95 backdrop-blur-md border-t border-brand/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="py-6">
              {NAV.map((id, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={id}
                    smooth
                    offset={-80}
                    duration={600}
                    className="block px-6 py-3 text-gray-300 capitalize hover:text-brand hover:bg-brand/10 transition-all duration-300 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    {id}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
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
