import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FloatingElement = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  direction = 'up',
  distance = 50,
  scale = false,
  rotate = false,
  ...props 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const initialState = {
    opacity: 0,
    ...directionOffset[direction],
    ...(scale && { scale: 0.8 }),
    ...(rotate && { rotate: -5 }),
  };

  const animateState = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale && { scale: 1 }),
    ...(rotate && { rotate: 0 }),
  };

  return (
    <motion.div
      ref={ref}
      initial={initialState}
      animate={inView ? animateState : initialState}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
