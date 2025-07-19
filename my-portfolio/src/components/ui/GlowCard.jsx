import { motion } from 'framer-motion';
import { useState } from 'react';

const GlowCard = ({ 
  children, 
  className = '', 
  glowColor = 'brand',
  hoverEffect = true,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const glowColors = {
    brand: 'shadow-brand/20 hover:shadow-brand/40 border-brand/20 hover:border-brand/40',
    purple: 'shadow-accent-purple/20 hover:shadow-accent-purple/40 border-accent-purple/20 hover:border-accent-purple/40',
    pink: 'shadow-accent-pink/20 hover:shadow-accent-pink/40 border-accent-pink/20 hover:border-accent-pink/40',
    orange: 'shadow-accent-orange/20 hover:shadow-accent-orange/40 border-accent-orange/20 hover:border-accent-orange/40',
  };

  return (
    <motion.div
      className={`
        relative p-6 rounded-2xl bg-surface-light/50 backdrop-blur-sm 
        border border-gray-700/50 transition-all duration-300
        ${glowColors[glowColor]}
        ${hoverEffect ? 'hover:transform hover:scale-105' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      {...props}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand/0 via-brand/20 to-brand/0"
        animate={{
          rotate: isHovered ? 360 : 0,
        }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: isHovered ? Infinity : 0,
        }}
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, rgba(24, 232, 255, 0.2) 50%, transparent 100%)`,
        }}
      />
      
      {/* Inner content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Inner glow */}
      <div className={`
        absolute inset-0 rounded-2xl transition-opacity duration-300
        ${isHovered ? 'opacity-20' : 'opacity-0'}
      `} 
      style={{
        background: 'radial-gradient(circle at center, rgba(24, 232, 255, 0.1) 0%, transparent 70%)',
      }} />
    </motion.div>
  );
};

export default GlowCard;
