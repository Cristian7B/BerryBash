import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const ConfettiExplosion = () => {

  const drawTargetShape = (ctx) => {
    const radius = 5; // Tamaño del radio de los círculos
    const colors = ['#5058E6', 'white', '#5058E6']; // Colores alternados
  
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(0, 0, radius * (3 - i), 0, 2 * Math.PI);
      ctx.fillStyle = colors[i];
      ctx.fill();
      ctx.closePath();
    }
  };

  return <Confetti drawShape={drawTargetShape} tweenDuration={6000} numberOfPieces={25}/>;
};

export default ConfettiExplosion;
