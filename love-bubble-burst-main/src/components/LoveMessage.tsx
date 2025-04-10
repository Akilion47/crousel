
import React from 'react';
import { motion } from 'framer-motion';

const LoveMessage: React.FC = () => {
  // Let's pick a few images to display in the love message
  const featuredImages = [
  '/lovable-uploads/4f68ed04-a2f2-4663-9c21-8bef4ae9e5de.JPG',
  '/lovable-uploads/3E4DE232-67F1-4268-AA3E-7D001519BD21.JPG',
  '/lovable-uploads/367d3a1e-339e-4354-be5a-74c05a6e7a12.JPG'
];


  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-full absolute top-0 left-0 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="bg-gradient-to-b from-pink-300/80 via-pink-400/80 to-pink-500/80 backdrop-blur-md w-full h-full absolute top-0 left-0 z-10" />
      
      <motion.div className="relative z-20 flex flex-col items-center w-full px-4">
        <motion.div
          className="overflow-hidden rounded-full border-4 border-white shadow-xl mb-8 w-40 h-40 md:w-48 md:h-48"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.4 }}
        >
          <img 
            src={featuredImages[0]} 
            alt="Kishu" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          className="love-text text-6xl md:text-8xl text-white font-bold text-center drop-shadow-lg"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
        >
          I love you
        </motion.h1>
        
        <motion.h1
          className="love-text text-7xl md:text-9xl text-white font-bold text-center drop-shadow-lg"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.3, duration: 1, type: "spring" }}
        >
          kishu
        </motion.h1>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mt-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {[1, 2].map((_, i) => (
            <motion.div
              key={i}
              className="w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden border-2 border-white shadow-lg"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, i % 2 === 0 ? 5 : -5, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              <img 
                src={featuredImages[i+1]} 
                alt={`Kishu ${i+1}`} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center space-x-2"
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="text-red-500 text-3xl"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              >
                ❤️
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoveMessage;
