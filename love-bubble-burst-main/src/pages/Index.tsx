
import React, { useState, useEffect } from 'react';
import Bubble from '@/components/Bubble';
import Balloon from '@/components/Balloon';
import Confetti from '@/components/Confetti';
import LoveMessage from '@/components/LoveMessage';

const Index = () => {
  const [showBubble, setShowBubble] = useState(true);
  const [showBalloons, setShowBalloons] = useState(false);
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const colors = ['#FF85A2', '#FF4D6D', '#FFB6C1', '#FFC0CB'];
  const balloonCount = 25; // Increased the number of balloons
  
  const handleBubblePop = () => {
    setShowBalloons(true);
    setShowConfetti(true);
    
    setTimeout(() => {
      setShowBubble(false);
    }, 500);
    
    // Show love message after some balloons have floated up
    setTimeout(() => {
      setShowLoveMessage(true);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="z-10 relative">
        {showBubble && <Bubble onPop={handleBubblePop} />}
      </div>

      {showBalloons && (
        <>
          {[...Array(balloonCount)].map((_, i) => {
            const size = 30 + Math.random() * 40;
            const left = `${(i / balloonCount) * 100}%`;
            const delay = Math.random() * 1.5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            return (
              <Balloon 
                key={i} 
                color={color} 
                size={size} 
                delay={delay} 
                left={left}
                imageIndex={i}
              />
            );
          })}
        </>
      )}

      {showConfetti && <Confetti count={150} />}
      
      {showLoveMessage && <LoveMessage />}
      
      {!showBubble && !showLoveMessage && (
        <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-2xl text-pink-600 animate-pulse">Loading...</h2>
        </div>
      )}
      
      {!showLoveMessage && (
        <div className="absolute bottom-10 text-center text-pink-600/80">
          {showBubble ? "Pop the bubble!" : ""}
        </div>
      )}
    </div>
  );
};

export default Index;
