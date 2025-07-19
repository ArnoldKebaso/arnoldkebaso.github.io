import { motion } from 'framer-motion';
import { useState } from 'react';

const GlowButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  href,
  download,
  target,
  rel,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: 'bg-brand text-surface border-brand hover:bg-brand-dark',
    secondary: 'bg-transparent text-brand border-brand hover:bg-brand hover:text-surface',
    ghost: 'bg-transparent text-gray-300 border-gray-600 hover:border-brand hover:text-brand',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = `
    relative inline-flex items-center justify-center
    font-semibold rounded-full border-2 transition-all duration-300
    overflow-hidden group
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const glowClasses = isHovered 
    ? 'shadow-glow-lg before:opacity-100' 
    : 'shadow-glow before:opacity-0';

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${baseClasses} ${glowClasses}`}
      {...props}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={{
          translateX: isHovered ? '200%' : '-100%',
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      />
      
      {/* Glow background */}
      <div className="absolute inset-0 bg-brand/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

export default GlowButton;
