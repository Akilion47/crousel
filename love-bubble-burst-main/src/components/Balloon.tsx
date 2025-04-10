
import React from 'react';
import { motion } from 'framer-motion';

interface BalloonProps {
  color: string;
  size: number;
  delay: number;
  left: string;
  imageIndex: number;
}

const Balloon: React.FC<BalloonProps> = ({ color, size, delay, left, imageIndex }) => {
  // Random duration between 8-12s
  const duration = 8 + Math.random() * 4;
  // Random path variance
  const xVariance = Math.random() * 100 - 50;

  return (
    <motion.div
      className="balloon"
      style={{ left }}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: 1,
        y: [0, -window.innerHeight * 1.2],
        x: [0, xVariance, xVariance * 0.8, xVariance * 1.2],
        rotate: [0, 5, -5, 3, -3, 0],
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      <div className="relative">
        <div 
          className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-pink-300 shadow-lg"
          style={{ 
            transform: `scale(${size / 40})`,
            backgroundColor: color 
          }}
        >
          <img 
  src={`/lovable-uploads/${getKishuImage(imageIndex)}`} 
  alt="Kishu" 
  className="w-full h-full object-cover" 
/>

        </div>
        <motion.div 
          className="absolute w-0.5 bg-gray-400 rounded-full"
          style={{
            height: size * 0.8,
            top: size * 0.6,
            left: size / 2,
          }}
        />
      </div>
    </motion.div>
  );
};

// Helper function to get Kishu's images
const getKishuImage = (index: number): string => {
  const images = [
    '2e145701-a661-4ca6-bea1-b282da458408.JPG',
    '3E4DE232-67F1-4268-AA3E-7D001519BD21.JPG',
    '4f68ed04-a2f2-4663-9c21-8bef4ae9e5de.JPG','8e0e8843-624b-4c1a-a313-b0c254847921.JPG','15a9d5c9-1152-4fe9-8f7b-7824719dd3cc.JPG','106c56fe-cebe-4f0c-8c3e-3198f604fa3a.JPG','367d3a1e-339e-4354-be5a-74c05a6e7a12.JPG','24992ef6-1feb-4521-b6ef-7de50d8d5c71.JPG','139254ba-0444-43a0-af4a-e9c9a2f897e5.JPG','c67cfef1-1397-4c2d-abb8-cfe096acb069.JPG','cbf18dc6-b1df-4b7a-87d2-13e37330bf72.JPG','d6028169-fb00-4283-9d37-809a5251f349.JPG','e0f9565f-0258-48dc-8cf2-555afe72b389.JPG','fa69fc0c-c1dd-48d3-86c8-92a905e97c61.JPG'
  ];
  
  return images[index % images.length];
};

export default Balloon;
