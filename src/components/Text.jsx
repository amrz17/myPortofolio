import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Text() {
  const words = ["a Software Engineer", "a AI Engineer", "a IoT Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl md:text-2xl" style={{ position: "relative", height: "40px" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          style={{ position: "absolute" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

