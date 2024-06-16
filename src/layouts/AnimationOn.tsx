import { motion } from "framer-motion";

interface AnimateProps {
  children: React.ReactNode;
}

const AnimationOn: React.FC<AnimateProps> = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true,amount: 0.7 }}
    >
      {children}
    </motion.div>
  );
};
export default AnimationOn;
