const RedDotTransform = () => {
  return (
    <div className="relative w-fit h-fit grid grid-cols-12 gap-3">
      {[...Array(144)].map((_, i) => {
        return (
          <motion.div
            key={i}
            className="w-2 h-2 bg-red-600 rounded-full opacity-80"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        );
      })}
    </div>
  );
};

export default RedDotTransform;
