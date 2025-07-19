import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PageLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-surface"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          {/* Animated Logo */}
          <motion.div
            className="w-20 h-20 mx-auto mb-8 relative"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute inset-0 rounded-full border-4 border-brand/20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand animate-spin"></div>
          </motion.div>
          
          {/* Loading Text */}
          <motion.h2
            className="text-2xl font-bold text-brand"
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Loading...
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            className="text-gray-400 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Preparing awesome content
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageLoader;
