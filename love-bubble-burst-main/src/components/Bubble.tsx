
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BubbleProps {
  onPop: () => void;
}

const Bubble: React.FC<BubbleProps> = ({ onPop }) => {
  const [isPoping, setIsPoping] = useState(false);

  const handlePop = () => {
    setIsPoping(true);
    setTimeout(() => {
      onPop();
    }, 450); // Slightly before burst animation ends
  };

  return (
    <motion.div
      className={cn(
        "bubble w-80 h-80 bg-transparent border-2 border-white backdrop-blur-sm bg-white/10",
        "hover:shadow-[0_0_50px_5px_rgba(255,133,162,0.5)]",
        isPoping && "animate-burst"
      )}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={!isPoping ? handlePop : undefined}
    />
  );
};

export default Bubble;
