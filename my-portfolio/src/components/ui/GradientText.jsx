import { motion } from 'framer-motion';

const GradientText = ({ 
  children, 
  className = '', 
  gradient = 'brand',
  animate = false,
  ...props 
}) => {
  const gradients = {
    brand: 'bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent',
    rainbow: 'bg-gradient-to-r from-brand via-accent-purple to-accent-pink bg-clip-text text-transparent',
    sunset: 'bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple bg-clip-text text-transparent',
    ocean: 'bg-gradient-to-r from-brand to-blue-400 bg-clip-text text-transparent',
  };

  const Component = animate ? motion.span : 'span';

  const animationProps = animate ? {
    initial: { backgroundPosition: '0% 50%' },
    animate: { backgroundPosition: '100% 50%' },
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'linear',
    },
  } : {};

  return (
    <Component
      className={`${gradients[gradient]} ${className}`}
      style={animate ? { backgroundSize: '200% 200%' } : {}}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GradientText;
