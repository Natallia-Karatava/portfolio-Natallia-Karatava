import { motion } from "framer-motion";

const RedDotsGrid = () => {
  return (
    <div className="relative w-fit h-fit grid grid-cols-12 gap-3">
      {[...Array(144)].map((_, i) => {
        const delay = Math.random() * 1.5; // random delay
        return (
          <motion.div
            key={i}
            className="w-2 h-2 bg-red-600 rounded-full opacity-80"
            initial={{
              y: -400,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay,
            }}
          />
        );
      })}
    </div>
  );
};

export default RedDotsGrid;
