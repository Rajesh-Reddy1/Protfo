import { motion } from "framer-motion";
import { cardio } from 'ldrs'

cardio.register()



const LoadingAnimation = ({ isLoading, onLoadingComplete }:any) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 12 }}
      animate={{ opacity: isLoading ? 12 : 0 }}
      transition={{ duration: 1.0 }}
      onAnimationComplete={() => {
        if (!isLoading) {
          onLoadingComplete();
        }
      }}
    >
    <l-cardio size="80" stroke="6" speed="1" color="white"></l-cardio>
    </motion.div>
  );
};

export default LoadingAnimation;