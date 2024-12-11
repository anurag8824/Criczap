import React, { useState } from 'react';
import './Dice.css'

const Dice = () => {
  const [animation, setAnimation] = useState(false);
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');

  const randomDice = () => {
    const random = Math.floor(Math.random() * 10);
    if (random >= 1 && random <= 6) {
      rollDice(random);
    } else {
      randomDice(); // Retry if not in range 1-6
    }
  };

  const rollDice = (random) => {
    setAnimation(true);
    setTimeout(() => {
      switch (random) {
        case 1:
          setTransform('rotateX(0deg) rotateY(0deg)');
          break;
        case 6:
          setTransform('rotateX(180deg) rotateY(0deg)');
          break;
        case 2:
          setTransform('rotateX(-90deg) rotateY(0deg)');
          break;
        case 5:
          setTransform('rotateX(90deg) rotateY(0deg)');
          break;
        case 3:
          setTransform('rotateX(0deg) rotateY(90deg)');
          break;
        case 4:
          setTransform('rotateX(0deg) rotateY(-90deg)');
          break;
        default:
          break;
      }
      setAnimation(false); // Remove animation after 4 seconds
    }, 4050);
  };

  const handleRoll = () => {
    randomDice();
  };

  return (
    <div className="container">
      <div
        className={`dice ${animation ? 'rolling' : ''}`}
        style={{ transform }}
      >
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face right"></div>
        <div className="face left"></div>
      </div>
      <button className="roll" onClick={handleRoll}>
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;
