import { useEffect, useState } from 'react';
import './IFoodCounter.css';

const IFoodCounter = () => {
  const [value, setValue] = useState(0);
  const [preco, setPreco] = useState((0.0).toFixed(2));

  useEffect(() => {
    setPreco((2 * value).toFixed(2));
  }, [value]);

  const add = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const subtract = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };
  return (
    <>
      <div className='counter-wrapper'>
        <button
          className={'counter-button-' + (value > 0 ? 'active' : 'deactivated')}
          onClick={subtract}
        >
          -
        </button>
        <p>{value}</p>
        <button className='counter-button-active' onClick={add}>
          +
        </button>
      </div>
      <p id='moeda'>$ {preco}</p>
    </>
  );
};

export default IFoodCounter;
