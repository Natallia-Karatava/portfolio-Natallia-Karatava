import { motion } from "framer-motion";

const RedDotsGrid = () => {
  return (
    <div className="relative w-fit h-fit grid grid-cols-12 gap-3">
      {[...Array(144)].map((_, i) => {
        // Рассчитываем случайную задержку появления для каждого кружка
        const delay = Math.random() * 1.5; // от 0 до 1.5 сек

        return (
          <motion.div
            key={i}
            className="w-2 h-2 bg-red-600 rounded-full opacity-80"
            initial={{
              y: -400, // Начинают выше экрана
              opacity: 0, // Изначально невидимы
            }}
            animate={{
              y: 0, // Опускаются в сетку
              opacity: 1, // Становятся видимыми
            }}
            transition={{
              duration: 0.8, // Длительность анимации
              ease: "easeOut",
              delay, // Индивидуальная задержка для каждого кружка
            }}
          />
        );
      })}
    </div>
  );
};

export default RedDotsGrid;
