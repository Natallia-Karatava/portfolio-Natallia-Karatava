import { motion } from "framer-motion";

const RedDotsSquare = ({ isHovered }) => {
  const size = 12;
  const totalDots = size * size;

  return (
    <motion.div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20">
      <motion.div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
          gap: "12px",
          transform: "translateX(-220%)",
        }}
      >
        {[...Array(totalDots)].map((_, i) => {
          const row = Math.floor(i / size);
          const col = i % size;
          const center = (size - 1) / 2;
          const xOffset = (col - center) * 10 + 60;
          const yOffset = (row - center) * 10;

          return (
            <motion.div
              key={i}
              className="w-2 h-2 bg-red-600 rounded-full opacity-80"
              animate={isHovered ? { x: xOffset, y: yOffset } : { x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default RedDotsSquare;
