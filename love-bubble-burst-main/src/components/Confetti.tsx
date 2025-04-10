
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ConfettiPieceProps {
  color: string;
  x: number;
  delay: number;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({ color, x, delay }) => {
  const size = 5 + Math.random() * 10;
  const duration = 2 + Math.random() * 3;
  const rotate = Math.random() * 360;
  const finalX = x + (Math.random() * 200 - 100);
  
  return (
    <motion.div
      className="absolute"
      style={{
        width: size,
        height: size * (Math.random() * 1.5 + 0.5),
        backgroundColor: color,
        left: x,
        top: "50%",
      }}
      initial={{ opacity: 0, y: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [0, -100 - Math.random() * 100],
        x: [0, finalX],
        rotate: [0, rotate + 360 * 2],
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    />
  );
};

interface ConfettiProps {
  count?: number;
}

const Confetti: React.FC<ConfettiProps> = ({ count = 100 }) => {
  const [pieces, setPieces] = useState<React.ReactNode[]>([]);
  const colors = ['#FF85A2', '#FFDEE2', '#FF4D6D', '#FFB6C1', '#FFC0CB'];

  useEffect(() => {
    const newPieces = [];
    const centerX = window.innerWidth / 2;
    const spreadX = window.innerWidth * 0.3;

    for (let i = 0; i < count; i++) {
      const x = centerX + (Math.random() * spreadX * 2) - spreadX;
      const delay = Math.random() * 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      newPieces.push(
        <ConfettiPiece key={i} color={color} x={x} delay={delay} />
      );
    }
    
    setPieces(newPieces);
  }, [count, colors]);

  return <div className="confetti-container w-full h-full absolute pointer-events-none">{pieces}</div>;
};

export default Confetti;
