import { useState } from 'react';

const SmartCounter = () => {
  const [quantity, setQuantity] = useState(0);
  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };
  return (
    <>
      <h2>{quantity}</h2>
      <button onClick={increaseQuantity}>Aumentar</button>
    </>
  );
};

export default SmartCounter;
